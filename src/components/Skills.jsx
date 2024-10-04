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
import SkillsSection from './SkillsSection';

const languages = [
    { src: python, alt: 'python', label: 'Python' },
    { src: javascript, alt: 'javascript', label: 'JavaScript', style: { borderRadius: '0.3rem' } },
    { src: typescript, alt: 'typescript', label: 'TypeScript', style: { borderRadius: '0.3rem' } },
    { src: sql, alt: 'sql', label: 'SQL' },
    { src: csharp, alt: 'c sharp', label: 'C#' },
    { src: html, alt: 'html', label: 'HTML' },
    { src: css, alt: 'css', label: 'CSS' }
];

const devops = [
    { src: git, alt: 'git', label: 'Git' },
    { src: docker, alt: 'docker', label: 'Docker', style: { borderRadius: '0.3rem' } },
    { src: cicd, alt: 'cicd', label: 'CI/CD', style: { filter: 'brightness(0)' } },
    { src: cypress, alt: 'cypress', label: 'Cypress' },
    { src: aws, alt: 'aws', label: 'AWS' },
    { src: heroku, alt: 'heroku', label: 'Heroku' }
];

const frontend = [
    { src: react, alt: 'react', label: 'React' },
    { src: bootstrap, alt: 'bootstrap', label: 'Bootstrap', style: { borderRadius: '0.3rem' } },
    { src: vite, alt: 'vite', label: 'Vite', style: { borderRadius: '0.3rem' } }
];

const backend = [
    { src: django, alt: 'django', label: 'Django' },
    { src: fastapi, alt: 'fastapi', label: 'FastAPI', style: { borderRadius: '0.3rem' } },
    { src: nodejs, alt: 'nodejs', label: 'Node.js' },
    { src: postgresql, alt: 'postgresql', label: 'PostgreSQL' },
    { src: unity, alt: 'unity', label: 'Unity' },
    { src: express, alt: 'express', label: 'ExpressJS' },
    { src: mongodb, alt: 'mongodb', label: 'MongoDB' }
];

export default function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="information">

                <p>
                I am proficient in a diverse array of technologies that span the complete software
                development lifecycle. My expertise lies not only in continually honing
                a deep understanding of tools currently in my stack, but also in
                efficiently incorportating newly learned skills. I make an impact early,
                whether I'm jumping into a new codebase or helping the team pivot to an emergent technology.
                </p>
            </div>

            <div className="sections">
                <SkillsSection heading="Languages" items={languages} />
                <SkillsSection heading="Devops" items={devops} />
                <SkillsSection heading="Frontend" items={frontend} />
                <SkillsSection heading="Backend" items={backend} />
            </div>

        </div>
    )
}
