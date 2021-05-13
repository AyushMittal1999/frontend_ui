import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { memo, useContext } from "react";
import AppContext from "../../../context/appContext/Context";
import PropTypes from "prop-types";
import { MEALS, WEEKDAYS } from "../../../constants/Constants";
import { deleteID, getIndexFromID } from "../../../helper/UniqueId";

const CustomListItemDeleteButton = memo(function CustomListItemDeleteButton({
  day,
  meal,
  listIndHash,
  deleteIndex, // Method Of AppContext ( Day,Meal, index )=>void
}) {
  function deleteItem(index) {
    if (index >= 0) {
      // Delete Index from Data
      deleteIndex(day, meal, index);
      // Remove Hash for this index
      deleteID(day, meal, index);
    }
  }

  return (
    <IconButton
      onClick={(e) => {
        deleteItem(
          // Getback original Index for hashed index
          getIndexFromID(day, meal, listIndHash)
        );
      }}
    >
      <Delete fontSize="small" />
    </IconButton>
  );
});

CustomListItemDeleteButton.propTypes = {
  deleteIndex: PropTypes.func.isRequired,
  listIndHash: PropTypes.number.isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

const CustomListItemDeleteButtonContext =
  function CustomListItemDeleteButtonContext({ listIndHash, day, meal }) {
    const context = useContext(AppContext);

    // If props are valid render the child else skip
    if (context && context.updateDataDeleteRow) {
      return (
        <CustomListItemDeleteButton
          listIndHash={listIndHash}
          day={day}
          meal={meal}
          // Separate Function in App Context for deleting a single list element in Data
          deleteIndex={context.updateDataDeleteRow}
        />
      );
    }

    return <></>;
  };

CustomListItemDeleteButtonContext.propTypes = {
  listIndHash: PropTypes.number.isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default CustomListItemDeleteButtonContext;
