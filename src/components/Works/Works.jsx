import React, { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: 1,
      icon: "./assets/img/mobile.png",
      title: "Web Design",
      desk: "Lorem ipsum and others",
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg",
    },
    {
      id: 2,
      icon: "./assets/img/globe.webp",
      title: "Mobile Aplication",
      desk: "Lorem ipsum and others",
      img: "https://www.computerhope.com/jargon/d/developer.jpg",
    },
    {
      id: 3,
      icon: "./assets/img/writting.png",
      title: "Branding",
      desk: "Lorem ipsum and others",
      img: "https://insights.dice.com/wp-content/uploads/2018/03/Hipster-Developer-Dice.jpg",
    },
  ];

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftConatiner">
                  <div className="imgConatainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h1>{d.title}</h1>
                  <p>{d.desk} </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://www.contentchef.io/images/developers/headless-cms-for-react/top-banner-image.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/img/arrow.webp"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/img/arrow.webp"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
