import { CardMedia, Zoom } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    flex: 4,
    height: "100%",
    overflow: "hidden",
    borderRadius: "30px 70px 70px 30px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "30px 30px 20px 20px",
      // flex: 3,
    },
  },
  displayNone: {
    display: "none",
  },
}));

export default function ImageWrapper({ src, title }) {
  const [imageLoad, setImageLoad] = useState("loading");
  const classes = useStyles();

  return (
    <CardMedia className={classes.cardMedia} component="div">
      <Zoom
        in={imageLoad === "success"}
        timeout={1000}
        style={{ transitionDelay: "300ms" }}
      >
        <img
          className={imageLoad === "success" ? undefined : classes.displayNone}
          height="100%"
          width="100%"
          alt={title}
          src={src}
          title={title}
          onError={(e) => {
            setImageLoad("fail");
          }}
          onLoad={() => {
            setImageLoad("success");
          }}
        />
      </Zoom>

      {imageLoad === "fail" ? (
        <Zoom in={true} timeout={1000} style={{ transitionDelay: "700ms" }}>
          <ImageOutlinedIcon
            title={"image not available"}
            style={{
              width: "80%",
              height: "100%",
              margin: "auto",
              display: "block",
            }}
          />
        </Zoom>
      ) : (
        <></>
      )}
      {imageLoad === "loading" ? (
        <Skeleton component="div" variant="rect" height="100%"></Skeleton>
      ) : (
        <></>
      )}
    </CardMedia>
  );
}
