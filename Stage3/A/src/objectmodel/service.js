
function Service( wdays , meals ) {

    const DATA_KEY= "dietData";

    if( localStorage.getItem( DATA_KEY) === null){            
        let defaultarr = [   ] ;
        for( const i in WEEKDAYS ){
            defaultarr.push( [ [], [] , [] , [] ] );
        }
        localStorage.setItem( DATA_KEY , JSON.stringify(defaultarr) );
    }

    const model = new Model( JSON.parse( localStorage.getItem( DATA_KEY ) ), wdays, meals ) ;
    Service.prototype.updateMeal = ( day , meal , foodItems ) =>{

        if( model.updateMeal( day , meal , foodItems ) ){
            localStorage.setItem( DATA_KEY , JSON.stringify ( model.getCompressedData() ) ) ;
            return 1;
        }

        return 0;

    }

    Service.prototype.getMealData= (   day , meal ) => {
        if( day in model.schedule && meal in  model.schedule[day] ){
            return model.schedule[day][meal];
        }
        return [];
    }
  

}