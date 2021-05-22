import { Skeleton } from "@material-ui/lab";
import React, { Suspense } from "react";

const LazyChipWrapper = React.forwardRef(
  ({ children, className, ...other }, ref) => {
    return (
      <div ref={ref} {...other} className={`inline-block ${className || ""}`}>
        <Suspense
          fallback={
            <Skeleton
              component="div"
              variant="circle"
              width={90}
              height={32}
              className="mr-1"
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
