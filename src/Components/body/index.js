import React from "react";
import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import TimelineCmpt from "../timeline/timelineCmpt";
import MediaCard from "../projectCard/projectCard";
import kathan from "../../Assets/kathan.jpg";
import js from "../../Assets/javascript.png";
import java from "../../Assets/java.png";
import cplusplus from "../../Assets/cplusplus.png";
import css from "../../Assets/css.png";
import gitpic from "../../Assets/git.png";
import html from "../../Assets/html.png";
import nextjs from "../../Assets/nextjs.png";
import python from "../../Assets/python.png";
import reactpic from "../../Assets/react.png";

function Body() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const projectCard = [
    {
      title: "Ricochet Robots",
      subheader: "2D-Game",
      img: require("../../Assets/board.png"),
      language: "Language: Java",
      detail:
        'A simple implementation of Alex Randolph\'s board game Ricochet Robots including solver. This game is witten in JAVA. Where I learned some of the major algorithms in Computer science, one of such is "Find and hunt" algorithum. Over this I built an AI that can give the solution of the puzzle. The most intresting part was to learn how to build the GUI and the "back-end" supporting it. All the updates were done periodically in 4 different Iteration. This Project is hosted on Github, which leads me to learn the version control language, git. The whole design was created by me and all the code was led by me.',
      software: "Software: Eclipse, IntelliJ.",
      hosted: "Hosted: Github",
      git: "https://github.com/djgrillopena/comp2005-winter20-group11",
    },
    {
      title: "Sudoko Solver",
      subheader: "2D-Game Solver",
      img: require("../../Assets/Sudoko.png"),
      language: "Language: Python",
      detail:
        'A graphical interface game of Sudoko. I have built an solver for the puzzle, which works on "BACK Tracking algorithm". It was a fun side project. I used the backtracking algorithm in this solver because if we try to find each and every solution and try to see if it works then it will take forever. So, by doing some research and talking to some of my seniors, i used the back tracking algorithum. This Project is an product of the bigger project like Richochet Robots. The management skills that i learned from the previous project encouraged me to built this one.',
      software: "Software: PyCharm, Idel.",
      hosted: "Hosted: Github",
      git: "https://github.com/kathanjshah/Sudoku/tree/master",
    },
  ];
  const getCard = projectCard.map((cd) => {
    return (
      <MediaCard
        title={cd.title}
        subheader={cd.subheader}
        img={cd.img}
        language={cd.language}
        detail={cd.detail}
        software={cd.software}
        hosted={cd.hosted}
        git={cd.git}
      />
    );
  });

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
        <TimelineCmpt className="timeline" isJob={true} />
      </div>
      <div id="Education" className="body4">
        <h1>Education</h1>
        <TimelineCmpt className="timeline" isJob={false} />
      </div>
      <div id="Project" className="body5">
        <h1>Projects</h1>
        <div className="internal">{getCard}</div>
      </div>
      <div id="About" className="body6">
        <div className="about">
          <h1>About Me</h1>
          <p>
            I am a Full Stack Software Developer. I am currently learning about
            Web3 and Cryptography.
          </p>
          <p>
            My aim is to challenge myself everyday with new problems so I can
            craft myself into a better engineer everyday.
          </p>
          <p>
            Learning about new technology, discoveries, inventions, philosophy
            or just introducing myself to something new fills most of my
            schedule when I am not working. I am a curious learner and a deep
            thinker who likes to get acquainted with new piece of knowledge as
            it is very enriching and fullfilling for me.
          </p>
        </div>
        <div>
          <img src={kathan} className="kathan"></img>
        </div>
      </div>
      <div id="skills">
          <h1>Skills</h1>
          <div>
          <img src={reactpic}></img>
          <img src={js}></img>
          <img src={html}></img>
          <img src={css}></img>
          <img src={python}></img>
          <img src={gitpic}></img>
          <img src={nextjs}></img>
          <img src={cplusplus}></img>
          <img src={java}></img>
          </div>
          
        </div>
    </div>
  );
}

export default Body;
