
const  WeekScheduleHeading= React.memo( function WeekScheduleHeading( {displayModalHandler}){

    const handleClick = ()=>{
        displayModalHandler(true);
    }


    return(

        <div className="schedule-heading">
            <div className="schedule-heading-inner major-heading">
                <h2>Weekly Schedule</h2>
                <button className="edit-button button" onClick={handleClick}>Edit Schedule</button>
            </div>
            <hr className="major-heading-hr"></hr>
        </div>

    )

} , ()=>false ); // Heading to be same no rerendering required