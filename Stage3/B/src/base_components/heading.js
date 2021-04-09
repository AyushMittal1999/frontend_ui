var Heading = React.memo(function Heading(_ref) {
  var type = _ref.type,
      value = _ref.value,
      id = _ref.id,
      className = _ref.className;

  return React.createElement(
    "div",
    { id: id || "" },
    +type === 1 ? React.createElement(
      "h1",
      { className: className },
      value
    ) : +type === 2 ? React.createElement(
      "h2",
      { className: className },
      value
    ) : React.createElement(
      "h3",
      { className: className },
      value
    )
  );
}, function () {
  return true;
});