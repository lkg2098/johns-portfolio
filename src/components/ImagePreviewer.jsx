import React, { useState } from 'react';

export default function ImagePreviewer({ image, title }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='project-modal'>
            <img
                src={image}
                alt={title}
                style={{
                    cursor: 'zoom-in',
                    width: '100%',
                    height: '230px',
                    objectFit: 'cover',
                    borderRadius: '5px'
                }}
                onClick={openModal}
            />
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1050
                }} onClick={closeModal}>
                    <img
                        src={image}
                        alt={title}
                        style={{
                            cursor: 'zoom-out',
                            maxHeight: '90%',
                            maxWidth: '90%',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        }}
                    />
                </div>
            )}
        </div>
    );
}
