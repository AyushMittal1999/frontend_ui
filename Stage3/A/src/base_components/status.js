var Status = function Status(_ref) {
  var isSuccess = _ref.isSuccess;

  return (
    //Parent is visible if isSuccess != -1
    React.createElement(
      "div",
      { id: "status", className: "status" },
      isSuccess === 1 ? React.createElement(
        "div",
        { id: "status-success", className: "status__success" },
        React.createElement("img", { src: "../resources/images/tick.jpg", alt: "success" }),
        React.createElement(
          "div",
          null,
          " Update Successful "
        )
      ) : React.createElement(React.Fragment, null),
      isSuccess === 0 ? React.createElement(
        "div",
        {
          id: "status-fail",
          className: "status__fail",
          style: { display: isSuccess == 0 ? "" : "none" }
        },
        React.createElement("img", { src: "../resources/images/wrong.jpg", alt: "error" }),
        React.createElement(
          "div",
          null,
          " Update Failed.. Please Try Again"
        )
      ) : React.createElement(React.Fragment, null)
    )
  );
};