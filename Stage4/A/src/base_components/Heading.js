import React from "react";

const Heading = React.memo(
  function Heading({ type, value, id, className }) {
    return (
      <div id={id || ""}>
        {+type === 1 ? (
          <h1 className={className}>{value}</h1>
        ) : +type === 2 ? (
          <h2 className={className}>{value}</h2>
        ) : (
          <h3 className={className}>{value}</h3>
        )}
      </div>
    );
  },
  () => true
); // Heading need to be updated once only no rerendering useful

export default Heading;
