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
import { makeStyles } from "@material-ui/core/styles";

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
import { StyledChip, Chip } from "../../helper/Chip/LazyChip";

const images = [breakfast_img, lunch_img, snacks_img, dinner_img];

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 5px",
      marginTop: "15px",
    },
  },

  card: {
    display: "flex",
    flexDirection: "row",
    height: "350px",
    width: "max(85% , 400px)",

    borderRadius: "30px 30px 30px 30px",
    [theme.breakpoints.down("sm")]: {
      width: "87%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "450px",
      width: "87%",
    },
  },

  cardContent: {
    flex: 5,
    paddingLeft: "5%",
    overflow: "hidden",
  },

  paperCardheading: {
    display: "flex",
    justifyContent: "space-between",
  },

  divider: { marginBottom: "10px" },
}));

const TodayCard = memo(function TodayCard({ day, index, visible }) {
  const classes = useStyles();
  // visible used to indicate component is visible in swipeable view or not
  if (!visible) return <></>;

  return (
    <div className={classes.paperWrapper}>
      <Card raised elevation={12} className={classes.card}>
        {/* Custom ImageWrapper to add Effect on Image loading */}
        <ImageWrapper title={MEALS[index].toUpperCase()} src={images[index]} />

        <CardContent className={classes.cardContent}>
          <Paper elevation={0} className={classes.paperCardheading}>
            {/* animation to show on component mounting */}
            <Zoom in={true} timeout={1000} style={{ transitionDelay: "300ms" }}>
              <Typography gutterBottom variant="h5">
                {MEALS[index].toUpperCase()}
              </Typography>
            </Zoom>

            <FastfoodIcon fontSize="large" />
          </Paper>
          <Divider className={classes.divider} />
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
              <StyledChip
                color="primary"
                clickable
                variant="outlined"
                icon={<HappyIcon />}
                label="Happy Meal"
              />
            </LazyChipWrapper>
          </Zoom>
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
