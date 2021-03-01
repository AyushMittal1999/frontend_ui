

    WEEKDAYS = ["monday" , "tuesday" , "wednesday" ,"thursday" , "friday" ,"saturday" , "sunday" ];
    MEALS = ["breakfast" , "lunch" , "snacks" , "dinner"];


app = new Controller( new Service(WEEKDAYS , MEALS ) , new View(WEEKDAYS , MEALS ) );