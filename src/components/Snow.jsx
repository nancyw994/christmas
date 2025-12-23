import React, { useEffect, useState } from 'react';

const Snow = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            const newSnowflake = {
                id,
                left: Math.random() * 100 + "vw",
                duration: (Math.random() * 3 + 2) + "s",
                fontSize: (Math.random() * 10 + 10) + "px",
            };
            setSnowflakes(prev => [...prev, newSnowflake]);

            setTimeout(() => {
                setSnowflakes(prev => prev.filter(s => s.id !== id));
            }, 5000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map(s => (
                <div 
                    key={s.id}
                    className="snowflake"
                    style={{
                        left: s.left,
                        animationDuration: s.duration,
                        fontSize: s.fontSize,
                        top: '-20px'
                    }}
                >
                    ❄
                </div>
            ))}
            <div className="ground"></div>
        </div>
    );
};

export default Snow;

