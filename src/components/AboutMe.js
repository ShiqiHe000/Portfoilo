import React from 'react';
import Education from './Education';
import SoftSkills from './SoftSkills';
import TechSkills from './TechSkills';

const AboutMe = () => {
    return (
        <div className={`container`}>
            <h2 className={`secondaryTitle edu-title`} id="aboutMe">About Me</h2>
            <Education /> 
            <h2 className="primaryTitle" data-tech-title-anim>My Skills</h2>
            <TechSkills /> 
            <SoftSkills /> 
        </div>
    )
}

export default AboutMe
