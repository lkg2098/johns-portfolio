import React, { useState } from 'react';
// Images
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import gmail from '../images/gmail.png';
import profile from '../images/profile.png';

const Tooltip = ({ position, message }) => {
    return (
        <div style={{
            position: 'absolute',
            top: position.y + 10,
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
        }, 1500);
    };
    const backgroundStyle = {
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionY: 'fixed',
        backgroundAttachment: 'fixed',
    };

    return (
        <div style={backgroundStyle}>
            <div>
                <div>
                    <h1>John Gray</h1>
                    <h2>FULL - STACK DEVELOPER</h2>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/john-thomas-gray"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="linkedin"
                                width='40px'
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
                                width='40px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                                className="expand"
                            />
                        </a>
                        <span className="expand">
                            <img
                                src={gmail}
                                alt="gmail"
                                width='45px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                                onClick={handleCopy}
                                className="expand"
                            />
                        </span>
                    </div>
                    <div>
                        <img src={profile} alt="Profile pic" width="200px" />
                    </div>
                </div>
            </div>
            {tooltip.visible && <Tooltip position={{ x: tooltip.x, y: tooltip.y }} message="Email copied to clipboard!" />}
        </div>
    )
}
