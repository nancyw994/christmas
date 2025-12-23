import React from 'react';

const Santa = () => {
    return (
        <div 
            className="santa-container"
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                pointerEvents: 'none'
            }}
        >
            <div className="santa-standing">
                🎅
            </div>
        </div>
    );
};

export default Santa;
