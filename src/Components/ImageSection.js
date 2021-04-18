import React from 'react';
import about from '../img/portfolio.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function ImageSection() {
    return (
        <div className = "ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span>Denis Marushchak</span></h4>
                <p className="about-text">
                    My passion is building responsive websites that work well in all basic browsers. I always strive for perfection, and focus on achieving goals. I love staying on the top of technologies, learning new stuff and be creative with it.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Email:</p>
                        <p>Adress:</p>
                    </div>

                    <div className="right-section">
                        <p>Denis Marushchak</p>
                        <p>20 years</p>
                        <p>Ukrainian</p>
                        <p>English, Ukrainian, Russian</p>
                        <p>denismarushak@gmail.com</p>
                        <p>Ukraine, Vinnitsa</p>
                    </div>          
                </div>
                <form action="https://drive.google.com/file/d/1e-dhJLthv6K5TsMY302zoADmY-x52VkR/view?usp=sharing" target="_blank">
                    <button class="button button-download"><span>Download CV  <FontAwesomeIcon icon={faDownload} className="portfolio-icon"></FontAwesomeIcon></span>   </button>
                </form>
            </div>
        </div>
    )
}

export default ImageSection;
