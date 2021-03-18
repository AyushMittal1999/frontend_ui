

function Card( { classes:[parentClass =" ",imgClass = " ", textClass=" "] , img : {imgURL=" ", imgAlt="alt"} , data=[] } ){


    return(
        <div className={parentClass} >
            <div className={imgClass} >
                <img src={imgURL} alt={imgAlt} ></img>
            </div>
            <div className={textClass} >
                <ul>
                   { data.map( (item,index) => {
                       if( Array.isArray(item) && item.length ===3 ){
                        return ( <li key ={ item[0] + " "+index } >
                            {item[0] +" "}
                            <div className="inline-div">{item[1].length==0 ?"nothing":item[1] }</div>
                            {" "+item[2]}
                            </li> 
                        );
                       } 
                       else return ( <li key ={ item + " "+index } >{item}</li> );
                    })
                    }
                </ul>
            </div>

        </div>

    )

}