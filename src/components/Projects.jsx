import React, { useState } from 'react';
import booky from '../images/Booky_homepage.jpg';
import beecore from '../images/beecore.png';
import colorChameleon from '../images/colorchameleon.png';
import portfolio from '../images/portfolio.png';
import carcar from '../images/carcar.png';

function ImagePreviewer({ image, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <img
                src={image}
                alt={title}
                style={{
                    cursor: 'zoom-in',
                    width: '100%',
                    height: '230px',
                    objectFit: 'cover'
                }}
                onClick={openModal}
            />
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1050
                }} onClick={closeModal}>
                    <img
                        src={image}
                        alt={title}
                        style={{
                            cursor: 'zoom-out',
                            maxHeight: '90%',
                            maxWidth: '90%',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                    />
                </div>
            )}
        </>
    );
}

function ProjectCard({ image, liveLink, gitLink, title, description, tags }) {
    const buttonStyle = {
        backgroundColor: '#B4C69E',
        fontWeight: 'bold',
        color: '#012F23',
        outline: '2px solid #F3F5DF',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '0.8rem',
    };

    return (
        <div className="card mb-4" style={{ border: '2px solid', backgroundColor: 'white', color: 'black', borderRadius: '4px' }}>
            <div style={{ margin: '10px' }}>
                <ImagePreviewer image={image} title={title} />
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between mb-3 align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <div>
                        <a href={gitLink} className="btn btn-primary" style={buttonStyle}>💻</a>
                    </div>
                </div>
                <p className="card-text">{description}</p>
                <div>
                    {tags.map(tag => (
                        <span key={tag} className="badge me-1" style={{ backgroundColor: '#012F23' }}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const myProjects = [
    {
        image: beecore,
        liveLink: 'https://www.changeclimate.org/bee',
        codeLink: '',
        title: 'Business Emissions Evaluator',
        description: 'A portfolio website application showcasing my recent ' +
        'and significant projects. Code was built using the React.js framework, ' +
        'using HTML, CSS, and Bootstrap to set up the main front-end graphical ' +
        'user interface. Navigation will snap to the desired section using DOM ' +
        'manipulation. Contact form with email capabilities was built using ' +
        'third-party API, EmailJS. Site was deployed through Netlify.',
        tags: ['React', 'Typescript', 'Cypress', 'CI/CD', 'CSS', 'Python'],
    },
    {
        image: portfolio,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Portfolio',
        title: 'Portfolio Site',
        description: 'A portfolio website application showcasing my recent ' +
        'and significant projects. Code was built using the React.js framework, ' +
        'using HTML, CSS, and Bootstrap to set up the main front-end graphical ' +
        'user interface. Navigation will snap to the desired section using DOM ' +
        'manipulation. Contact form with email capabilities was built using ' +
        'third-party API, EmailJS. Site was deployed through Netlify.',
        tags: ['React', 'Bootstrap', 'DOM', 'CSS', 'EmailJS', 'Netlify'],
    },
    {
        image: colorChameleon,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Candy-Cruisers',
        title: 'Candy Cruisers',
        description: 'Addictive 2D top-down space shooter/puzzle video game.',
        tags: ['Python', 'Django', 'HTML', 'CSS', 'SQLite3', 'PowerShell']
    },
    {
        image: booky,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Booky',
        title: 'Booky',
        description: 'Full-stack development of a web application that allows ' +
        'users to create book clubs, schedule meetings and interact with their ' +
        'friends. Point-scoring and betting systems incentivize participation ' +
        'by creating friendly competition.',
        tags: ['Python', 'Django', 'CSS', 'HTML', 'SQLite3', 'Powershell']
    },
    {
        image: booky,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Conference-GO',
        title: 'Conference GO',
        description: 'A full-stack web application that allows users to keep ' +
        'track of conferences, events, and attendees: dynamic front-end with ' +
        'React, JavaScript, and Bootstrap, back-end infrastructure using Django ' +
        'and Python, ensuring robustness and scalability, and third-party APIs ' +
        'with Pexels and Weather updates.',
        tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST API']
    },
    {
        image: carcar,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/CarCar',
        title: 'CarCar',
        description: 'A dynamic web application designed to handle inventory, sales, and automobile services for a car dealership',
        tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST API']
    },
];

export default function Projects() {


    return (
        <div className="projects">
            <div><br /></div>
            <div><br /></div>
            <h1 className="center" style={{ fontWeight: 'bold' }}>
                Recent Projects
            </h1>
            <div><br /></div>
            <div><br /></div>
            <div className="container">
                <div className="row">
                    {myProjects.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
