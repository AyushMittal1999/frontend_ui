import { CardMedia, Zoom } from "@material-ui/core";
import { useState } from "react";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { Skeleton } from "@material-ui/lab";

export default function ImageWrapper({ src, title }) {
  const [imageLoad, setImageLoad] = useState("loading");

  return (
    <CardMedia
      className="flex-4 h-full overflow-hidden rounded-l-4xl rounded-r-9xl sm:rounded-t-4xl sm:rounded-b-3xl"
      component="div"
    >
      <Zoom
        in={imageLoad === "success"}
        timeout={1000}
        style={{ transitionDelay: "300ms" }}
      >
        <img
          className={`h-full ${imageLoad === "success" ? "" : "hidden"}`}
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
