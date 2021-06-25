import "./works.scss";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import { useState, useEffect } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Featured",
      img: "assets/logo_used_50.png",
      target: "",
      desc: "Clout Media app is a place where like minded Artists and Engineers can meet to colaborate! ",
    },
    {
      id: 2,
      title: "Fitness Tracker",
      img: "assets/fitnessTracker.png",
      target: "https://fitness-tracker5001.herokuapp.com/",
      desc: "This Fitness Tracker allows you to log and even update/complete workouts! ",
    },
    {
      id: 3,
      title: "Budget Tracker",
      img: "assets/budgetApp.png",
      target: "https://budgetpwa2021.herokuapp.com/",
      desc: "Got a tight budget? Go ahead and try this out to keep your finances in line!",
    },
    {
      id: 4,
      title: "Tune Tips",
      img: "assets/tipsShot.png",
      url: "https://roy-sizemore.github.io/tune-tips/",
      desc: "Have you ever wanted to know more about your favorite artists and maybe even a small bio? Look no futher as Tune Tips will get the job done with a few taps or key strokes!",
    },
    {
      id: 5,
      title: "Note Taker",
      img: "assets/noteTaker.png",
      target: "https://gentle-crag-05153.herokuapp.com/",
      desc: "Use this app to jot down notes and even save them on your local storage to revisit and even remove at a later time!",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      img: "assets/weatherDashBoard.png",
      target: "https://drae7299.github.io/Weather_Dashboard_API/",
      desc: "Use this handy app to get a 5 day forcast in your city or any for that fact! UV index will be included as well for your searches!",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <NavigateBeforeOutlinedIcon
        fontSize="large"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <NavigateNextOutlinedIcon
        fontSize="large"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
