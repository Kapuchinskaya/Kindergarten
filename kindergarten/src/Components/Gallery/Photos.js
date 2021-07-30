import * as React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import galleryData from "../../Resources/data/galleryData";

const useStyles = makeStyles(() => ({
  linkTo: {
    textDecoration: "none",
  },
}));

const Photos = (props) => {
  const classes = useStyles();
  const limitedData = props.limit
    ? galleryData.slice(0, props.limit)
    : galleryData;

  return (
    <ImageList cols={"5"}>
      {limitedData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Link className={classes.linkTo} to={"/galeria/" + item.id}>
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Photos;
