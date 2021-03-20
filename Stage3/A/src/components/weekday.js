const Weekday = React.memo( function Weekday({day , dataService , specificMealUpdate }){


    const meals = dataService.MEALS;

    return(

    <div id={day}>
        
        {/* For heading Monday, Tuesday.... */}
        <h2 className={`${day}__minor-heading`}>{day[0].toUpperCase() + day.substring(1) } </h2>
        <hr></hr>

        {/* Section is holding all 4 meal cards */}
        <section className={`${day}-schedule__card-holder`}>
            
            {/* Grouping two meal (Breakfast and lunch) card under one div for UI purpose */}
            <div className="day-schedule__two-card-group">
            
                {/* Creating a card layout corresponding to each meal */}
                {meals.slice(0,2).map( (m)=>{
                return <Card key={m}  classes ={[`card ${m}` , `card__image-holder` , "card__text-holder"]}  img={{ src:`../resources/images/${m}.jpg`, alt:m} } data={ dataService.getMealData(day, m) } 
                        rerender={ ( specificMealUpdate && specificMealUpdate!=m)?0:1}  /> // Skip card rerendering if some other meal is updated
                })}

            </div>

            {/* Grouping two meal (Snacks and dinner) card under one div for UI purpose */}
            <div className="day-schedule__two-card-group">
                {/* Creating a card layout corresponding to each meal */}
                {meals.slice(2,4).map( (m)=>{
                return <Card key={m} classes ={[`card ${m}` , `card__image-holder` , "card__text-holder"]}  img={{ src:`../resources/images/${m}.jpg` , alt:m } } data={ dataService.getMealData(day, m) } 
                rerender={ ( specificMealUpdate && specificMealUpdate!=m)?0:1}   /> // Skip card rerendering if some other meal is updated
                })}
            </div>
        
        </section>
    </div>
    );

}, (prevProp, curProp) =>  !((curProp.requestID !== prevProp.requestID) && (curProp.specificDayUpdate === curProp.day) )  ); //Rerender the day only if any update has happened and any update is there for the current day
