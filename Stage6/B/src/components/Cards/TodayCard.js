import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  Paper,
  Divider,
  Typography,
  Zoom,
} from "@material-ui/core";
import { MEALS, WEEKDAYS } from "../../constants/Constants";

import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import HappyIcon from "@material-ui/icons/InsertEmoticon";

import breakfast_img from "../../resources/images/breakfast.jpg";
import lunch_img from "../../resources/images/lunch.jpg";
import snacks_img from "../../resources/images/snacks.jpg";
import dinner_img from "../../resources/images/dinner.jpg";
import TodayList from "./../List/List";
import React, { memo } from "react";
import ImageWrapper from "../../helper/ImageWrapper";
import LazyChipWrapper from "../../helper/Chip/LazyChipWrapper";
// Dynamically Loaded and Styled Chip
import Chip from "../../helper/Chip/LazyChip";

const images = [breakfast_img, lunch_img, snacks_img, dinner_img];

const TodayCard = memo(function TodayCard({ day, index, visible }) {
  // visible used to indicate component is visible in swipeable view or not
  if (!visible) return <></>;

  return (
    <div className="flex justify-center p-5 w-full sm:pt-1 sm:pb-4 xs:mt-4">
      <Card
        raised
        elevation={12}
        className="flex flex-row h-80 w-10/12 rounded-4xl xs:w-97/100 sm:flex-col sm:h-113"
      >
        {/* Custom ImageWrapper to add Effect on Image loading */}
        <ImageWrapper title={MEALS[index].toUpperCase()} src={images[index]} />

        <CardContent className="flex-5 pl-5% overflow-hidden">
          <Paper elevation={0} className="flex justify-between">
            {/* animation to show on component mounting */}
            <Zoom in={true} timeout={1000} style={{ transitionDelay: "300ms" }}>
              <Typography gutterBottom variant="h5">
                {MEALS[index].toUpperCase()}
              </Typography>
            </Zoom>

            <FastfoodIcon fontSize="large" />
          </Paper>
          <Divider className="mb-3" />
          <div className="chips-wrapper">
            {/* animation to show on component mounting */}
            <Zoom in={true} timeout={1000} style={{ transitionDelay: "300ms" }}>
              {/* Chip is Dynamically Loaded So, for Suspense Wrapper lazy ChiWrapper is useTodayCardStyles */}
              <LazyChipWrapper>
                <Chip
                  variant="outlined"
                  clickable={true}
                  color="primary"
                  icon={<LocalDiningIcon />}
                  label="Healthy Diet"
                />
              </LazyChipWrapper>
            </Zoom>

            {/* animation to show on component mounting */}
            <Zoom in={true} timeout={1000} style={{ transitionDelay: "300ms" }}>
              {/* Chip is Dynamically Loaded So, for Suspense Wrapper lazy ChiWrapper is useTodayCardStyles */}
              <LazyChipWrapper>
                <Chip
                  color="primary"
                  clickable
                  variant="outlined"
                  icon={<HappyIcon />}
                  label="Happy Meal"
                  className="border-lime-600 text-lime-600 ml-1 md:hidden"
                />
              </LazyChipWrapper>
            </Zoom>
          </div>
          <TodayList type="today" day={day} meal={MEALS[index]}></TodayList>
        </CardContent>
      </Card>
    </div>
  );
});

TodayCard.propTypes = {
  day: PropTypes.oneOf(WEEKDAYS).isRequired,
  index: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default TodayCard;
