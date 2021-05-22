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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandedDay from "./ExpandedDay";
import { WEEKDAYS } from "../constants/Constants";

const Weekday = memo(function Weekday({ day }) {
  // State hook to monitor current accordion Status collapse or not
  const [open, setOpen] = React.useState(false);

  return (
    <Paper
      elevation={0}
      id={day}
      className="bg-transparent mb-5 lg:w-97/100 lg:mx-auto xs:w-full"
    >
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square={true}
        classes={{
          root: "weekday-accordion-root",
          expanded: "weekday-accordion-expanded",
        }}
        expanded={open}
        onChange={(e, open) => {
          setOpen(open);
        }}
      >
        <AccordionSummary
          className="bg-gradient-to-r p-1 xl:p-0 from-brand to-brand-light dark:from-brand-dark dark:to-brand-dark"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="ml-8" variant="h4">
            {day[0].toUpperCase() + day.substring(1)}
          </Typography>
        </AccordionSummary>
        <Divider />

        <AccordionDetails className="dark:bg-background-moredark">
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
