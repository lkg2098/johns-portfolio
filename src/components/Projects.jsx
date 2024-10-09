import React from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '../data/projectData';



export default function Projects() {

    return (
        <div className="main-section projects">
            <h1 className="section-heading">
                Recent Projects
            </h1>
            <div className="container">
                {myProjects.map((project, index) => (
                    <div className='project-card' key={index}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
