import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
            strings: [' React Developer', 'UI/UX Designer', 'Software Developer' ],
            backDelay: 1500,
            backSpeed:60,
            showCursor:true
        })
    }
    , []);

    return (
        <div className = "intro" id="intro">
        <div className= "left">
        <div className="imgContainer">
            <img src="assets/Andre_Headshot_Shot3_1_25.jpg" className="me"/>
            </div>
        </div>
        <div className= "right">
            <div className= "wrapper">
                <h2>Hello there! I'm </h2>
                <h1>Andre Rodriguez</h1>
                <h3>Aspiring <span ref={textRef}></span></h3>
            </div>
            <a href= "#portfolio">
            <KeyboardArrowDownIcon fontSize="large" className="downIcon"/>
            </a>
        </div>
        </div>
    )
}
