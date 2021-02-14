
const DATA_KEY = "dietData";
const WEEKDAYS = ["monday" , "tuesday" , "wednesday" ,"thursday" , "friday" ,"saturday" , "sunday" ];
const MEALS = ["breakfast" , "lunch" , "snacks" , "dinner"];

console.log( "helo");
storage = window.localStorage;

// localStorage.setItem("user", "Username");

function editSchedule(){

}

function initLocalStorage(){

    if( localStorage.getItem( DATA_KEY) === null){
        
        let defaultarr = [        ] ;
        
        for( const i in WEEKDAYS ){
            defaultarr.push( [ [], [] , [] , [] ] );
        }

        localStorage.setItem( DATA_KEY , JSON.stringify(defaultarr) );

    }
}

function copyAttributes( dest, src  ){

    for( att of src.attributes ){
        dest.setAttribute( att.name , att.value ) ;
    }

}

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

function updateHTML( days = WEEKDAYS ){

    for( const day of days ){
        const ulLiveList = document.getElementById( day +"-schedule").getElementsByClassName("food-item-list");
        const newitems = JSON.parse( localStorage.getItem(DATA_KEY) )[ WEEKDAYS.indexOf(day) ];
        for( let ithMeal = ulLiveList.length-1  ; ithMeal>=0; ithMeal-- ){
            console.log(  ) ;
            ulLiveList[ithMeal].parentNode.replaceChild(  convertToULTag(newitems[ ithMeal ]  , ulLiveList[ithMeal] ) , ulLiveList[ithMeal] );
        }

    }

}

initLocalStorage();
updateHTML() ;



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

        let newFoodItem = [];

        for( const item of foodTextbox.value.split(";") ){
            if( item != ""){
                
                newFoodItem.push(item.trim()[0].toUpperCase() + item.trim().substring(1) );
            }
        }

        curdata[ WEEKDAYS.indexOf( daySelect.value.toLowerCase() ) ][ MEALS.indexOf( mealSelect.value.toLowerCase() ) ] = newFoodItem;

        localStorage.setItem(DATA_KEY , JSON.stringify(curdata) );
        // foodTextbox.value = ""; 
        modalForm.reset(); 
        updateHTML( [daySelect.value.toLowerCase()] );
    }

    hideModal();

}


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

// ADD event Listenser to buttons
// Listener to close modal
modal_close_button.addEventListener("click" , hideModal );

//Listener to display Modal
edit_button.addEventListener("click" , showModal );

//Listener to update changes
modal_update_button.addEventListener("click" , updateSchedule );




// console.log(loadData() );

// let scheduleDiv = document.getElementById("schedule");
// let newobj = Object.assign({} , scheduleDiv);

// scheduleDiv.setAttribute("id" , "new");

// localStorage.setItem("my" , "old");
// let temp = localStorage.getItem("my");
// console.log( temp );

// localStorage.setItem( "my" , "value");
// console.log( temp);
