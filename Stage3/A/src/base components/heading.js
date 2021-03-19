const Heading= React.memo( function Heading( {type,value , child,...rest} ){

    console.log("re rendering heading");
    return(
        <div  {...rest}>
        { (+type) ===1 ?<h1 {...child}>{value}</h1> : (+type) ===2 ?<h2 {...child}>{value}</h2> :<h3 {...child}>{value}</h3> }
        </div>
    );
} , (prevProps, nextProps) => true ); // Heading need to be updated once only no rerendering useful
