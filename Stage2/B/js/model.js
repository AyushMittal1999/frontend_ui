/*
@class Model
*/

function Model( schedule_data , weekdays, meals  ){

    const WEEKDAYS = weekdays;
    const MEALS = meals;

    let data = {};

    for( let i =0 ; i <  WEEKDAYS.length ; i++ ){
        data[ WEEKDAYS[i] ] = {}
        for( let j = 0; j <  MEALS.length ; j++){
            data[  WEEKDAYS[i] ][  MEALS[j] ] = schedule_data[ i ][j] ;
        }
    }

    let compressedData =[];

    for( let i =0 ; i <  WEEKDAYS.length ; i++ ){
        compressedData.push( []);
        for( let j = 0; j <  MEALS.length ; j++){
            compressedData[i].push (data[  WEEKDAYS[i] ][  MEALS[j] ] );
        }
    }


    this.schedule = data;
    compressedData = compressedData ; 

    

    this.addFoodItems = function( day , meal, items ){

        if( day && meal && items && Array.isArray( items ) ){

            items.filter( item => (item && (item!="" )) )

            if( (day in this.schedule) && (meal in this.schedule[day] )  ){
                this.schedule[day][meal].push( ...items );
                 compressedData[  WEEKDAYS.indexOf( day) ][  MEALS.indexOf(meal) ].push( ...items ) ;
                return  1;
            }

        }
        return 0 ;
    }


    this.updateMeal = function( day , meal, items ){

        if( day && meal && items ){

            items.filter( item => (item && (item!="" )) )

            if( (day in this.schedule) && (meal in this.schedule[day] )  ){

                // Avoid Duplicates
                let taken = new Map();
                for( const ele of items){
                    if(  ele !="" && ! taken.has(ele.toLowerCase()  ) ){
                        taken.set( ele.toLowerCase() , ele );
                    }
                }
                items = Array.from( taken.values() );
                
                this.schedule[day][meal] = items ;
                 compressedData[  WEEKDAYS.indexOf( day) ][  MEALS.indexOf(meal) ] = items  ;
                return  1;
            }

        }
        return 0 ;
    }

    this.getCompressedData = function(){

        return  compressedData ; 

    }

}