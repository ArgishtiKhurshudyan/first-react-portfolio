import React, { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../Data/Data";

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "Featured", title: "Featured" },
    { id: "Web", title: "Web App" },
    { id: "Mobile", title: "Mobile App" },
    { id: "Design", title: "Design" },
    { id: "Content", title: "Content" },
  ];
  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Web":
        setData(webPortfolio);
        break;
      case "Mobile":
        setData(mobilePortfolio);
        break;
      case "Design":
        setData(designPortfolio);
        break;
      case "Content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="banking" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
