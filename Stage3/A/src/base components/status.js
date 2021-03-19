const Status = React.memo( function Status( {isSuccess} ){

    console.log("render status");
    return (
        //Parent is visible if isSuccess != -1
        <div id ="status" className="status" style={{display:(isSuccess==-1?"none":"block")}}>
            
            {/* Success is visible if isSucces is 1 */}
            <div id ="status-success" className="status__success" style={{display:(isSuccess==1?"":"none")}}>
                <img src ="../resources/images/tick.jpg" alt ="success"/> 
                <div> Update Successful </div>    
            </div>

            {/* Fail is visible is isSuccess=0 */}
            <div id ="status-fail" className="status__fail"style={{display:(isSuccess==0?"":"none")}}>
                <img src ="../resources/images/wrong.jpg" alt ="error" /> 
                <div> Update Failed.. Please Try Again</div>    
            </div> 
        </div>
    );
}, (prevProps, nextProps) => prevProps.isSuccess === nextProps.isSuccess );  // Re render only if issuccess updates
