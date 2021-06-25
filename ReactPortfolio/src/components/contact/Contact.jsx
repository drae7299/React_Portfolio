import { useState, useEffect } from "react";
import "./contact.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/messageIcon2.png" />
      </div>
      <div className="right">
        <h2>Contact & Resume</h2>
        <address>
        <ul className= "contactInfo">
        <PhoneAndroidIcon fontSize="large"/>
        <a href="tel:+16145928914">614.592.8914</a>
        </ul>
        <ul className= "contactInfo">
        <EmailIcon fontSize="large"/>
        <a href="mailto:drae7299@gmail.com">Email</a>
         </ul> 
         <ul className= "contactInfo">
         <GitHubIcon fontSize="large"/>
         <a href="https://github.com/drae7299" target="github.com/drae7299">Github</a>
         </ul>
         <ul className="contactInfo">
         <LinkedInIcon fontSize="large"/>
         <a href="https://www.linkedin.com/in/andre-rodriguez-1ab5b9126/" target="linkedin.com/in/andre-rodriguez-1ab5b9126/"> linkedin </a>
         </ul>
         <ul className="contactInfo">
         <PictureAsPdfIcon fontSize="large"/>
         <a href="Assets\Andre_Rodriguez_-_Full_Stack_Web_and_Application_Developer (1).pdf"
                    target="Assets\Andre_Rodriguez_-_Full_Stack_Web_and_Application_Developer (1).pdf">Resume</a>
         </ul>
          

        </address>
      </div>
    </div>
  );
}
