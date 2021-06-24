import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    { id: "featured", 
    title: "Featured", 
    },
    {
      id: "fitness tracker",
      title: "Fitness Tracker",
    },
    {
      id: "budget tracker",
      title: "Budget Tracker",
    },
    {
      id: "tune tips",
      title: "Tune Tips",
    },
    {
      id: "note taker",
      title: "Note Taker",
    },
    {
      id: "weather dashboard",
      title: "Weather Dashboard",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>CloutMediaApp</h3>
        </div>
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>Fitness Tracker</h3>
        </div>
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>Budget Tracker</h3>
        </div>
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>Tune Tips</h3>
        </div>
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>Note Taker</h3>
        </div>
        <div className="item">
          <img src="assets/logo_used_50.png" alt="" />
          <h3>Weather Dashboard</h3>
        </div>
      </div>
    </div>
  );
}
