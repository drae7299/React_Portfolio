import "./works.scss";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import { useState, useEffect } from "react";


export default function Works() {
const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
        { 
            id: 1, 
            title: "Featured", 
            img: "assets/logo_used_50.png",
            icon:"", 
            desc:"",

         },
         {
            id: 2,
            title: "Fitness Tracker",
            img: "assets/fitnessTracker.png",
            icon:"",
            desc:"",

          },
          {
            id: 3,
            title: "Budget Tracker",
            img: "assets/budgetApp.png",
            icon:"",
            desc:"",

          },
          {
            id: 4,
            title: "Tune Tips",
            img: "assets/tipsShot.png",
            icon:"",
            desc:"",
          },
          {
            id: 5,
            title: "Note Taker",
            img: "assets/noteTaker.png",
            icon:"",
            desc:"",
          },
          {
            id: 6,
            title: "Weather Dashboard",
            img: "assets/weatherDash.png",
            icon:"",
            desc:"",
          },

    ];

    const handleClick = (way) =>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
    }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
      {data.map((d)=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.img} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img src={d.img} alt=""/>
            </div>
          </div>
        </div>))}
      </div>
    <NavigateBeforeOutlinedIcon fontSize="large"className="arrow left" alt="" onClick={()=>handleClick("left")}/>
    <NavigateNextOutlinedIcon fontSize="large"className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  );
}
