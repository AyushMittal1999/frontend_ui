import EditableTypoGraphy from "./EditableTypography";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { memo } from "react";
import { MEALS, WEEKDAYS } from "../../../constants/Constants";
import PropTypes from "prop-types";
import CustomListItemDeleteButton from "./CustomListItemDeleteButton";

// Custom ListItem -- Only UI component No data Usage
const CustomListItemMemo = memo(
  function CustomListItem({ listIndHash, day, meal, timeout, className }) {
    return (
      /* animation to show on component mounting */
      <Zoom in={true} timeout={timeout}>
        <ListItem className={className}>
          <ListItemIcon>
            {/* Icon Corresponding to Each ListItem */}
            <LocalDiningIcon className="dark:text-gray-300" />
          </ListItemIcon>
          {/* List Item Text */}
          <ListItemText>
            {/* Separate ListItem Text Component Dealing With data  
            And enablingInline Editing independently */}
            <EditableTypoGraphy
              listIndHash={listIndHash}
              day={day}
              meal={meal}
            />
          </ListItemText>
          {/* Delete Icon/Button corresponding to each List item */}
          <ListItemIcon className="justify-end">
            <Tooltip arrow title="Click to delete the food item">
              <div>
                {/* Custom Delete Button To handle dynamic delete operation independtly*/}
                <CustomListItemDeleteButton
                  day={day}
                  meal={meal}
                  listIndHash={listIndHash}
                />
              </div>
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      </Zoom>
    );
  },
  (prev, cur) =>
    prev.listIndHash === cur.listIndHash &&
    prev.day === cur.day &&
    prev.meal === cur.meal
);

CustomListItemMemo.propTypes = {
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
  listIndHash: PropTypes.number.isRequired,
};

export default CustomListItemMemo;
