import React from "react";
import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import AlternateTimeline from "../timeline/timeline";
import EducationTimeline from "../timeline/education";



function Body() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [isHovered, setHover] = useState(false);

  return (
    <div className="body">
      <div className="body1">
        <div className="discription">
          <div className="helloWorld"></div>
          <h1></h1>
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
      </div>

      <div id="Experience" className="body3">
        <h1>Experience</h1>
        <AlternateTimeline className="timeline" />
      </div>
      <div id="Projects" className="body4">
        <h1>Education</h1>
        <EducationTimeline className="timeline" />
      </div>
      <div>
        <div
          className="imageContainer"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* <Image src="https://via.placeholder.com/150" />
          {isHovered && (
            <Button
              size="sm"
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
              }}
              variant="primary"
            >
              Show on hover
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Body;
