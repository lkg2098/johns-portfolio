import python from '../images/python.svg';
import javascript from '../images/javascript.svg';
import typescript from '../images/typescript.svg';
import sql from '../images/sql.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import csharp from '../images/csharp.svg';
import django from '../images/django.svg';
import fastapi from '../images/fastapi.svg';
import nodejs from '../images/nodejs.svg';
import postgresql from '../images/postgresql.svg';
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
// import tailwind from '../images/tailwind.svg';
import docker from '../images/docker.svg';
import git from '../images/git.svg';
import cicd from '../images/cicd.png';
import aws from '../images/aws.svg';
import heroku from '../images/heroku.svg';
import cypress from '../images/cypress.svg';
import express from '../images/express.svg';
import mongodb from '../images/mongodb.svg';
import vite from '../images/vite.svg';
import unity from '../images/unity.svg';

export default function Skills() {
    return (
        <div
            className="skills"
        >
            <div style={{
                    flex: 1,
                    padding: '1rem',
                    }}>
                <h1 style={{
                    fontWeight: 'bold',
                    color: '#012F23',
                    }}>
                    Skills
                </h1>
                <div><br /></div>
                <p className="skills-p">
                I am proficient in a diverse array of technologies that span the complete software
                development lifecycle. My expertise lies not only in continually honing
                a deep understanding of tools currently in my stack, but also in
                efficiently incorportating newly learned skills. I make an impact early,
                whether I'm jumping into a new codebase or helping the team pivot to an emergent technology.
                </p>
            </div>
            <div><br /></div>
            <div className="languages">
                <h2>Languages</h2>
                <div><br /></div>
                <div className="image-container">
                    <img src={python} alt="python" width='75px'/>
                    <span className="alt-text">Python</span>
                </div>
                <div className="image-container">
                    <img src={javascript} alt="javascript" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">JavaScript</span>
                </div>
                <div className="image-container">
                    <img src={typescript} alt="js" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">TypeScript</span>
                </div>
                <div className="image-container">
                    <img src={sql} alt="sql" width='75px'/>
                    <span className="alt-text">SQL</span>
                </div>
                <div className="image-container">
                    <img src={csharp} alt="c sharp" width='75px'/>
                    <span className="alt-text">C#</span>
                </div>
                <div className="image-container">
                    <img src={html} alt="html" width='75px'/>
                    <span className="alt-text">HTML</span>
                </div>
                <div className="image-container">
                    <img src={css} alt="css" width='75px'/>
                    <span className="alt-text">CSS</span>
                </div>
            </div>
            <div className="devops">
                <h2>Devops</h2>
                <div><br /></div>
                <div className="image-container">
                    <img src={git} alt="git" width='75px'/>
                    <span className="alt-text">Git</span>
                </div>
                <div className="image-container">
                    <img src={docker} alt="docker" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">Docker</span>
                </div>
                <div className="image-container">
                    <img src={cicd} alt="cicd" width='75px' style={{filter: 'brightness(0)' }}/>
                    <span className="alt-text">CI/CD</span>
                </div>
                <div className="image-container">
                    <img src={cypress} alt="cypress" width='75px'/>
                    <span className="alt-text">Cypress</span>
                </div>
                <div className="image-container">
                    <img src={aws} alt="aws" width='75px'/>
                    <span className="alt-text">AWS</span>
                </div>
                <div className="image-container">
                    <img src={heroku} alt="heroku" width='75px'/>
                    <span className="alt-text">Heroku</span>
                </div>
            </div>
            <div className="frontend">
                <h2>Frontend</h2>
                <div><br /></div>
                <div className="image-container">
                    <img src={react} alt="react" width='75px'/>
                    <span className="alt-text">React</span>
                </div>
                <div className="image-container">
                    <img src={bootstrap} alt="bootstrap" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">Bootstrap</span>
                </div>
                <div className="image-container">
                    <img src={vite} alt="vite" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">Vite</span>
                </div>
            </div>
            <div className="backend">
                <h2>Backend</h2>
                <div><br /></div>
                <div className="image-container">
                    <img src={django} alt="django" width='75px'/>
                    <span className="alt-text">Django</span>
                </div>
                <div className="image-container">
                    <img src={fastapi} alt="FastAPI" width='75px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">FastAPI</span>
                </div>
                <div className="image-container">
                    <img src={nodejs} alt="nodejs" width='75px'/>
                    <span className="alt-text">Node.js</span>
                </div>
                <div className="image-container">
                    <img src={postgresql} alt="postgresql" width='75px'/>
                    <span className="alt-text">postgreSQL</span>
                </div>
                <div className="image-container">
                    <img src={unity} alt="unity" width='75px'/>
                    <span className="alt-text">Unity</span>
                </div>
                <div className="image-container">
                    <img src={express} alt="express" width='75px'/>
                    <span className="alt-text">ExpressJS</span>
                </div>
                <div className="image-container">
                    <img src={mongodb} alt="mongodb" width='75px'/>
                    <span className="alt-text">MongoDB</span>
                </div>
            </div>

        </div>
    )
}
