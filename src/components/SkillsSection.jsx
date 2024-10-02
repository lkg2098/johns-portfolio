import React from "react";

const SkillsSection = ({ heading, items }) => {
    return (
        <div className={heading.toLowerCase()}>
            <h2 class="image-container-heading">{heading}</h2>
            <div><br /></div>
            <div className="image-container-wrapper">
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
