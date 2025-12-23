import React from 'react';
import { SPOTS, BULBS, STAR_MESSAGE } from '../data';

const TreeArea = ({ placedOrnaments, onDrop, onOrnamentClick, lightsOn, onStarClick, starActive, onGiftClick, onRightGiftClick, onLeftGiftClick, onSecondGiftClick, onThirdGiftClick, onHatClick }) => {
    return (
        <section className="panel treeWrap">
            <div className="panelHeader">
                <h2>The Tree</h2>
                <span className="pill">{placedOrnaments.length === 0 ? 'Bare & ready' : 'Getting beautiful'}</span>
            </div>

            <div className={`treeStage ${lightsOn ? 'lightsOn' : ''}`}>
                <div className="treeCanvas">
                    <div className="tree">
                        <svg viewBox="0 0 600 800" aria-label="Christmas Tree">
                            <defs>
                                <linearGradient id="treeGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4b5320" />
                                    <stop offset="100%" stopColor="#2d3314" />
                                </linearGradient>
                                <filter id="fringe">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                                </filter>
                            </defs>

                            <rect x="280" y="680" width="40" height="60" fill="#4b3621" />

                            <g filter="url(#fringe)">
                                <path d="M100 700 L300 730 L500 700 L440 500 L160 500 Z" fill="url(#treeGrad)" stroke="#1a1e0b" strokeWidth="1" />
                                <path d="M150 520 L300 550 L450 520 L400 350 L200 350 Z" fill="url(#treeGrad)" stroke="#1a1e0b" strokeWidth="1" />
                                <path d="M200 370 L300 400 L400 370 L300 120 Z" fill="url(#treeGrad)" stroke="#1a1e0b" strokeWidth="1" />
                            </g>

                            <g transform="translate(100, 700)" 
                               onClick={onLeftGiftClick}
                               style={{ cursor: 'pointer' }}
                               className="gift-box">
                                <rect x="0" y="30" width="150" height="100" fill="#7a2a2a" />
                                <text x="10" y="80" fill="#5a1a1a" fontSize="40" fontWeight="bold">2025</text>
                                <path d="M75 30 Q50 0 25 30 Q50 0 75 30 Q100 0 125 30 Q100 0 75 30" fill="none" stroke="#5a1a1a" strokeWidth="4" />
                                <g transform="translate(-20, -10)"
                                   onClick={(e) => { e.stopPropagation(); onHatClick(); }}
                                   style={{ cursor: 'pointer' }}
                                   className="hat-decoration">
                                    <path d="M0 50 Q25 0 50 50 Z" fill="red" />
                                    <rect x="-5" y="45" width="60" height="10" rx="5" fill="white" />
                                    <circle cx="25" cy="0" r="8" fill="white" />
                                </g>
                            </g>
                            <g transform="translate(250, 750)"
                               onClick={onSecondGiftClick}
                               style={{ cursor: 'pointer' }}
                               className="gift-box">
                                <rect x="0" y="0" width="80" height="60" fill="#a4b57e" />
                                <text x="5" y="40" fill="#7a8a5e" fontSize="25" fontWeight="bold">2025</text>
                                <path d="M40 0 Q20 -20 10 0 Q20 -20 40 0 Q60 -20 70 0 Q60 -20 40 0" fill="none" stroke="#7a8a5e" strokeWidth="3" />
                            </g>
                            <g transform="translate(420, 650)"
                               onClick={onRightGiftClick}
                               style={{ cursor: 'pointer' }}
                               className="gift-box">
                                <rect x="0" y="50" width="160" height="120" fill="#7a2a2a" />
                                <text x="15" y="110" fill="#5a1a1a" fontSize="50" fontWeight="bold">2025</text>
                                <path d="M80 50 Q40 0 20 50 Q40 0 80 50 Q120 0 140 50 Q120 0 80 50" fill="none" stroke="#5a1a1a" strokeWidth="5" />
                                <g transform="translate(130, 40)">
                                    <path d="M0 0 Q10 -10 20 0 Q10 10 0 0" fill="#2d5a27" />
                                    <path d="M0 0 Q-10 -10 -20 0 Q-10 10 0 0" fill="#2d5a27" />
                                    <circle cx="0" cy="0" r="4" fill="red" />
                                    <circle cx="5" cy="5" r="4" fill="red" />
                                </g>
                            </g>
                            <g transform="translate(350, 760)"
                               onClick={onThirdGiftClick}
                               style={{ cursor: 'pointer' }}
                               className="gift-box">
                                <rect x="0" y="0" width="100" height="70" fill="#c46a3d" />
                                <text x="10" y="45" fill="#a44a2d" fontSize="30" fontWeight="bold">2025</text>
                                <path d="M50 0 Q25 -25 10 0 Q25 -25 50 0 Q75 -25 90 0 Q75 -25 50 0" fill="none" stroke="#a44a2d" strokeWidth="3" />
                            </g>
                            <g transform="translate(265, 800)"
                               onClick={onGiftClick}
                               style={{ cursor: 'pointer' }}
                               className="gift-box">
                                <rect x="0" y="0" width="90" height="80" fill="#78beff" />
                                <path d="M0 40 L90 40 M45 0 L45 80" stroke="red" strokeWidth="4" />
                                <path d="M45 0 Q25 -20 10 0 Q25 -20 45 0 Q65 -20 80 0 Q65 -20 45 0" fill="none" stroke="red" strokeWidth="3" />
                            </g>

                            <g 
                                id="topStar" 
                                transform="translate(300, 100) scale(1.8)"
                                onClick={starActive ? onStarClick : undefined}
                                style={{ 
                                    cursor: starActive ? 'pointer' : 'default',
                                    opacity: starActive ? 1 : 0.5,
                                    transition: 'all 0.3s ease'
                                }}
                                className={starActive ? 'star-active' : 'star-inactive'}
                            >
                                <path d="M0 -25 L7 -8 L25 -8 L11 4 L16 22 L0 12 L-16 22 L-11 4 L-25 -8 L-7 -8 Z" fill="#ffd37a" stroke="#b38b2d" strokeWidth="1.5" />
                                {starActive && (
                                    <circle cx="0" cy="0" r="35" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.6">
                                        <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                )}
                            </g>
                        </svg>

                        <div id="lights">
                            {BULBS.map((b, i) => (
                                <div key={i} className="bulb" style={{ left: b.x + "%", top: b.y + "%" }}></div>
                            ))}
                        </div>
                        
                        <div id="spots">
                            {SPOTS.map((s, i) => (
                                <div 
                                    key={i} 
                                    className="spot" 
                                    style={{ left: s.x + "%", top: s.y + "%" }}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={() => onDrop(i)}
                                ></div>
                            ))}
                        </div>

                        <div id="placedLayer">
                            {placedOrnaments.map((po, i) => (
                                <div 
                                    key={po.id} 
                                    className={`placed ${po.colorClass}`} 
                                    style={{ left: po.x + "%", top: po.y + "%" }}
                                    onClick={() => onOrnamentClick(po)}
                                >
                                    <div className="label">{po.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TreeArea;

