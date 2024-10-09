import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className="nav-item">
                    <span
                        className="nav-link nav-content"
                        onClick={() => handleNavItemClick("landing")}
                        style={{ cursor: 'pointer' }}
                    >
                        Home
                    </span>
                </li>
                <li className="nav-item">
                    <span
                    className="nav-link nav-content"
                    onClick={() => handleNavItemClick("skills")}
                    style={{ cursor: 'pointer' }}
                    >
                    Skills
                    </span>
                </li>
                <li className="nav-item">
                    <span
                    className="nav-link nav-content"
                    onClick={() => handleNavItemClick("projects")}
                    style={{ cursor: 'pointer' }}
                    >
                    Projects
                    </span>
                </li>
                <li className="nav-item">
                    <span
                        className="nav-link nav-content"
                        onClick={() => handleNavItemClick("contact")}
                        style={{ cursor: 'pointer' }}
                    >
                        Contact
                    </span>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link nav-content"
                        href="./resume/Resume.pdf"
                        role="button"
                        target="_blank"
                    >
                        {" "}
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
