export default function Projects() {
    function ProjectCard({ video, liveLink, codeLink, title, description, tags }) {
        const buttonStyle = {
            backgroundColor: '#ADD8E6',
            fontWeight: 'bold',
            color: 'navy',
            border: 'navy',
            borderRadius: '5px',
            padding: '5px 10px',
            fontSize: '0.8rem',
        };

        const mediaStyle = {
            objectFit: 'fit',
            aspectRatio: '1.5 / 1',
            borderRadius: '0',
            width: '100%',
        }

        return (
            <div
                className="card mb-4"
                style={{
                    border: '1px solid',
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '2px',
                }}
            >
                <div style={{ margin: '10px' }}>
                    <iframe
                        style={mediaStyle}
                        src={`https://www.youtube.com/embed/${video}`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5 className="card-title">{title}</h5>
                        <div>
                            <a href={liveLink} className="btn btn-primary" style={buttonStyle}>🚀</a>
                            <span> </span>
                            <a href={codeLink} className="btn btn-primary" style={buttonStyle}>💻</a>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                    <div>
                        {tags.map(tag => (
                            <span key={tag} className="badge me-1" style={{ backgroundColor: 'black' }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const myProjects = [
        {
            video: 'NTBRThwL-2c?si=Sj-Peyx4ZPsdIqnJ',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/fearless-frontend',
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
            video: 'NTBRThwL-2c?si=Sj-Peyx4ZPsdIqnJ',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/pb-art-site',
            title: 'Candy Cruisers',
            description: 'Addictive 2D top-down space shooter/puzzle video game.',
            tags: ['Python', 'Django', 'HTML', 'CSS', 'SQLite3', 'PowerShell']
        },
        {
            video: 'NTBRThwL-2c?si=Sj-Peyx4ZPsdIqnJ',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/cute-cats',
            title: 'Booky',
            description: 'Full-stack development of a web application that allows ' +
            'users to create book clubs, schedule meetings and interact with their ' +
            'friends. A betting and point-scoring incentivizes participation with ' +
            'friendly competition.',
            tags: ['Python', 'Django', 'CSS', 'HTML', 'SQLite3', 'Powershell']
        },
        {
            video: 'NTBRThwL-2c?si=Sj-Peyx4ZPsdIqnJ',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/fearless-frontend',
            title: 'Conference GO',
            description: 'A full-stack web application that allows users to keep ' +
            'track of conferences, events, and attendees: dynamic front-end with ' +
            'React, JavaScript, and Bootstrap, back-end infrastructure using Django ' +
            'and Python, ensuring robustness and scalability, and third-party APIs ' +
            'with Pexels and Weather updates.',
            tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST API']
        },
    ];

    return (
        <div className="projects">
            <div><br /></div>
            <div><br /></div>
            <h1 className="center" style={{ fontWeight: 'bold' }}>
                My Projects
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
