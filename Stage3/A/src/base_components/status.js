const Status = function Status({ isSuccess }) {
  return (
    //Parent is visible if isSuccess != -1
    <div id="status" className="status">
      {/* Success is visible if isSucces is 1 */}
      {isSuccess === 1 ? (
        <div id="status-success" className="status__success">
          <img src="../resources/images/tick.jpg" alt="success" />
          <div> Update Successful </div>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      {/* Fail is visible is isSuccess=0 */}
      {isSuccess === 0 ? (
        <div
          id="status-fail"
          className="status__fail"
          style={{ display: isSuccess == 0 ? "" : "none" }}
        >
          <img src="../resources/images/wrong.jpg" alt="error" />
          <div> Update Failed.. Please Try Again</div>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};
