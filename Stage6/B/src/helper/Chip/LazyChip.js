import React from "react";

const Chip = React.lazy(() => {
  const m = import("@material-ui/core/Chip");

  const newModule = m.then(async function (module) {
    return module;
  });
  return newModule;
});

export default Chip;
