import React, { useState } from 'react';
import { AUTH_ANSWER } from '../data';

const Auth = ({ onUnlock }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [isHidden, setIsHidden] = useState(false);

    const handleAuth = () => {
        if (input.trim() === AUTH_ANSWER) {
            setIsHidden(true);
            setTimeout(() => {
                onUnlock();
            }, 800);
        } else {
            setError("Try again? ❤️");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleAuth();
    };

    return (
        <div className={`auth-page ${isHidden ? 'hidden' : ''}`}>
            <div className="auth-content">
                <h1 className="auth-title">A Special Surprise Awaits... 🔒</h1>
                <p className="auth-question">What is the date that we have been together?</p>
                <p className="auth-format">(MM/DD/YYYY format, e.g., 01/01/2024)</p>
                <div className="auth-input-container">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter the date..." 
                        autoComplete="off"
                    />
                    <button onClick={handleAuth}>Unlock</button>
                </div>
                {error && <p className="auth-error">{error}</p>}
            </div>
        </div>
    );
};

export default Auth;

