import React from "react";

const SkillsSection = ({ heading, items }) => {
    return (
        <div className='skill-section'>
            <div className="image-container-wrapper">
                <h2 className="image-container-heading">{heading}</h2>
                {items.map((item, index) => (
                    <div className="image-container" key={index}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            width={item.width || '75px'}
                            style={item.style || {}}
                        />
                        <span className="alt-text">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SkillsSection;
