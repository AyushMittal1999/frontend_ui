const Heading= React.memo( function Heading( {className,type,value} ){

    return(
        <div className = {className} >
        { (+type) ===1 ?<h1>{value}</h1> : (+type) ===2 ?<h2>{value}</h2> :<h3>{value}</h3> }
        </div>
    );
} , (prevProps, nextProps) => false ); // Heading need to be updated once only no rerendering useful