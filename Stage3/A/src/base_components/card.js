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
          <img {...imgAttributes}></img>
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
                      {item[1].length == 0 ? "nothing" : item[1]}
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
    if ("rerender" in curProp) return !curProp["rerender"];
    return false;
  }
);
// Skip rerendering if rerender attribute exist with rerender =0 else always rerender
