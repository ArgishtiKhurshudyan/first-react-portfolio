import React from "react";
import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Web Developer",
      img: "https://miro.medium.com/max/1200/1*Y0UYuGcFGSCfs5Eexafq6A.png",
      icon: "./assets/img/linkedin.png",
      desc: "Lorem ipsum set amet bla bla sax lava",
    },
    {
      id: 2,
      name: "Alex Sargisyan",
      title: "CO-Founder in Crysp",
      img: "https://clearbridgemob-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/image1.png",
      icon: "./assets/img/twitter.png",
      desc: "Lorem ipsum set amet bla bla sax lava",
      featured:true,
    },
    {
      id: 3,
      name: "Dimich",
      title: "React  in it-kamasutra",
      img: "https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw",
      icon: "./assets/img/youtube.png",
      desc: "Lorem ipsum set amet bla bla sax lava",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? "card featured":"card"}>
            <div className="top">
              <img src="./assets/img/right-arrow.png" alt="" className="left" />
              <img src={p.img} alt="" className="user" />
              <img src={p.icon} alt="" className="right" />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
