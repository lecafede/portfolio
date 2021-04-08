import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import Resume from '../Components/Resume'
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design3.svg';
import backend from '../img/backend.svg';
import frontend from '../img/frontend.svg';
import Smalltitle from '../Components/SmallTitle'
import {useState} from "react";
import working_experience from '../data/WorkingExperience';
import educational_qual from '../data/EducationalQualifications';
import skills from '../data/Skills';


function AboutPage() {
    
    const [workingExperience] = useState(working_experience);
    const [educationalQualifications] = useState(educational_qual);
    const [skill] = useState(skills);

    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Title title={'My Skills'} span={'My Skills'}/>

            <div className="skils-container">
                {skill.map(skillEl => {
                    return <SkillsSection 
                    skill={skillEl.skill}
                    progress={skillEl.progress} 
                    width={skillEl.width}/>
                })}
            </div>

            <Title title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection image={frontend} title={'Front-end development'} 
                text={'Development web pages based on HTML5, CSS3, SCSS, Gulp, JavaScript. Create a Single Page Application based on React JS / Vue.js.'}/>
             
                <ServicesSection image={backend} title={'Back-end development'} 
                text={'Development of a system for authorization and registration of users. RESTful API development using Laravel. Working with MySQL, Firebase.'}/>

                <ServicesSection image={design} title={'Design'} 
                text={'Create logos and landing pages using Figma and Photoshop. Development of banners for websites and all types of social networks.'}/>
            </div>

            <Title title={'Experience'} span={'Experience'}/>

            <Smalltitle title="Working Experience" icon="briefcase"></Smalltitle>
           
            <div className="mi-resume-wrapper">
           
                {workingExperience.map(workExp => {
                    return <Resume 
                        year={workExp.year} 
                        position={workExp.position} 
                        company={workExp.company}
                        details={workExp.details}/>
                })}

            </div>
            
            <Smalltitle title="Educational Qualifications" icon="book"></Smalltitle>
            
            <div className="mi-resume-wrapper">
                {educationalQualifications.map(educationExp => {
                    return (
                    <Resume 
                        year={educationExp.year} 
                        graduation={educationExp.graduation}
                        university={educationExp.university}
                        details={educationExp.details}
                      />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutPage
