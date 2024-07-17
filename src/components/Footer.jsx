import React, {useState, useEffect} from 'react';
// Images
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';
import github from '../images/github.png';

const Tooltip = ({ position, message }) => {
    return (
        <div style={{
            position: 'absolute',
            top: position.y + 800,
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

export default function Footer() {
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


    return (
        <footer>
            <div><br /></div>
            <h6>© John Gray 2024</h6>
            <div className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/john-thomas-gray"
                    target="_blank"
                    rel="noreferrer"
                    className="expand"
                >
                    <img
                        src={linkedin}
                        alt="linkedin"
                        width='40px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                    />
                </a>
                <a
                            href="https://github.com/john-thomas-gray"
                            target="_blank"
                            rel="noreferrer"
                            className="expand"
                        >
                            <img
                                src={github}
                                alt="github"
                                width='40px'
                                style={{paddingRight: '10px', cursor: 'pointer'}}
                                className="expand"
                            />
                        </a>
                <div className="expand">
                    <img
                        src={gmail}
                        alt="gmail"
                        width='45px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                        onClick={handleCopy}
                    />
                </div>
            </div>
            <div><br /></div>
            {tooltip.visible && <Tooltip position={{ x: tooltip.x, y: tooltip.y }} message="Email address copied to clipboard!" />}
        </footer>
    );
}
