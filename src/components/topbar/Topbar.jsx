import "./topbar.scss";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            andre rodriguez.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span><a href="tel:+16145928914">614.592.8914</a></span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span><a href="mailto:drae7299@gmail.com">drae7299@gmail.com</a></span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon  className="icon" />
            <span><a href="https://www.linkedin.com/in/andre-rodriguez-1ab5b9126/" target="linkedin.com/in/andre-rodriguez-1ab5b9126/"> linkedin </a></span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span> <a href="https://github.com/drae7299" target="github.com/drae7299">Github</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
