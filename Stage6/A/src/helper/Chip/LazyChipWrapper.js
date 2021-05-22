import { makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { Suspense } from "react";

const useStyles = makeStyles({
  chipWrapper: {
    display: "inline-block",
    width: "fit-content",
  },
  skeleton: {
    marginRight: "5px",
  },
});

const LazyChipWrapper = React.forwardRef(
  ({ children, className, ...other }, ref) => {
    const classes = useStyles();
    return (
      <div
        ref={ref}
        {...other}
        className={`${classes.chipWrapper} ${className || ""}`}
      >
        <Suspense
          fallback={
            <Skeleton
              variant="circle"
              width={90}
              height={32}
              className={classes.skeleton}
            ></Skeleton>
          }
        >
          {children}
        </Suspense>
      </div>
    );
  }
);

export default LazyChipWrapper;
