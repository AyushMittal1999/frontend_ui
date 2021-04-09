

function Index(){

    const weekdays = ["monday" , "tuesday" , "wednesday" , "thursday" ,"friday" , "saturday" ,"sunday"];
    const meals = ["breakfast","lunch","snacks" ,"dinner"];

    const service = new Service( weekdays , meals  ); 
    
    return(
    <React.StrictMode>
        <App dataService = {service}/>
    </React.StrictMode>
    );
}


ReactDOM.render( <Index/>, document.getElementById("root") );
