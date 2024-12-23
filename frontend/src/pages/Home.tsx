import skellyIcon from "../assets/skellyIcon.png";
import skellyDigging from "../assets/skellyDigging.png";
import userImg from "../assets/tree.png";

import { TbShovel } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import "../styles/Home.css";

export const Homepage = () =>{
    return(
        <>
            <nav>
                <img id="skellyIcon" src={skellyIcon} alt="skellyIcon"/>
                <h1 id="logo"> RememberWhen </h1>
            </nav>

            <div className="aboutContainer">
                <img id="skellyDigImg" src={skellyDigging} alt="skellyDigging"/>
                <div className="aboutDesc">
                    <h2> Bury a memory and remember later. </h2>
                    <p> 
                        Insert a picture along with a description of a time you want your future self to remember.
                        Sometimes we are too busy in the future to remember the past. Don't you want to remember when ...?
                        Don't worry, Skelly will do it for you! 
                    </p>
                </div>
                
            </div>

            <form className="capsuleForm">
                <div className="imgCaptionContainer">
                    <img id="userImg" src={userImg} alt="userImg"/>
                    <p> Your chosen image </p>
                </div>
                
                <div className="formContainer">
                    <div>
                        <h3> RIP </h3>
                        <p> A Past Memory </p>
                    </div>
                    <div className="inputContainer">
                        <label> DATE </label>
                        <input type="date" placeholder="Date"/>
                    </div>
                    <div className="inputContainer">
                        <label> EMAIL </label>
                        <input type="email" placeholder="Email"/>
                    </div>
                    
                    <div className="inputContainer">
                        <label> MESSAGE </label>   
                        <textarea placeholder="Remember when..."></textarea>
                    </div>
                    
                    <div className="inputContainer">
                        <label> IMAGE </label>
                        <input type="file"/>
                    </div>
                    
                    <div className="subbtnContainer">
                        <TbShovel id="shovelIcon"/>
                        <button type="submit"> Bury Capsule </button>
                    </div>
                </div>
            </form>
            
            <footer>
                <p> Copyright @ Pauleena Phan 2024 </p>
                <a 
                    href="https://github.com/pauleenaphan/remember-when" 
                    target="_blank" 
                >
                    <FaGithub id="githubIcon" />
                </a>
            </footer>
        </>
    )
}