const Modal = React.memo( function Modal( {visiblity , displayModalHandler ,updateData} ){

    const meals = ["breakfast","lunch","snacks" ,"dinner"];
    const weekdays = ["monday" , "tuesday" , "wednesday" , "thursday" ,"friday" , "saturday" ,"sunday"];

    const [day, setDay ] = React.useState("monday");
    const [meal, setMeal] = React.useState("breakfast");
    const [ foodItems , setFoodItems] = React.useState( "" );

    handleModalClose= () =>{
        displayModalHandler(false);
    }

    submitHandle = ()=>{
        if( updateData( day,meal, 
            foodItems.split(";").filter(x => x.trim().length>=1 ).map( function(x){ return x.trim().split(" ").filter(x => x.trim().length>=1 ).map(function(a){ return a[0].toUpperCase() + a.substring(1) ; } ).join(" ") ; } ) )){            
                setDay("monday");
                setMeal("breakfast");
                setFoodItems("")    
            }
    }

    return (
        <div className="modal-cover" style={ {display:(visiblity?"block":"none") }} >
            <div className="modal">
                <button className="button modal-close-button" onClick ={handleModalClose} >X</button>
                <Heading type="3" value="Edit Schedule" ></Heading>   
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
                    <input name="food" id="food-input" type="text" value={foodItems} onChange={(e) => setFoodItems(e.target.value)}></input>
                </form>                 
                <button className="button modal-update-changes-button" onClick={submitHandle}>Update Changes</button>
                </div>
            </div>


    );
} , areEqual =function(prevProp,nextProp ){
    return nextProp.visiblity == prevProp.visiblity;
} ) ;