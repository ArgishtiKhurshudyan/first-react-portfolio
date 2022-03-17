import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/img/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there i'm </h2>
          <h1>Argishti Khurshudyan</h1>
          <h3>
            Front-end <span ref={textRef}></span>
          </h3>

          <a href="#portfolio">
            <img src="assets/img/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
