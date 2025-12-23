import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Landing from './components/Landing';
import TreeArea from './components/TreeArea';
import OrnamentTray from './components/OrnamentTray';
import Snow from './components/Snow';
import SecretSanta from './components/SecretSanta';
import CrosswordPuzzle from './components/CrosswordPuzzle';
import { TOTAL_ORNAMENTS, ORNAMENTS, SPOTS, HER_NAME, GRID_VALIDATION, STAR_MESSAGE, HIDDEN_GIFT } from './data';

function App() {
    const [page, setPage] = useState('auth'); // 'auth', 'landing', 'main'
    const [placedOrnaments, setPlacedOrnaments] = useState([]);
    const [draggingOrnament, setDraggingOrnament] = useState(null);
    const [currentMessage, setCurrentMessage] = useState({
        type: 'Tip',
        text: 'Drag an ornament onto the tree to begin...',
        meta: ''
    });
    const [lightsOn, setLightsOn] = useState(false);
    const [showFinale, setShowFinale] = useState(false);
    const [showLetter, setShowLetter] = useState(false);
    const [starActive, setStarActive] = useState(false);
    const [showHiddenGift, setShowHiddenGift] = useState(false);

    const handleUnlock = () => setPage('landing');
    const handleStart = () => setPage('main');

    const handleDragStart = (ornament) => {
        setDraggingOrnament(ornament);
    };

    const handleDrop = (spotIdx) => {
        if (!draggingOrnament) return;
        
        // Check if spot is already taken
        if (placedOrnaments.some(po => po.spotIdx === spotIdx)) return;

        // Validate if the ornament can be placed at this position
        const validation = GRID_VALIDATION[spotIdx];
        if (validation && draggingOrnament.label !== validation.requiredEmoji) {
            // Show error message for wrong placement
            setCurrentMessage({
                type: 'Error',
                text: 'Wrong position! Check the crossword puzzle for correct placement.',
                meta: 'Each ornament has a specific position on the tree.'
            });
            setDraggingOrnament(null);
            return;
        }

        const spot = SPOTS[spotIdx];
        const newPlaced = {
            ...draggingOrnament,
            x: spot.x,
            y: spot.y,
            spotIdx
        };

        const newPlacedList = [...placedOrnaments, newPlaced];
        setPlacedOrnaments(newPlacedList);
        setDraggingOrnament(null);
        setCurrentMessage({
            type: draggingOrnament.type,
            text: draggingOrnament.message,
            meta: ''
        });

        if (newPlacedList.length === TOTAL_ORNAMENTS) {
            setTimeout(() => {
                setLightsOn(true);
                setStarActive(true);
            }, 1000);
        }
    };

    const handleOrnamentClick = (ornament) => {
        setCurrentMessage({
            type: ornament.type,
            text: ornament.message,
            meta: ''
        });
    };

    const handleStarClick = () => {
        if (starActive) {
            setShowLetter(true);
        }
    };

    const handleGiftClick = () => {
        setShowHiddenGift(true);
    };

    const resetAll = () => {
        setPlacedOrnaments([]);
        setLightsOn(false);
        setStarActive(false);
        setCurrentMessage({
            type: 'Tip',
            text: 'Drag an ornament onto the tree to begin...',
            meta: ''
        });
    };

    return (
        <div className="app-container">
            {page === 'auth' && <Auth onUnlock={handleUnlock} />}
            
            {page === 'landing' && <Landing onStart={handleStart} />}

            {page === 'main' && (
                <div className="main-container">
                    <header>
                        <div className="title">
                            <h1>Decorate the Tree 🎄</h1>
                            <div className="subtitle">
                                Drag ornaments onto the tree. Each one reveals something sweet. When you finish… the lights turn on ✨
                            </div>
                        </div>

                        <div className="topbar">
                            <div className="pill"><strong>{placedOrnaments.length}</strong>/{TOTAL_ORNAMENTS} placed</div>
                            <button className="btn" onClick={resetAll}>Reset</button>
                            <button className="btn" onClick={() => setLightsOn(!lightsOn)}>
                                {lightsOn ? 'Turn Off' : 'Preview Lights'}
                            </button>
                        </div>
                    </header>

                    <main>
                        <OrnamentTray 
                            placedOrnaments={placedOrnaments} 
                            onDragStart={handleDragStart}
                            currentMessage={currentMessage}
                        />
                        
                        <TreeArea 
                            placedOrnaments={placedOrnaments} 
                            onDrop={handleDrop} 
                            onOrnamentClick={handleOrnamentClick}
                            lightsOn={lightsOn}
                            onStarClick={handleStarClick}
                            starActive={starActive}
                            onGiftClick={handleGiftClick}
                        />
                        
                        <CrosswordPuzzle />
                    </main>


                    {showLetter && (
                        <div className="letter-modal show">
                            <div className="letter-content">
                                <button className="close-btn" onClick={() => setShowLetter(false)}>&times;</button>
                                <h2>给{HER_NAME}的信 ⭐</h2>
                                <div className="letter-text">
                                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                        {STAR_MESSAGE.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {showHiddenGift && (
                        <div className="letter-modal show">
                            <div className="letter-content hidden-gift-content">
                                <button className="close-btn" onClick={() => setShowHiddenGift(false)}>&times;</button>
                                <h2>{HIDDEN_GIFT.title}</h2>
                                
                                {HIDDEN_GIFT.hasVideo && (
                                    <div className="hidden-gift-video">
                                        <video 
                                            controls 
                                            autoPlay 
                                            muted
                                            style={{
                                                width: '100%',
                                                maxWidth: '500px',
                                                borderRadius: '10px',
                                                marginBottom: '20px'
                                            }}
                                        >
                                            <source src={HIDDEN_GIFT.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                                
                                <div className="letter-text">
                                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                        {HIDDEN_GIFT.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <Snow />
            <SecretSanta />
        </div>
    );
}

export default App;

