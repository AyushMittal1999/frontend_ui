const Weekday = React.memo( function Weekday({day , dataService}){

    const meals = ["breakfast","lunch","snacks" ,"dinner"];
    return(
    <div>
        <Heading className="day-heading" value={day[0].toUpperCase() + day.substring(1) } type="2"/>
        <hr></hr>
        <section className="day-schedule">

        <div className="flex-div-2container">
        {meals.slice(0,2).map( (m)=>{
           return <Card key={m} classes ={[`card1 ${m}` , `weekday-image-div ${m}-weekday-image-div` , "text-in-card"]}  img={{ imgURL:`../resources/images/${m}.jpg`} } data={ dataService.getMealData(day, m) }   />
        })}
        </div>
        <div className="flex-div-2container">
        {meals.slice(2,4).map( (m)=>{
           return <Card key={m} classes ={[`card1 ${m}` , `weekday-image-div ${m}-weekday-image-div` , "text-in-card"]}  img={{ imgURL:`../resources/images/${m}.jpg`} } data={ dataService.getMealData(day, m) }   />
        })}
        </div>
        
        </section>
    </div>
    );

}, (prevProp, curProp) =>  !(curProp.specificUpdate==="no" || (curProp.specificUpdate === curProp.day) ) );