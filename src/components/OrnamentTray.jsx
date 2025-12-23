import React from 'react';
import { ORNAMENTS } from '../data';

const OrnamentTray = ({ placedOrnaments, onDragStart, currentMessage }) => {
    const placedIds = new Set(placedOrnaments.map(o => o.id));

    return (
        <section className="panel">
            <div className="panelHeader">
                <h2>Christmas Ornaments</h2>
            </div>
            <div className="tray">
                {ORNAMENTS.map(o => (
                    !placedIds.has(o.id) && (
                        <div 
                            key={o.id}
                            className={`ornament ${o.colorClass}`}
                            draggable
                            onDragStart={() => onDragStart(o)}
                        >
                            <div className="label">{o.label}</div>
                        </div>
                    )
                ))}
            </div>
            <div className="hint">
                <span className="pill" style={{ padding: '6px 10px', marginBottom: '8px', display: 'block' }}>Drag → Drop</span>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.4' }}>
                    💡 <strong>Tip:</strong> After an ornament is placed, click it on the tree to re-open its message 💛
                </div>
            </div>
            
            
            {currentMessage && (
                <div className="messageCard" style={{ marginTop: '12px' }}>
                    <div className={`badge ${currentMessage.type === 'Error' ? 'error' : ''}`}>{currentMessage.type}</div>
                    <div>
                        <div className="msgText">{currentMessage.text}</div>
                        <div className="msgMeta">{currentMessage.meta}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default OrnamentTray;

