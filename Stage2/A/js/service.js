
class Service{

    #DATA_KEY ;
    #model;
    #refreshMealUI;
    #showUpdateSuccess;
    #showUpdateFail;

    constructor( wdays , meals ) {
    
        this.#DATA_KEY= "dietData";

    
        if( localStorage.getItem( this.#DATA_KEY) === null){
            
            let defaultarr = [   ] ;
            
            for( const i in WEEKDAYS ){
                defaultarr.push( [ [], [] , [] , [] ] );
            }
    
            localStorage.setItem( this.#DATA_KEY , JSON.stringify(defaultarr) );
        }

        this.#model = new Model( JSON.parse( localStorage.getItem( this.#DATA_KEY ) ), wdays, meals ) ;

    }    

    getData(){
        return this.#model.schedule; 
    }

    
    bindShowUpdateSuccess( callbackFn ){
        this.#showUpdateSuccess = callbackFn ; 
    }

    bindShowUpdateFail( callbackFn){
        this.#showUpdateFail = callbackFn ;
    }

    bindRefreshMealUI( callbackFn ){
        this.#refreshMealUI = callbackFn ;
    }

    updateMeal( day , meal , foodItems ){

        if( this.#model.updateMeal( day , meal , foodItems ) ){

            this.#showUpdateSuccess();

            localStorage.setItem( this.#DATA_KEY , JSON.stringify ( this.#model.getCompressedData() ) ) ;

            this.#refreshMealUI( this.getData() , [day] , [meal]  ) ;

        }
        else{
            // this.showUpdateFail();   //TODO
        }


    }
  

}