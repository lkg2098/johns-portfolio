import React from 'react';
import hackreactor from '../images/hackreactor.png';

const About = () => {
    return (
        <div className= 'main-section about'>
            <h1 className='section-heading'>About Me</h1>
            <img src={hackreactor} alt="Hack Reactor Logo" />
            <p>Prior to becoming a software engineer I mined my experience
                as a post-production specialist to found and operate Wadjet, an
                access services company that created audio description voiceover
                to make major streaming services accessible to viewers
                with blindness and visual impairments. When inconsistent file formats
                nearly prevented me from getting a new client, I taught myself Python
                and quickly developed a file conversion application to make that
                business partnership possible. The experience led me to chart a new
                course in my career and complete the rigorous Hack Reactor Software
                Engineering bootcamp.
            </p>
            <p>
                Since graduating from Hack Reactor, I've worked consistently with
                Change Climate Project as a full stack volunteer, helping to maintain
                a large codebase that serves global corporations. In my spare time, I've created
                several video games and React websites which you can view below!
            </p>
        </div>
    );
};

export default About;
