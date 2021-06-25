import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  featuredFitness,
  featuredBudget,
  featuredTune,
  featuredNote,
  featuredWeather,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
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

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "fitness tracker":
        setData(featuredFitness);
        break;
      case "budget tracker":
        setData(featuredBudget);
        break;
      case "tune tips":
        setData(featuredTune);
        break;
      case "note taker":
        setData(featuredNote);
        break;
      case "weather dashboard":
        setData(featuredWeather);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
