import React from "react";
import "./body.css";
import { Button, useMediaQuery } from "@mui/material";
import peopleImage from "../../Assets/people.jpg";
import menuImage from "../../Assets/menus.png";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

function Body() {
  const matches = useMediaQuery("(min-width:720px)");
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };
  return (
    <div className="body">
      <div className="body1">
        <div className="discription">
          <h1>&lt;Hello World! &gt; <br/> I'm <span style={{color: '#1976d2'}}>Kathan</span> Shah</h1>
          <p>
            Choose your workspace or make your own.
            {matches ? <br /> : null}Everyteam has a unique process.
          </p>
          <Button className="get" variant="contained" size="small">
            Get Started
          </Button>
        </div>
      </div>
      <div className="body2">
        <h3>Designed and Build by Teams for teams</h3>
        <p>
          Teambo is #1 tool for managing teams and accesing tasks.
          <br />
          We are the most comprehensive CRM to help your company grow.
        </p>
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
