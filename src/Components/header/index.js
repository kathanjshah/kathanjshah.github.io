import TemporaryDrawer from "./drawer";
import "./header.css";
import * as React from "react";
import { useMediaQuery } from "@mui/material";
import CropIcon from "@mui/icons-material/Crop";

function Header() {
  const matches = useMediaQuery("(min-width:720px)");
  return (
    <div className="header">
      <div className="logos">
        <CropIcon />
        <div className="logoName">Portfolio.</div>
      </div>

      {matches ? (
        <div className="groupicons">
          <div className="clickicons"><a href="#Experience">Experience</a></div>
          <div className="clickicons"><a href="#Education">Education</a></div>
          <div className="clickicons"><a href="#Project">Projects</a></div>
          <div className="clickicons"><a href="#About">About</a></div>
          <div className="clickicons"><a href="#Contact">Contact</a></div>
        </div>
      ) : null}
      {matches ? null : <TemporaryDrawer></TemporaryDrawer>}
    </div>
  );
}

export default Header;
