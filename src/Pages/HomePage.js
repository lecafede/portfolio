import React from 'react'
import {faGithub, faInstagramSquare, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text" >
                    Hi, I am
                    <span> Denis Marushchak</span>
                </h1>
                <p className="h-sub-text ">
                I am a front end developer from Vinnitsa, Ukraine. My passion is building responsive websites that work well in all basic browsers. I always strive for perfection, and focus on achieving goals. I love staying on the top of technologies, learning new stuff and be creative with it. I am searching for an opportunity that will help me to improve my technical skills and knowledge and upgrade my soft skills.
                </p>
                <div className="icons">
                    <a rel="noreferrer" className="icon-holder" href="https://t.me/lecafede" target="_blank">
                        <FontAwesomeIcon icon={faTelegram} className="icon"></FontAwesomeIcon>
                    </a>
                    <a rel="noreferrer" className="icon-holder" href="https://github.com/lecafede" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                    </a>                    
                    <a rel="noreferrer" className="icon-holder" href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D0%BC%D0%B0%D1%80%D1%83%D1%89%D0%B0%D0%BA-668194198/" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon>
                    </a>   
                    <a rel="noreferrer" className="icon-holder" href="https://www.instagram.com/lecafede__/" target="_blank">
                        <FontAwesomeIcon  className="icon"icon={faInstagramSquare}></FontAwesomeIcon>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage
