
function View( wdays , meals){


        const WEEKDAYS  = wdays;
        const MEALS = meals ;

        // Set Modal Dropdown listener
        const daySelect = document.getElementById("days-select");
        const mealSelect = document.getElementById("meal-select");

        // Get Button from HTML
        const modal_close_button = document.getElementById("modal-close-button");
        const modal_update_button = document.getElementById("modal-update-changes-button");
        const edit_button = document.getElementById("schedule-heading-edit-button");

        // Get Input food-item from HTML
        const foodTextbox = document.getElementById("food-input");

        // Get Modal rom HTML
        const modalForm = document.getElementById("modal-form");


        // Get today schedule div from HTML
        const today_breakfast = document.getElementById("today-schedule-breakfast");
        const today_lunch = document.getElementById("today-schedule-lunch");
        const today_snacks = document.getElementById("today-schedule-snacks");
        const today_dinner = document.getElementById("today-schedule-dinner");

        const status = document.getElementById("status");

        // Get success status from HTML
        const success_div = document.getElementById("status-success");

        // Get Fail Status from HTML
        const fail_div = document.getElementById("status-fail");


        const modal_cover =  document.getElementById("modal-cover") ;

        const weekdays_wrapper = document.getElementById("weekdays-wrapper");

        // three Functions to create initial days layout
        function createMealLayout(day , meal){
            const parent = document.createElement("div");
            parent.className="card";
            parent.setAttribute("id" , day+ "-" + meal + "-card");
            
            const child1 = document.createElement( "div");
            child1.className= "card__image-holder";
            const img = document.createElement("img");
            img.setAttribute("src" , "images/"+meal + ".jpg");
            img.setAttribute("alt" , meal);
            child1.appendChild( img);

            const child2 = document.createElement( "div");
            child2.className= "card__text-holder";
            const ul = document.createElement("ul");
            ul.className="card__ul";
            child2.appendChild( ul);

            parent.appendChild(child1);
            parent.appendChild( child2);

            return parent;

        }
        function createDayLayout( day){

            const parent = document.createElement("div" );
            parent.className=day;
            const h2 = document.createElement( "h2" );
            h2.className=day+ "__minor-heading";
            h2.textContent=day[0].toUpperCase() + day.substring(1);
            parent.appendChild( h2);
            parent.appendChild( document.createElement("hr") );

            const section = document.createElement( "section");
            section.className=day+"-schedule__card-holder";
            section.setAttribute("id" , day+"-card-holder");


            const two_card_group1 = document.createElement("div");
            two_card_group1.className = "day-schedule__two-card-group";
            MEALS.slice(0,2).forEach( (m)=> two_card_group1.appendChild( createMealLayout(day,m)) ) ;
            
            const two_card_group2 = document.createElement("div");
            two_card_group2.className = "day-schedule__two-card-group";
            MEALS.slice(2,4).forEach( (m)=> two_card_group2.appendChild( createMealLayout(day,m)) ) ;
            

            section.appendChild( two_card_group1);
            section.appendChild( two_card_group2);

            parent.appendChild( section);

            return parent;
        }
        function initInitialLayout(){
            const fragment = new DocumentFragment();
            WEEKDAYS.forEach( (w) => fragment.appendChild( createDayLayout(w) ) );
            weekdays_wrapper.textContent="";
            weekdays_wrapper.appendChild( fragment) ;
        }
        initInitialLayout();



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
            modal_close_button.addEventListener("click" , View.prototype.hideModal );

            //Listener to display Modal
            edit_button.addEventListener("click" , View.prototype.showModal );
        }

        initCommonListeners();

        function updateSchedule(){
            
            if( foodTextbox.value !== null ){

                const newFoodItem =  foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) ;
                updateScheduleCallback( daySelect.value.toLowerCase() ,mealSelect.value.toLowerCase() , newFoodItem ) ;
            }

            modalForm.reset();
            View.prototype.hideModal();

        }



        // Function to display success
        View.prototype.displayStatus = function( isSuccess ){
    
            success_div.style.display = isSuccess== 1 ?"":"none";
            fail_div.style.display = isSuccess== 1 ?"none":"";

            status.style.display = "block";
            
            setTimeout( View.prototype.hideStatus , 2000 ) ;
        }

        // Function to hide success
        View.prototype. hideStatus = function(){
            status.style.display = "none";
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


    // Update Cards on HTML for specified days
    View.prototype.updateHTML = function( data , days = WEEKDAYS , meals = MEALS ){

        for( const day of days ){

            for( const meal of meals ){
                const ulLiveTag = document.querySelector( "#" +day +"-"+ meal +"-card" +" ul" );          
                const fragment = new DocumentFragment();
                data[day][meal].forEach( (item) => { const liTag = document.createElement("li"); liTag.appendChild(document.createTextNode( item) ); fragment.appendChild( liTag ) } ) ;
                ulLiveTag.textContent="";
                ulLiveTag.appendChild(fragment);
            }

        }

        // If today day schedule is different then update it
        const todayDay = WEEKDAYS [ (new Date().getDay() -1 + 7 )%7 ] ;
        if( days.indexOf( todayDay) !== -1 ){
            updateHTMLToday(data[todayDay] );
        }

    }

}