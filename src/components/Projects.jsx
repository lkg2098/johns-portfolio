import React from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '../data/projectData';
import ImagePreviewer from './ImagePreviewer';

export default function Projects() {

    return (
        <div className="main-section projects">
            <h1 className="section-heading">
                Recent Projects
            </h1>
            <div className="container">
                {myProjects.map((project) => (
                    <div className='project-card' key={project.id}>
                        <ProjectCard {...project} ImagePreviewer={ImagePreviewer} />
                    </div>
                ))}
            </div>
        </div>
    );
}
