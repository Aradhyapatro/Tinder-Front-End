import React, { useState } from "react";
import "./Header.css";
import IconButton from "@mui/material/IconButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const presentURL = location.pathname;
  let initialState = true;
  if (presentURL !== "/") {
    initialState = false;
  }

  const [change, setChange] = useState(initialState);

  return (
    <div className="head">
      <IconButton>
        {change ? (
          <PermIdentityIcon />
        ) : (
          <Link to="/" className="remove">
            <ArrowBackIosNewIcon
              onClick={() => {
                setChange(true);
              }}
            />
          </Link>
        )}
      </IconButton>

      <LocalFireDepartmentIcon className="logo" />

      <IconButton>
        {change ? (
          <Link to="/Chats" className="remove">
            <ForumIcon
              onClick={() => {
                setChange(false);
              }}
            />
          </Link>
        ) : (
          <PermIdentityIcon />
        )}
      </IconButton>
    </div>
  );
};

export default Header;
