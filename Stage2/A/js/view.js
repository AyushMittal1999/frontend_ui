
class View{

    #WEEKDAYS
    #MEALS

    constructor( WEEKDAYS , MEALS){

        this.#WEEKDAYS  = WEEKDAYS;
        this.#MEALS = MEALS ;

        // Set Modal Dropdown listener
        this.daySelect = document.getElementById("days-select");
        this.mealSelect = document.getElementById("meal-select");

        // Get Button from HTML
        this.modal_close_button = document.getElementById("modal-close-button");
        this.modal_update_button = document.getElementById("modal-update-changes-button");
        this.edit_button = document.getElementById("edit-button");

        // Get Input food-item from HTML
        this.foodTextbox = document.getElementById("food-input");

        // Get Modal rom HTML
        this.modalForm = document.getElementById("modal-form");


        // Get today schedule div from HTML
        this.today_breakfast = document.getElementById("today-schedule-breakfast");
        this.today_lunch = document.getElementById("today-schedule-lunch");
        this.today_snacks = document.getElementById("today-schedule-snacks");
        this.today_dinner = document.getElementById("today-schedule-dinner");

        // Get success status from HTML
        this.success_div = document.getElementById("status-update-div");

        this.initCommonListeners();
    }


    bindUpdateSchedule( callback ){

        this.updateScheduleCallback = callback;

        //Listener to update changes
        this.modal_update_button.addEventListener("click" , this.updateSchedule.bind( this) );

    }

    // Function to close Modal
    hideModal(){
        document.getElementById("modal-cover").style.display = "none";
    }

    // Function to Open Modal
     showModal(){
        document.getElementById("modal-cover").style.display = "block";
    }


    initCommonListeners( ){
        this.modal_close_button.addEventListener("click" , this.hideModal );

        //Listener to display Modal
        this.edit_button.addEventListener("click" , this.showModal );
    }


    updateSchedule(){
        
        if( this.foodTextbox.value !== null ){

            const newFoodItem =  this.foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) ;
            this.updateScheduleCallback( this.daySelect.value.toLowerCase() , this.mealSelect.value.toLowerCase() , newFoodItem ) ;
        }

        this.modalForm.reset();
        this.hideModal();

    }



    // Function to display success
    displaySuccess(){

        this.success_div.style.display = "block";

        setTimeout( this.hideSuccess.bind( this) , 2000 ) ;
    }

    // Function to hide success
    hideSuccess(){
    
        this.success_div.style.display = "none";

    }



    //  Update UI
    // Update Today day Summary
    updateHTMLToday( data ){

        const todayDay = WEEKDAYS[ (new Date().getDay() -1 + 7 )%7 ] ;
        const newitems = data;
        
        this.today_breakfast.textContent = (newitems.breakfast.length >0 )?newitems.breakfast .join(", "):"nothing";
        this.today_lunch.textContent = (newitems.lunch.length >0 )?newitems.lunch.join(", "):"nothing"; 
        this.today_snacks.textContent = (newitems.snacks.length >0 )?newitems.snacks.join(", "):"nothing"; 
        this.today_dinner.textContent = (newitems.dinner.length >0 )?newitems.dinner.join(", "):"nothing"; 

    }


    // Copy Attributes from one node to other node
    copyAttributes( dest, src  ){
        for( const att of src.attributes ){
            dest.setAttribute( att.name , att.value ) ;
        }
    }

    // Make a UL tag corresponding to list of food items for a given node to be replaced
    convertToULTag(list , org_node){
        const parentULTag = document.createElement("ul");
        for( const l of list){
            const liTag = document.createElement("li");
            liTag.appendChild( document.createTextNode( l ) );
            parentULTag.appendChild(liTag);
        }
        this.copyAttributes( parentULTag , org_node );
        return parentULTag;
    }


    // Update Cards on HTML for specified days
    updateHTML( data , days = this.#WEEKDAYS , meals =this.#MEALS ){

        for( const day of days ){

            for( const meal of meals ){
                const ulLiveList = document.querySelector( "#" +day +"-schedule" + " ."+meal+"-meal-div ul" );          
                ulLiveList.parentNode.replaceChild(  this.convertToULTag( data[day][meal]  , ulLiveList ) , ulLiveList );
            }

        }

        const WEEKDAYS = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"] ;
        const todayDay = WEEKDAYS [ (new Date().getDay() -1 + 7 )%7 ] ;
        if( days.indexOf( todayDay) !== -1 ){
            this.updateHTMLToday(data[todayDay] );
        }
    }

}