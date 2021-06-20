import "./topbar.scss";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className= "logo">
          andre rodriguez.
          </a>
          <div className="itemContainer">
          <PersonIcon className="icon" />
          <span id="biggy">+ 44 924 22 </span>
          </div>
          <div className="itemContainer">
          <EmailIcon className="icon" /> 
          <span id="biggy">safe@dre.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}






