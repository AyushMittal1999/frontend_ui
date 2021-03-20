const Today = React.memo( function Today( {day , dataService }){

    const meals = ["breakfast","lunch","snacks" ,"dinner"];

    // Updating data to add Have ..... in meal ( breakfast ... .) 
    const data= meals.map( (m) => ["Have" , dataService.getMealData( day , m ).join(", ") ,`in ${m[0].toUpperCase() + m.substring(1)}`] );
    return(
        <div id="today-schedule">

            <Heading type ="2" child={{className:"today-schedule__major-heading"}} value ="Today's Diet Plan" />
            <hr className="major__hr"></hr>
            {/* Card layout for dispalying image and text for today */}
            <Card classes= {[ "today-schedule__content" , "today-schedule-content__image-holder" , "today-schedule-content__ulcover"] } data={data} 
                img={{src:"../resources/images/diet.jpg",alt:"schedule-image"}}
                ul={{className:"today-schedule-content__ul"}}></Card>
        </div>
    );

}, (prevProp, curProp) =>  !((curProp.requestID !== prevProp.requestID) && (curProp.specificDayUpdate === curProp.day) )  ); //Rerender the day only if any update has happened and any update is there for the current day
