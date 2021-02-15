
const DATA_KEY = "dietData";
const WEEKDAYS = ["monday" , "tuesday" , "wednesday" ,"thursday" , "friday" ,"saturday" , "sunday" ];
const MEALS = ["breakfast" , "lunch" , "snacks" , "dinner"];



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

// ADD event Listenser to buttons
// Listener to close modal
modal_close_button.addEventListener("click" , hideModal );

//Listener to display Modal
edit_button.addEventListener("click" , showModal );

//Listener to update changes
modal_update_button.addEventListener("click" , updateSchedule );






// Function to initialize storage for first time visiters;
function initLocalStorage(){

    if( localStorage.getItem( DATA_KEY) === null){
        
        let defaultarr = [        ] ;
        
        for( const i in WEEKDAYS ){
            defaultarr.push( [ [], [] , [] , [] ] );
        }

        localStorage.setItem( DATA_KEY , JSON.stringify(defaultarr) );

    }
}


// Copy Attributes from one node to other node
function copyAttributes( dest, src  ){

    for( att of src.attributes ){
        dest.setAttribute( att.name , att.value ) ;
    }

}

// Make a UL tag corresponding to list of food items for a given node to be replaced
function convertToULTag(list , org_node){
    const parentULTag = document.createElement("ul");
    for( l of list){
        const liTag = document.createElement("li");
        
        liTag.appendChild( document.createTextNode( l ) );
        parentULTag.appendChild(liTag);
    }


    copyAttributes( parentULTag , org_node );

    return parentULTag;
}

// Update Today day Summary
function updateHTMLToday(){

    const todayDay = WEEKDAYS[ (new Date().getDay() -1 + 7 )%7 ] ;
    const newitems = JSON.parse( localStorage.getItem(DATA_KEY) )[ WEEKDAYS.indexOf(todayDay) ];
    today_breakfast.textContent = (newitems[ 0 ].length >0 )?newitems[ 0 ].join(", "):"nothing";
    today_lunch.textContent = (newitems[ 1 ].length >0 )?newitems[ 1 ].join(", "):"nothing"; 
    today_snacks.textContent = (newitems[ 2 ].length >0 )?newitems[ 2 ].join(", "):"nothing"; 
    today_dinner.textContent = (newitems[ 3 ].length >0 )?newitems[ 3 ].join(", "):"nothing"; 

}

// Update Cards on HTML for specified days
function updateHTML( days = WEEKDAYS ){

    for( const day of days ){
        const ulLiveList = document.getElementById( day +"-schedule").getElementsByClassName("food-item-list");
        const newitems = JSON.parse( localStorage.getItem(DATA_KEY) )[ WEEKDAYS.indexOf(day) ];
        for( let ithMeal = ulLiveList.length-1  ; ithMeal>=0; ithMeal-- ){
            // console.log(  ) ;
            ulLiveList[ithMeal].parentNode.replaceChild(  convertToULTag(newitems[ ithMeal ]  , ulLiveList[ithMeal] ) , ulLiveList[ithMeal] );
        }

    }

    const todayDay = WEEKDAYS[ (new Date().getDay() -1 + 7 )%7 ] ;

    if( days.indexOf( todayDay) !== -1 ){
        updateHTMLToday();
    }

}



// Function to close Modal
function hideModal(){
    document.getElementById("modal-cover").style.display = "none";
}

// Function to Open Modal
function showModal(){
    document.getElementById("modal-cover").style.display = "block";
}

// Function to Update Schedule from modal
function updateSchedule(){


    if( foodTextbox.value !== null ){
    
        let curdata  = localStorage.getItem(DATA_KEY);
        curdata = JSON.parse(curdata);

        // Debugging 
        // console.log(  foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ) ; } ) ) ;
        // console.log(  foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) ) ;

        let newFoodItem =  foodTextbox.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) ;

        // Depreciated 
        // for( const item of foodTextbox.value.split(";") ){
        //     if( item != ""){
                
        //         newFoodItem.push(item.trim()[0].toUpperCase() + item.trim().substring(1) );
        //     }
        // }

        curdata[ WEEKDAYS.indexOf( daySelect.value.toLowerCase() ) ][ MEALS.indexOf( mealSelect.value.toLowerCase() ) ] = newFoodItem;

        localStorage.setItem(DATA_KEY , JSON.stringify(curdata) );

        updateHTML( [daySelect.value.toLowerCase()] );
        modalForm.reset(); 

    }

    hideModal();

}





initLocalStorage();
updateHTML() ;
updateHTMLToday();



// console.log(loadData() );

// let scheduleDiv = document.getElementById("schedule");
// let newobj = Object.assign({} , scheduleDiv);

// scheduleDiv.setAttribute("id" , "new");

// localStorage.setItem("my" , "old");
// let temp = localStorage.getItem("my");
// console.log( temp );

// localStorage.setItem( "my" , "value");
// console.log( temp);
