const Modal = React.memo( function Modal( {visiblity , displayModalHandler ,updateData} ){

    const meals = ["breakfast","lunch","snacks" ,"dinner"];
    const weekdays = ["monday" , "tuesday" , "wednesday" , "thursday" ,"friday" , "saturday" ,"sunday"];

    // Day Selected by user
    const [day, setDay ] = React.useState("monday");
    // Meal selected by user 
    const [meal, setMeal] = React.useState("breakfast");
    // Input Entered by user
    const [ foodItems , setFoodItems] = React.useState( "" );
    // Parsed Item after checking repeatition and trim
    const [ parsedFoodItems , setParsedFoodItems] = React.useState( [] );
   
   
    // Using Reference to store deom reference of parsed item view and scroll to last for userview
    const dom_ref_ul = React.useRef();
    
    // On item change update parsed item list 
    function onChangeHandler(event ){

        let items = event.target.value.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } );           
        // Avoid Duplicates
        let taken = new Map();
        for( const ele of items){
            if(  ele !="" && ! taken.has(ele.toLowerCase()  ) ){
                taken.set( ele.toLowerCase() , ele );
            }
        }
        items = Array.from( taken.values() );
        //Update Parsed items
        setParsedFoodItems( items); 
        // Input to be same as user entered
        setFoodItems(event.target.value) ;

        //  Scroll to bottom
        if( dom_ref_ul.current ){
            dom_ref_ul.current.scrollTop = dom_ref_ul.current.scrollHeight;
        }
    }


    handleModalClose= () =>{
        displayModalHandler(false);
    }

    submitHandle = ()=>{
        // Check if update is succesful
        if( updateData( day,meal, 
            foodItems.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) )){            
                // Reset the form fields
                resetForm();
        }
        // else dont reset the form 
    }

    function resetForm(){
        // Reset the form fields
        setDay("monday");
        setMeal("breakfast");
        setFoodItems("");
        setParsedFoodItems([]);
    }


    return (
        <div  className="modal-cover" style={ {display:(visiblity?"block":"none") }} >
            <div className="modal">
                <button className="btn--right btn" onClick ={handleModalClose} >X</button>
                <button className="btn--simple" onClick={resetForm}>clear</button>
                
                <Heading type="3" value="Edit Schedule" className="main-heading" ></Heading>   
                
                {/* Form for user input */}
                <form onSubmit={ (event) =>     event.preventDefault() }>
                
                    <label htmlFor="days-select">Day: </label>
                      <select name = "days" id = "days-select" value={day} onChange={(e) => setDay(e.target.value)} onBlur={(e) => setDay(e.target.value)}>
                        {weekdays.map( (d) => <option value={d} key={d} >{d[0].toUpperCase() + d.substring(1) }</option> )}
                        </select>
                        <br></br>

                    <label htmlFor="meal-select">Time Of Day: </label>
                        <select name = "meal" id = "meal-select" value={meal} value={meal} onChange={(e) => setMeal( e.target.value)} onBlur={(e) => setMeal(e.target.value)}>
                        {meals.map( (d) => <option value={d} key={d}>{d[0].toUpperCase() + d.substring(1) }</option> )}  
                        </select>
                    <br></br>

                    <label htmlFor="food-input">Food Items (separated by ;) : </label>
                    
                    <input name="food" id="food-input" type="text" value={foodItems} onChange={onChangeHandler} onBlur={onChangeHandler}></input>
                    <br/>
                    
                    {/* Parsed enteried items in modal view */}
                    { parsedFoodItems.length>0?
                        <label htmlFor="modal-ul">Preview : </label>:<React.Fragment></React.Fragment> }

                    { parsedFoodItems.length>0?
                        <ul ref={dom_ref_ul} id ="modal-ul" className="modal__ul">
                        {   parsedFoodItems.map((item) => <li key={item} >{item}</li> )}
                        </ul>:<React.Fragment></React.Fragment>    }             
                </form>
 
                <button className="modal__submit-btn" onClick={submitHandle}>Update Changes</button>
            </div>
        </div>

    );
} , areEqual =function(prevProp,nextProp ){
    return nextProp.visiblity == prevProp.visiblity;} ) ;  // Rerender Modal due to parent state only if visiblity is updated