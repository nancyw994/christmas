import React from 'react';
import { HER_NAME } from '../data';
import secretSantaImage from '../assets/11.webp';

const Landing = ({ onStart }) => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">Merry Christmas, <span>{HER_NAME}</span> 🎄</h1>
                <p className="landing-subtitle">Decorate the tree to reveal little pieces of us.</p>
                <button className="start-button" onClick={onStart}>Start decorating</button>
            </div>
            <div className="landing-image">
                <img src={secretSantaImage} alt="Christmas" className="landing-santa-image" />
            </div>
        </div>
    );
};

export default Landing;

