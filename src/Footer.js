import React, { useState } from "react";
import "./Footer.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const Footer = () => {
  const [heart, setheart] = useState(false);
  const [star, setStar] = useState(false);

  return (
    <div className="foot">
      <IconButton
        className="footerIcon"
        onClick={() => {
          window.location.reload();
        }}
      >
        <RefreshIcon className="refresh" />
      </IconButton>

      <IconButton className="footerIcon" onClick={() => {}}>
        <DoDisturbIcon className="cancel" />
      </IconButton>

      <IconButton className="footerIcon">
        <FlashOnIcon className="thunder" />
      </IconButton>

      <IconButton
        className="footerIcon"
        onClick={() => {
          setStar(!star);
        }}
      >
        {star ? (
          <StarBorderIcon className="star" />
        ) : (
          <StarOutlinedIcon className="star" />
        )}
      </IconButton>

      <IconButton
        className="footerIcon"
        onClick={() => {
          setheart(!heart);
        }}
      >
        {heart ? (
          <FavoriteIcon className="heart" />
        ) : (
          <FavoriteBorderIcon className="heart" />
        )}
      </IconButton>
    </div>
  );
};

export default Footer;
