
function App( {dataService}){

    let weekdays = ["monday" , "tuesday" , "wednesday" , "thursday" ,"friday" , "saturday" ,"sunday"];
    
    const [isModalVisible, setIsModalVisible] = React.useState( ()=> false );
    const displayModalHandler = function(value){
        setIsModalVisible(value);
    }

    
    const [ specificUpdate , setSpecificUpdate ] = React.useState("no");
    
    const updateData=function( day,meal,foodItems){
        
        if( dataService.updateMeal(day,meal,foodItems) ){
            displayModalHandler(false);
            setSpecificUpdate(day);
            return 1;
        }
        else{
            // UNSUCESS - UPDATE
            console.log( "error happened");
            return 0;
        }

    }
    const todayDay = weekdays[ (new Date().getDay() -1 + 7 )%7 ] ;
    console.log( );
    return(
     <React.Fragment>
     <Heading type="1"className="main-heading" value="Diet Plan"  />
     <Modal visiblity={isModalVisible} displayModalHandler ={displayModalHandler} updateData={updateData} />
     <Today day ={todayDay} dataService={dataService} specificUpdate={specificUpdate} />
     <WeekScheduleHeading displayModalHandler= {displayModalHandler}  />
    {  weekdays.slice(weekdays.indexOf(todayDay),7).concat(weekdays.slice( 0 ,weekdays.indexOf(todayDay) ) )
    .map( w  => <Weekday day={w} key={ w} dataService={dataService} specificUpdate={specificUpdate}  /> )}
     </React.Fragment>
    )

}
