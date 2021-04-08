import React from "react";

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

const Card = React.memo(
  function Card({
    classes: [parentClass = "", imgClass = "", textClass = ""],
    imgAttributes,
    ulAttributes,
    data = [],
  }) {
    return (
      // Card layout, div main parent
      <div className={parentClass || ""}>
        {/* Image holder div */}
        <div className={imgClass || ""}>
          <img {...imgAttributes} alt="img"></img>
        </div>

        {/* Text holder div */}
        <div className={textClass || ""}>
          {/* UL tag */}
          <ul {...ulAttributes}>
            {/* this is the logic separating card : Card for today schedule and weekday schedule
                    Today Schedule expect 2-D array [ [ have , .... , in (dinnee/lunch) ] ]
                    Weekday schedule expect 1-D array[ ... ,... ,..........] */}
            {data.map((item, index) => {
              if (Array.isArray(item) && item.length === 3) {
                return (
                  <li key={item[0] + " " + index}>
                    {item[0] + " "}
                    {/* Special Tag for Today schduole content for UI enchancement */}
                    <div className="inline-div">
                      {item[1].length === 0 ? "nothing" : item[1]}
                    </div>
                    {" " + item[2]}
                  </li>
                );
              } else return <li key={item + " " + index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  },
  function isEqual(prevProp, curProp) {
    if ("compareDataOnly" in curProp && curProp["compareDataOnly"] === 1)
      return prevProp.data === curProp.data;
    return shallowEqual(prevProp, curProp);
  }
);
// Compare data attribute only if compareDataOnly exist in props else  rerender according to shallow compare
// This is done to skip unnecessary rendering
// Also compareDataOnly is used separately to avoid comparison of remaining properties as it will be a costly operation no. of properties are large

export default Card;
