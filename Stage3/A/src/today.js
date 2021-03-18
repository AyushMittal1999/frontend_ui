const Today = React.memo( function Today( {day , dataService }){

    const meals = ["breakfast","lunch","snacks" ,"dinner"];

    const data= meals.map( (m) => ["Have" , dataService.getMealData( day , m ).join(", ") ,`in ${m[0].toUpperCase() + m.substring(1)}`] );
    
    return(
        <div className="today-schedule">
            <Heading type ="2" className="today-schedule-heading major-heading" value ="Today's Diet Plan" />
            <hr className="major-heading-hr"></hr>
            <Card classes= {[ "today-schedule-flex-div" , "today-schedule-image-div" , "today-schedule-text-div"] } data={data} img={{imgURL:"../resources/images/diet.jpg"}}></Card>
        </div>
    );

}, (prevProp, curProp) =>  !(curProp.specificUpdate==="no" || (curProp.specificUpdate === curProp.day) ) );