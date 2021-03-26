var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function shallowEqual(object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = keys1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (object1[key] !== object2[key]) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return true;
}

var Card = React.memo(function Card(_ref) {
    var _ref$classes = _slicedToArray(_ref.classes, 3),
        _ref$classes$ = _ref$classes[0],
        parentClass = _ref$classes$ === undefined ? "" : _ref$classes$,
        _ref$classes$2 = _ref$classes[1],
        imgClass = _ref$classes$2 === undefined ? "" : _ref$classes$2,
        _ref$classes$3 = _ref$classes[2],
        textClass = _ref$classes$3 === undefined ? "" : _ref$classes$3,
        img = _ref.img,
        ul = _ref.ul,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? [] : _ref$data;

    console.log("card");
    return (
        // Card layout, div main parent
        React.createElement(
            "div",
            parentClass != "" ? { "className": parentClass } : {},
            React.createElement(
                "div",
                imgClass != "" ? { "className": imgClass } : {},
                React.createElement("img", img)
            ),
            React.createElement(
                "div",
                textClass != "" ? { "className": textClass } : {},
                React.createElement(
                    "ul",
                    ul,
                    data.map(function (item, index) {
                        if (Array.isArray(item) && item.length === 3) {
                            return React.createElement(
                                "li",
                                { key: item[0] + " " + index },
                                item[0] + " ",
                                React.createElement(
                                    "div",
                                    { className: "inline-div" },
                                    item[1].length == 0 ? "nothing" : item[1]
                                ),
                                " " + item[2]
                            );
                        } else return React.createElement(
                            "li",
                            { key: item + " " + index },
                            item
                        );
                    })
                )
            )
        )
    );
}, function isEqual(prevProp, curProp) {
    if ("compareDataOnly" in curProp && curProp["compareDataOnly"] === 1) return prevProp.data == curProp.data;return shallowEqual(prevProp, curProp);
});
// Compare data attribute only if compareDataOnly exist in props else  rerender according to shallow compare
// This is done to skip unnecessary rendering 
// Also compareDataOnly is used separately to avoid comparison of remaining properties as it will be a costly operation no. of properties are large