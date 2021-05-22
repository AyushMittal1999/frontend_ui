import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandedDay from "./ExpandedDay";
import { WEEKDAYS } from "../constants/Constants";

const getAccordionStyle = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
    borderRadius: "9px",
    overflow: "hidden",
  },
  expanded: {
    borderRadius: "39px",
    width: "100%",
  },
});

const useStyles = makeStyles((theme) => ({
  accordionSummary: {
    backgroundColor: "antiquewhite",
    backgroundImage: "linear-gradient(to right, #e9dd71, #e7dd87c4)",
  },
  typography: {
    marginLeft: "30px",
  },
  paper: {
    marginBottom: "20px",
    background: "transparent",
  },
}));

const Weekday = memo(function Weekday({ day }) {
  // State hook to monitor current accordion Status collapse or not
  const [open, setOpen] = React.useState(false);

  const accordionClasses = getAccordionStyle();
  const classes = useStyles();

  return (
    <Paper elevation={0} id={day} className={classes.paper}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        classes={accordionClasses}
        expanded={open}
        onChange={(e, open) => {
          setOpen(open);
        }}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.typography} variant="h4">
            {day[0].toUpperCase() + day.substring(1)}
          </Typography>
        </AccordionSummary>
        <Divider />

        <AccordionDetails>
          <ExpandedDay day={day} />
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}); //Rerender the day only if any update has happened to any of its props
Weekday.propTypes = {
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default Weekday;
