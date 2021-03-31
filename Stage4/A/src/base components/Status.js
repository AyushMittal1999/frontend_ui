import React from "react";
import { connect } from "react-redux";

const Status = React.memo(function Status({ statusVisiblity, message = "" }) {
  // render status
  return (
    //Parent is visible if isSuccess != -1
    <div
      id="status"
      className="status"
      style={{ display: statusVisiblity == -1 ? "none" : "block" }}
    >
      {/* Success is visible if isSucces is 1 */}
      <div
        id="status-success"
        className="status__success"
        style={{ display: statusVisiblity == 1 ? "" : "none" }}
      >
        <img src="../resources/images/tick.jpg" alt="success" />
        <div> Update Successful {message}</div>
      </div>

      {/* Fail is visible is isSuccess=0 */}
      <div
        id="status-fail"
        className="status__fail"
        style={{ display: statusVisiblity == 0 ? "" : "none" }}
      >
        <img src="../resources/images/wrong.jpg" alt="error" />
        <div>
          {" "}
          Update Failed.. {message == "" ? "Please Try Again" : message}
        </div>
      </div>
    </div>
  );
}); // Re render after shallowing comparing properties

export default connect(({ status }) => {
  return { statusVisiblity: status.visiblity, message: status.message };
}, null)(Status);
