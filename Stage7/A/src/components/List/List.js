import { Add } from "@material-ui/icons";
import { memo, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, IconButton, List, Tooltip } from "@material-ui/core";
import React from "react";
import AppContext from "../../context/appContext/Context";
import CustomListItem from "./ListUtil/CustomListItem";
import { MEALS, WEEKDAYS } from "../../constants/Constants";
import { addID, getID } from "../../helper/UniqueId";

//Custom List Component to style and design for both Today And weekday Component
const CustomList = memo(function CustomList({
  type = "today",
  data = [],
  day,
  meal,
  updateData,
}) {
  // Ref Variable to set Transition for list item
  const isNewItemAdded = useRef(false);

  useEffect(() => {
    isNewItemAdded.current = false;
  }); // update New itme State after rendering

  function appendItem() {
    updateData(day, meal, [...data, ""]);
  }

  function onAddClick(e) {
    isNewItemAdded.current = true;
    addID(day, meal);
    appendItem();
  }

  const [dragStatus, setDragStatus] = useState({ from: -1, to: -1 });

  function swapData(from, to) {
    if (
      from !== to &&
      from >= 0 &&
      to >= 0 &&
      from < data.length &&
      to < data.length
    ) {
      const tempArr = [...data];
      const temp = tempArr[from];
      tempArr[from] = tempArr[to];
      tempArr[to] = temp;
      updateData(day, meal, tempArr);
    }
  }

  return (
    <>
      <Tooltip arrow title="Click to add new food item ">
        {type === "today" ? (
          <Button // Add button for Today Card
            className="mb-0 p-1 mr-2 float-right h-auto sm:mr-1"
            size="large"
            onClick={onAddClick}
            // variant="contained"
            startIcon={<Add />}
          >
            Item
          </Button>
        ) : (
          // Add Button for weekdayCards
          <IconButton
            className="mb-0 float-right p-2"
            color="primary"
            size="medium"
            onClick={onAddClick}
            // variant="contained"
          >
            <Add />
          </IconButton>
        )}
      </Tooltip>
      <List className={type === "today" ? "today-list" : "weekday-list"}>
        {data.map((row, listInd) => (
          <div
            draggable={true}
            data-item={listInd}
            onDragStart={(e) => {
              if (!isNaN(e?.target?.dataset?.item)) {
                const newFrom = Number(e?.target?.dataset?.item);
                if (newFrom !== dragStatus.cur) {
                  setDragStatus((lastVal) => ({ from: newFrom, to: -1 }));
                }
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
              // console.log(e.currentTarget);
              if (!isNaN(e?.currentTarget?.dataset?.item)) {
                const newTo = Number(e?.currentTarget?.dataset?.item);
                // console.log(e);
                if (newTo !== dragStatus.cur) {
                  setDragStatus((lastVal) => ({ ...lastVal, to: newTo }));
                }
              }
            }}
            onDrop={(e) => {
              swapData(dragStatus.from, dragStatus.to);
              setDragStatus({});
            }}
            key={getID(day, meal, listInd)}
          >
            <CustomListItem
              // Id is generated correspondingly for each itemindex in list,
              //  As list is dynamic so Id/hashed value is used to identify each item uniquely
              key={getID(day, meal, listInd)}
              // Instead of passing actual index to children components Hashed-Index is passed to avoid unnecsaary PropChanges
              listIndHash={getID(day, meal, listInd)}
              className={
                type === "today"
                  ? "p-0 pb-2 break-all"
                  : "p-0 break-all whitespace-normal"
              }
              timeout={isNewItemAdded.current ? 500 : 1200}
              meal={meal}
              day={day}
            />
          </div>
        ))}
      </List>
    </>
  );
});

CustomList.propTypes = {
  type: PropTypes.oneOf(["weekday", "today"]).isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateData: function (props, propName, componentName) {
    const fn = props[propName];
    if (
      !fn ||
      !fn.prototype ||
      typeof fn.prototype.constructor !== "function" ||
      fn.prototype.constructor.length !== 3
    ) {
      return new Error(
        propName + ` at ${componentName} must be a function with 3 args`
      );
    }
  },
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

const ListWithContext = memo(function ListWithContext({
  type = "today",
  day = "monday",
  meal = "lunch",
}) {
  const context = useContext(AppContext);
  // If props are valid render the child else skip
  if (context?.updateData && context?.data?.[day]?.[meal])
    return (
      <CustomList
        updateData={context.updateData}
        type={type}
        day={day}
        meal={meal}
        data={context.data[day][meal]}
      ></CustomList>
    );

  return <></>;
});

ListWithContext.propTypes = {
  type: PropTypes.oneOf(["weekday", "today"]).isRequired,
  meal: PropTypes.oneOf(MEALS).isRequired,
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
};

export default ListWithContext;