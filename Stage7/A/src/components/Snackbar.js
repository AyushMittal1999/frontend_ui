import { IconButton, Snackbar } from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";

// Loading SnackBar Dynamically
const StyledAlert = (function () {
  const module = import("@material-ui/lab/Alert");
  const StyledAlert = module.then(async function (AlertModule) {
    const StyledAlert = withStyles((theme) => ({
      root: {
        ...theme.typography.h6,
        wordBreak: "break-all",
      },
      icon: {
        ...theme.typography.h4,
        flexDirection: "column",
        justifyContent: "center",
      },
    }))(AlertModule.default);

    return StyledAlert;
  });
  return StyledAlert;
})();

export default function SnackBar({ open, onClose, type, message }) {
  const [Alert, setAlert] = useState(null);

  StyledAlert.then((Comp) => setAlert(() => Comp));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };
  return (
    <Snackbar
      style={{ maxWidth: "90%", margin: "auto" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      {Alert !== null ? (
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={type}
          action={
            <IconButton onClick={handleClose} size="medium" color="inherit">
              <Close />
            </IconButton>
          }
        >
          {message}
        </Alert>
      ) : (
        <div> {message}</div>
      )}
    </Snackbar>
  );
}
