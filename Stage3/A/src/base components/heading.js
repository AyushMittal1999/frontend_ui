function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Heading = React.memo(function Heading(_ref) {
    var type = _ref.type,
        value = _ref.value,
        child = _ref.child,
        rest = _objectWithoutProperties(_ref, ["type", "value", "child"]);

    return React.createElement(
        "div",
        rest,
        +type === 1 ? React.createElement(
            "h1",
            child,
            value
        ) : +type === 2 ? React.createElement(
            "h2",
            child,
            value
        ) : React.createElement(
            "h3",
            child,
            value
        )
    );
}, function (prevProps, nextProps) {
    return true;
}); // Heading need to be updated once only no rerendering useful