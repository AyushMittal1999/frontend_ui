
function View( wdays , meals){


        const WEEKDAYS  = wdays;
        const MEALS = meals ;

        // Set Modal Dropdown listener
        const daySelect = document.getElementById("days-select");
        const mealSelect = document.getElementById("meal-select");

        // Get Button from HTML
        const modal_close_button = document.getElementById("modal-close-button");
        const modal_update_button = document.getElementById("modal-update-changes-button");
        const edit_button = document.getElementById("edit-button");

        // Get Input food-item from HTML
        const foodTextbox = document.getElementById("food-input");

        // Get Modal rom HTML
        const modalForm = document.getElementById("modal-form");


        // Get today schedule div from HTML
        const today_breakfast = document.getElementById("today-schedule-breakfast");
        const today_lunch = document.getElementById("today-schedule-lunch");
        const today_snacks = document.getElementById("today-schedule-snacks");
        const today_dinner = document.getElementById("today-schedule-dinner");

        // Get success status from HTML
        const success_div = document.getElementById("status-update-div");

        const modal_cover =  document.getElementById("modal-cover") ;

        let updateScheduleCallback ;

        View.prototype.bindUpdateSchedule = function( callback ){

            updateScheduleCallback = callback;

            //Listener to update changes
            modal_update_button.addEventListener("click" , updateSchedule.bind( this) );

        }

        // Function to close Modal
        View.prototype.hideModal = function (){
            modal_cover.style.display = "none";
        }

        // Function to Open Modal
        View.prototype.showModal = function(){
            modal_cover.style.display = "block";
        }


        function initCommonListeners( ){
            modal_close_button.addEventListener("click" , View.prototype.hideModal.bind( this) );

            //Listener to display Modal
            edit_button.addEventListener("click" , View.prototype.showModal.bind(this) );
        }

        initCommonListeners.bind( this )();


        function updateSchedule(){
            
            if( foodTextbox.value !== null ){

                const newFoodItem =  foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) ;
                updateScheduleCallback( daySelect.value.toLowerCase() ,mealSelect.value.toLowerCase() , newFoodItem ) ;
            }

            modalForm.reset();
            View.prototype.hideModal();

        }



        // Function to display success
        View.prototype.displaySuccess = function(){

            success_div.style.display = "block";

            setTimeout( View.prototype.hideSuccess.bind( this) , 2000 ) ;
        }

        // Function to hide success
        View.prototype. hideSuccess = function(){
        
            success_div.style.display = "none";

        }



    //  Update UI
    // Update Today day Summary
    function updateHTMLToday( data ){

        const todayDay = WEEKDAYS[ (new Date().getDay() -1 + 7 )%7 ] ;
        const newitems = data;
        
        today_breakfast.textContent = (newitems.breakfast.length >0 )?newitems.breakfast .join(", "):"nothing";
        today_lunch.textContent = (newitems.lunch.length >0 )?newitems.lunch.join(", "):"nothing"; 
        today_snacks.textContent = (newitems.snacks.length >0 )?newitems.snacks.join(", "):"nothing"; 
        today_dinner.textContent = (newitems.dinner.length >0 )?newitems.dinner.join(", "):"nothing"; 

    }


    // Copy Attributes from one node to other node
    function copyAttributes( dest, src  ){
        for( const att of src.attributes ){
            dest.setAttribute( att.name , att.value ) ;
        }
    }

    // Make a UL tag corresponding to list of food items for a given node to be replaced
    function convertToULTag(list , org_node){
        const parentULTag = document.createElement("ul");
        for( const l of list){
            const liTag = document.createElement("li");
            liTag.appendChild( document.createTextNode( l ) );
            parentULTag.appendChild(liTag);
        }
        copyAttributes( parentULTag , org_node );
        return parentULTag;
    }


    // Update Cards on HTML for specified days
    View.prototype.updateHTML = function( data , days = WEEKDAYS , meals = MEALS ){

        for( const day of days ){

            for( const meal of meals ){
                const ulLiveList = document.querySelector( "#" +day +"-schedule" + " ."+meal+"-meal-div ul" );          
                ulLiveList.parentNode.replaceChild(  convertToULTag( data[day][meal]  , ulLiveList ) , ulLiveList );
            }

        }

        const WEEKDAYS = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"] ;
        const todayDay = WEEKDAYS [ (new Date().getDay() -1 + 7 )%7 ] ;
        if( days.indexOf( todayDay) !== -1 ){
            updateHTMLToday(data[todayDay] );
        }
    }

}