import React from "react";
import "./body.css";
import { Button, useMediaQuery } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import menuImage from "../../Assets/menus.png";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Body() {
  const matches = useMediaQuery("(min-width:720px)");
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="body">
      <div className="body1">
        <div className="discription">
          <h1>
            &lt;Hello World! &gt; <br /> I'm{" "}
            <span style={{ color: "#1976d2" }}>Kathan</span> Shah
          </h1>
          <div className="developer">
            <BugReportIcon />
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="body2">
        <h3 onClick={handleClick}>
          {!active ? (
            <span>"આ સમય પણ વહી જશે"</span>
          ) : (
            <span>"This time shall pass too"</span>
          )}
          <GTranslateIcon className="translate" />
        </h3>
        <p> - Narendra Lalchand Shah(Grandfather)</p>
        <a href="www.linkedin.com/in/kathanjshah">
          <LinkedInIcon/>
        </a>
        
      </div>
      <div className="body3">
        <div className="discription">
          <h3>
            Smart Communication and
            <br />
            AI-bot support
          </h3>
          <p>
            We are using low latency technology to ensure
            {matches ? <br /> : null}
            your Communicationis not disrupted.
          </p>
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "5px",
                gap: "5px;",
              }}
            >
              <QueryBuilderIcon color="primary" />
              <p>Low latency Communication.</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "5px",
                gap: "5px;",
              }}
            >
              <QueryBuilderIcon color="primary" />
              <p>Low latency Communication.</p>
            </div>
          </div>
        </div>
        <div>
          <img className="imgside" src={menuImage} />
        </div>
      </div>
    </div>
  );
}

export default Body;
