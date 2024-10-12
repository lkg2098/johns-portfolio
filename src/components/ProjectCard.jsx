import React, { useState } from "react";
import github from '../images/github.png'

export default function ProjectCard({ image, link, title, description, tags, ImagePreviewer }) {

    return (
        <div className="card">
            <ImagePreviewer image={image} title={title} className='img'/>
            <div className="title-link-container">
                <h5 className="title">{title}</h5>
                <a href={link} target="_blank" rel="noreferrer" className="button">
                    {link.includes("github") ? (
                        <img src={github} alt="GitHub" style={{ width: '24px', height: '24px' }} />
                    ) : (
                        '💻'
                    )}
                </a>
            </div>
            <p className="description">{description}</p>
            <div className='tags'>
                {tags.map(tag => (
                    <span key={tag} className="badge me-1" style={{ backgroundColor: '#012F23' }}>{tag}</span>
                ))}
            </div>
        </div>
    );
}
