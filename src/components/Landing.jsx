import React, { useState, useEffect } from 'react';
// Images
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import gmail from '../images/gmail.png';
import profile from '../images/profile_sq.png';
import jungle_vista from '../images/jungle_vista.jpg';

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

    const myEmail = process.env.REACT_APP_MY_EMAIL;
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

    const backgroundStyle = {
        backgroundImage: 'linear-gradient(to right, #395B4D 55%, #012F23 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    return (
        <div style={backgroundStyle}>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>
            <div className="c-row">
                <div className="d-flex align-items-center justify-items-center">
                    <div style={{width: '8rem'}}></div>
                    <div className="about-text align-items-center">
                        <h1 className="name">
                            John Gray
                        </h1>
                        <h2 className="fullstack">
                            FULL - STACK DEVELOPER
                        </h2>
                        <div><br /></div>
                        <a
                            href="https://www.linkedin.com/in/john-thomas-gray"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="linkedin"
                                width='55px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                                className="expand"
                            />
                        </a>
                        <a
                            href="https://github.com/john-thomas-gray"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={github}
                                alt="github"
                                width='55px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                                className="expand"
                            />
                        </a>
                        <span className="expand">
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
                        <div><br /></div>
                    </div>
                    <div className="profile-image align-items-center position-relative">
                        <img
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <div style={{width: '8rem'}}></div>
                </div>
            </div>
            {tooltip.visible && <Tooltip position={{ x: tooltip.x, y: tooltip.y }} message="Email address copied to clipboard!" />}
            <div><br /></div>
            <div><br /></div>
            <div><br /></div>

        </div>
    )
}
