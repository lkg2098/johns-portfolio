import React, { useState, useEffect } from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import gmail from '../images/gmail.png';
import profile from '../images/profile_sq.png';

const Tooltip = ({ position, message }) => {
    return (
        <div style={{
            position: 'absolute',
            top: position.y - 25,
            left: position.x + 10,
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            zIndex: 1000
        }}>
            {message}
        </div>
    );
};

export default function Landing() {

    const myEmail = "process.env.REACT_APP_MY_EMAIL";
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    const handleCopy = (e) => {
        navigator.clipboard.writeText(myEmail);
        setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY
        });
        setTimeout(() => {
            setTooltip({ ...tooltip, visible: false });
        }, 2000);
    };

    const updateTooltipPosition = (e) => {
        setTooltip(prevState => ({
            ...prevState,
            x: e.clientX,
            y: e.clientY
        }));
    };

    useEffect(() => {
        if (tooltip.visible) {
            window.addEventListener('mousemove', updateTooltipPosition);
        } else {
            window.removeEventListener('mousemove', updateTooltipPosition);
        }

        return () => {
            window.removeEventListener('mousemove', updateTooltipPosition);
        };
    }, [tooltip.visible]);

    return (
        <div className='landing'>
            <div className="content">
                <div className="information">
                    <h1>
                        John Gray
                    </h1>
                    <h2>
                        FULL - STACK DEVELOPER
                    </h2>
                    <div className='contact-icons'>
                        <a
                            href="https://www.linkedin.com/in/john-thomas-gray"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='linkedin-icon'
                        >
                            <img
                                src={linkedin}
                                alt="linkedin"
                                width='55px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                            />
                        </a>
                        <a
                            href="https://github.com/john-thomas-gray"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='github-icon'
                        >
                            <img
                                src={github}
                                alt="github"
                                width='55px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                            />
                        </a>
                        <span className='gmail-icon'>
                            <img
                                src={gmail}
                                alt="gmail"
                                width='55px'
                                style={{
                                    paddingRight: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={handleCopy}
                            />
                        </span>
                    </div>
                </div>
                <div className="profile-image">
                    <img
                        src={profile}
                        alt="Profile"
                    />
                </div>
            </div>
            {tooltip.visible && <Tooltip position={{ x: tooltip.x, y: tooltip.y }} message="Email address copied to clipboard!" />}
        </div>
    )
}
