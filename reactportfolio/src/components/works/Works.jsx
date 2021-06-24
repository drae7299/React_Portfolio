import "./works.scss";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
export default function Works() {

    const data =[
        { 
            id: 1, 
            title: "Featured", 
            img: "assets/logo_used_50.png",
            icon:"",
         },
         {
            id: 2,
            title: "Fitness Tracker",
            img: "assets/fitnessTracker.png",
          },
          {
            id: 3,
            title: "Budget Tracker",
            img: "assets/budgetApp.png",
          },
          {
            id: 4,
            title: "Tune Tips",
            img: "assets/tipsShot.png",
          },
          {
            id: 5,
            title: "Note Taker",
            img: "assets/noteTaker.png",
          },
          {
            id: 6,
            title: "Weather Dashboard",
            img: "assets/weatherDash.png",
          },

    ]
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <TouchAppIcon fontSize="large" alt=""/>
                </div>
                <h2>Title</h2>
                <p>Description</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
                <img src="assets/logo_used_50.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    <NavigateBeforeOutlinedIcon fontSize="large"className="arrow left" alt=""/>
    <NavigateNextOutlinedIcon fontSize="large"className="arrow right" alt=""/>
    </div>
  );
}
