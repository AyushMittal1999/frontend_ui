import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { memo, useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../../context/Context";
import { MEALS, WEEKDAYS } from "../../../constants/Constants";
import { getIndexFromID } from "../../../helper/UniqueId";

// Convert User Input to sentenceCase
function getSentenceCase(data) {
  return data
    .replace("\n", " ")
    .trim()
    .split(" ")
    .filter((x) => x.trim().length >= 1)
    .map(function (a) {
      return a[0].toUpperCase() + a.substring(1);
    })
    .join(" ");
}

const EditableTypoGraphy = function EditableTypoGraphy({
  classes,
  data,
  updateItem, // Method Of AppContext ( Day,Meal, index , newValue)=>void
  day,
  meal,
  listIndHash,
}) {
  return (
    <Typography
      onKeyPress={(e) => {
        // Pressing Enter updates the data for the field
        if (e.code === "Enter") {
          // On Enter Press Avoid Defaults
          e.preventDefault();
          e.target.blur();
          if (e.target.innerText !== data) {
            //Update data

            updateItem(
              day,
              meal,
              getIndexFromID(day, meal, listIndHash), // Getback original Index for hashed index
              getSentenceCase(e.target.innerText)
            );
          }
        }
      }}
      contentEditable={true}
      suppressContentEditableWarning={true}
      // On blur also update the data for the field
      onBlur={(e) => {
        if (e.target.innerText !== data) {
          // Update Data
          updateItem(
            day,
            meal,
            getIndexFromID(day, meal, listIndHash), // Getback original Index for hashed index
            getSentenceCase(e.target.innerText)
          );
        }
      }}
      variant="body1"
      className={classes.root}
    >
      {data}
    </Typography>
  );
};

EditableTypoGraphy.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.string.isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
  listIndHash: PropTypes.number.isRequired,
  updateItem: function (props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn ||
      !fn.prototype ||
      typeof fn.prototype.constructor !== "function" ||
      fn.prototype.constructor.length !== 4
    ) {
      return new Error(
        propName + ` at ${componentName} must be a function with 4 args`
      );
    }
  },
};

// Styling Component
const EditableTypoGraphyStyled = memo(
  withStyles((theme) => ({
    root: {
      "&:empty::after": {
        // relate to font size!!
        fontStyle: "italic",
        fontFamily: "Courier New,Courier,monospace",
        content: `"Click to Edit"`,
        [theme.breakpoints.down("xs")]: {
          fontSize: "13px",
        },
      },
    },
  }))(EditableTypoGraphy)
);

const EditableTypoGraphyWithContext = function EditableTypoGraphyWithContext({
  day,
  meal,
  listIndHash,
}) {
  const context = useContext(AppContext);
  const listInd = getIndexFromID(day, meal, listIndHash);
  // If props are valid render the child else skip
  if (
    context &&
    context &&
    context.updateDataOneRow &&
    context.data &&
    context.data[day] &&
    context.data[day][meal] &&
    context.data[day][meal] &&
    listInd >= 0 &&
    listInd < context.data[day][meal].length
  ) {
    return (
      <EditableTypoGraphyStyled
        day={day}
        meal={meal}
        listIndHash={listIndHash}
        data={context.data[day][meal][listInd]}
        // Separate Function in App COntext for updating a single list element in Data
        updateItem={context.updateDataOneRow}
      />
    );
  }
  return <></>;
};

EditableTypoGraphyStyled.propTypes = {
  listIndHash: PropTypes.number.isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default EditableTypoGraphyWithContext;
