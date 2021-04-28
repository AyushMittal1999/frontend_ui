import React from "react";

interface HeadingProps {
  htype: 1 | 2 | 3;
  value: string;
  childClass?: string;
  id?: string;
}

const Heading = React.memo(
  function Heading({
    htype,
    value,
    childClass,
    id,
  }: HeadingProps): JSX.Element {
    return (
      <div id={id}>
        {+htype === 1 ? (
          <h1 className={childClass}>{value}</h1>
        ) : +htype === 2 ? (
          <h2 className={childClass}>{value}</h2>
        ) : (
          <h3 className={childClass}>{value}</h3>
        )}
      </div>
    );
  },
  () => true
); // Heading need to be updated once only no rerendering useful

export default Heading;
