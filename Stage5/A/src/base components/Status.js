import React, { useContext } from "react";
import PropType from "prop-types";

import img_tick from "../resources/images/tick.jpg";
import img_wrong from "../resources/images/wrong.jpg";
import AppContext from "../context/Context";

const Status = React.memo(function Status({ statusVisiblity, message = "" }) {
  // render status
  return (
    //Parent is visible if isSuccess != -1
    <div
      id="status"
      className="status"
      style={{ display: statusVisiblity === -1 ? "none" : "block" }}
    >
      {/* Success is visible if isSucces is 1 */}
      <div
        id="status-success"
        className="status__success"
        style={{ display: statusVisiblity === 1 ? "" : "none" }}
      >
        <img src={img_tick} alt="success" />
        <div> Update Successful {message}</div>
      </div>

      {/* Fail is visible is isSuccess=0 */}
      <div
        id="status-fail"
        className="status__fail"
        style={{ display: statusVisiblity === 0 ? "" : "none" }}
      >
        <img src={img_wrong} alt="error" />
        <div>
          {" "}
          Update Failed.. {message === "" ? "Please Try Again" : message}
        </div>
      </div>
    </div>
  );
}); // Re render after shallowing comparing properties

Status.protoTypes = {
  statusVisiblity: PropType.oneOf([1, -1, 0]).isRequired, // Require only 1 , 0 , -1 values to valid
};

function StatusWithContext() {
  const context = useContext(AppContext);

  return <Status statusVisiblity={context.status.visiblity} />;
}
export default StatusWithContext;
