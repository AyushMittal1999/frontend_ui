import React from "react";

import img_tick from "../resources/images/tick.jpg";
import img_wrong from "../resources/images/wrong.jpg";

interface StatusProps {
  statusVisiblity: 1 | 0 | -1;
  message?: string;
}
function Status({ statusVisiblity, message = "" }: StatusProps) {
  // render status
  return (
    //Parent is visible if isSuccess != -1
    <div id="status" className="status">
      {
        /* Success is visible if isSucces is 1 */
        statusVisiblity === 1 ? (
          <div id="status-success" className="status__success">
            <img src={img_tick} alt="success" />
            <div> Update Successful {message}</div>
          </div>
        ) : (
          <></>
        )
      }
      {
        /* Fail is visible is isSuccess=0 */
        statusVisiblity === 0 ? (
          <div id="status-fail" className="status__fail">
            <img src={img_wrong} alt="error" />
            <div>
              Update Failed.. {message === "" ? "Please Try Again" : message}
            </div>
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
}

export default Status;
