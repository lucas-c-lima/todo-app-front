import React, {useState} from "react";
import { bgDay, bgNight } from "../../assets/images";
import "../../assets/styles/background.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Background(){
    const [darkMode, setDarkMode] = useState(true);
    
    const toggleBG = () =>{
        setDarkMode(!darkMode)
    };

    return (
        <div className={`background-full ${darkMode? "dark" : "light"}`}>
            <img src={bgNight} className={`image-header ${darkMode ? "visible" : "hidden"}`} alt="bg img"></img>
            <img src={bgDay} className={`image-header ${!darkMode ? "visible" : "hidden"}`} alt="bg img"></img>
            <button onClick={toggleBG} className={`bg-changer ${darkMode ? "visible" : "hidden"}`}>
                <FontAwesomeIcon icon={faSun} color="#ff8519"/>
            </button>
            <button onClick={toggleBG} className={`bg-changer ${!darkMode ? "visible" : "hidden"}`}>
                <FontAwesomeIcon icon={faMoon} width={40} color="#FFF"/>
            </button>
        </div>
    )
}

export default Background;