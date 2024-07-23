import React, { useState } from 'react';
import booky from '../images/Booky_homepage.jpg';
import beecore from '../images/beecore.png';
import colorChameleon from '../images/colorchameleon.png';
import portfolio from '../images/portfolio.png';
import carcar from '../images/carcar.png';
import conferencego from '../images/conferencego.png';

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
        description: 'A carbon emissions measurement software I\’m developing as a volunteer in collaboration with the Change Climate Project. ' +
        'This robust and modular codebase uses TypeScript and Node.js, with microservices written in Python. ' +
        'Global corporations (REI, Vuori, etc.) utilize the React-based frontend to input data, calculate emissions and plan reduction strategies. ' +
        'Charts and graphs are implemented for data visualization. Interfaces and types facilitate adherence to rigorous style guidelines. ' +
        'Cypress testing is used for continuous integration and deployment.' +
        '',
        tags: ['React', 'Typescript', 'Cypress', 'CI/CD', 'CSS', 'Python', 'Node.js', 'Yarn'],
    },
    {
        image: portfolio,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Portfolio',
        title: 'Portfolio Site',
        description: 'A single page web application showcasing my skills ' +
        'and projects, built with the React.js framework. Written in JavaScript, ' +
        'with JSX, CSS, and Bootstrap for styling. The nav bar uses DOM manipulation to ' +
        'take the user to the selected section. UseEffect hook makes "email address copied" ' +
        'message follow the user\'s cursor. EmailJS, a third-party API, powers the contact form.  ' +
        'I deployed the site with Heroku and Netlify.',
        tags: ['React', 'Bootstrap', 'DOM', 'CSS', 'EmailJS', 'Netlify', 'JSX', 'JavaScript'],
    },
    {
        image: colorChameleon,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Candy-Cruisers',
        title: 'Candy Cruisers',
        description: 'An addictive blend of arcade shooters and color-matching puzzle video games. ' +
        'N-ary search algorithms dynamically reposition grid-based enemies and track spatial relationships between them. ' +
        'An event bus facilitates communication between complex decoupled systems. ' +
        'Level progression system recalculates point rewards and difficulty the further a player progresses. ' +
        'Each of five enemy types uses a distinct ability, augmented when like-colored enemies group together.',
        tags: ['C#', 'Unity', 'Event System', 'N-ary Tree', 'Queues', ]
            // 'json', 'PostgreSQL']
    },
    {
        image: booky,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Booky',
        title: 'Booky',
        description: 'A full-stack web application that allows users to make friends and compete by participating in book clubs. ' +
        'A relational database built with SQL creates complex interactions between data models. ' +
        'Clubs can host meetings with optional attendance for club members. ' +
        'Google Books API integrates book information into each meeting. ' +
        'A Friends system allows users to send, approve or deny requests to join each other\'s Friends List. ' +
        'Point-scoring and betting drive user engagement by creating friendly competition.',
        tags: ['React', 'REST', 'FastAPI', 'ViteJS', 'CSS', 'PostgreSQL',
            'Bootstrap', 'Docker', 'Python', 'JavaScript', 'JSX']
    },
    {
        image: conferencego,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/Conference-GO',
        title: 'Conference GO',
        description: 'A full-stack web application that allows users to keep track of conferences, events, and attendees. ' +
        'The front-end is built with React, JavaScript, JSX and Bootstrap. ' +
        'RESTful APIs on the backend were created with Django and Python. ' +
        'Third-party APIs Pexels and Weather update conferences with location photos and weather information.' +
        '',
        tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST', 'Microservices']
    },
    {
        image: carcar,
        liveLink: 'test',
        gitLink: 'https://github.com/john-thomas-gray/CarCar',
        title: 'CarCar',
        description: 'A microservices web application designed to handle automobile inventory, sales, and services for a car dealership. ' +
        'Users submit forms to add automobiles, technicians, and customers to a postgreSQL database and schedule appointments. ' +
        'A table organizes appointments by an updatable status: scheduled, finished or cancelled. ' +
        'A reactive search feature allows users to look up appointments associated with a vehicle\'s VIN. ' +
        'Microservices regularly exchange data with poling. ' +
        '',
        tags: ['React', 'JavaScript', 'Django', 'Python', 'REST',  'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST', 'Poling']
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
