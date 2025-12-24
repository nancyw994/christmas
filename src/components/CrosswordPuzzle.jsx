import React, { useState } from 'react';

const CrosswordPuzzle = () => {
    const [answers, setAnswers] = useState({
        clue1: { word: '', coord: '' },
        clue2: { word: '', coord: '' },
        clue3: { word: '', coord: '' },
        clue4: { word: '', coord: '' },
        clue5: { word: '', coord: '' },
        clue6: { word: '', coord: '' },
        clue7: { word: '', coord: '' },
        clue8: { word: '', coord: '' },
        clue9: { word: '', coord: '' },
        clue10: { word: '', coord: '' },
        clue11: { word: '', coord: '' },
        clue12: { word: '', coord: '' }
    });

    const clues = [
        { id: 'clue1', text: '我住在大海里，不用手也能“拍手”。我在整个格子的起点角落等你。', answer: '🦭', correctCoord: '(1,1)' },
        { id: 'clue2', text: '人们常常数着我入睡，我软软的，像一朵云。我和海里的那位在同一条竖线上，就在它正下方。', answer: '🐑', correctCoord: '(2,1)' },
        { id: 'clue3', text: '我会打呼噜、爱睡觉，而且总能稳稳落地。我贴着那只“数睡眠的”，这一层只有我一个动物。', answer: '🐱', correctCoord: '(2,2)' },
        { id: 'clue4', text: '我是黄油味的、弯弯的早餐点心。我还在第一位所在的那条竖线上，只是比它低两格。', answer: '🥐', correctCoord: '(3,1)' },
        { id: 'clue5', text: '我是爱的象征，在你心里跳动。我紧挨着那份早餐，开启一段三格连在一起的小故事。', answer: '❤️', correctCoord: '(3,2)' },
        { id: 'clue6', text: '我会汪汪叫、会捡球，也一直很忠诚。我贴着那颗跳动的心，完成这段三连格。', answer: '🐶', correctCoord: '(3,3)' },
        { id: 'clue7', text: '灯关掉，屏幕亮起，是看故事的时间。我所在的这一层，是唯一被连续填满四格的一行。', answer: '🎬', correctCoord: '(4,1)' },
        { id: 'clue8', text: '粉粉的，圆圆的，哼哼叫，还特别爱吃零食。在这一整行里，我离故事最近。', answer: '🐷', correctCoord: '(4,2)' },
        { id: 'clue9', text: '我是一种漂亮的结，可以戴在脖子上，也能系在礼物上。在这一行里，我离故事比小吃货远一点，但又比灵感之光近。', answer: '🎀', correctCoord: '(4,3)' },
        { id: 'clue10', text: '当灵感突然出现时，我就会亮起来。在这一整行里，我站在最外侧，没有人再在我旁边。', answer: '💡', correctCoord: '(4,4)' },
        { id: 'clue11', text: '我用线把破洞缝好，是一个一个重复的小圈。我和故事在同一条竖线上，就在它下面。', answer: '🧵', correctCoord: '(5,1)' },
        { id: 'clue12', text: '我甜甜的、彩色的、小小的，通常还会被包起来。我紧贴着缝补者，这一层里只有我陪着它。', answer: '🍭', correctCoord: '(5,2)' }
      ];
      
    const handleInputChange = (clueId, field, value) => {
        setAnswers(prev => ({
            ...prev,
            [clueId]: {
                ...prev[clueId],
                [field]: value
            }
        }));
    };

    const isCorrect = (clueId, field) => {
        const clue = clues.find(c => c.id === clueId);
        if (field === 'word') {
            const word = answers[clueId].word.toLowerCase();
            switch(clueId) {
                case 'clue1': return word === 'seal';
                case 'clue2': return word === 'sheep';
                case 'clue3': return word === 'cat';
                case 'clue4': return word === 'croissant';
                case 'clue5': return word === 'heart';
                case 'clue6': return word === 'dog';
                case 'clue7': return word === 'movie';
                case 'clue8': return word === 'pig';
                case 'clue9': return word === 'bowtie' || word === 'bowknot' || word === 'bow';
                case 'clue10': return word === 'bulb';
                case 'clue11': return word === 'stitch';
                case 'clue12': return word === 'candy';
                default: return false;
            }
        } else {
            return answers[clueId].coord === clue.correctCoord;
        }
    };

    const getInputClass = (clueId, field) => {
        const value = answers[clueId][field];
        if (!value || value.trim() === '') return '';
        
        return isCorrect(clueId, field) ? 'correct' : 'incorrect';
    };

    return (
        <div className="crossword-puzzle">
            <div className="puzzle-header">
                <h3>🧩 Crossword Puzzle</h3>
                <p className="puzzle-instruction">
                    Grid rule: (x, y) = (row, column). Row 1 is the first/top row.<br/>
                    Solve each clue to get the word, then write its coordinate.
                </p>
            </div>
            
            <div className="clues-container">
                <div className="clues-grid">
                    {clues.map((clue, index) => (
                        <div key={clue.id} className="clue-item">
                            <div className="clue-number">{index + 1}.</div>
                            <div className="clue-content">
                                <p className="clue-text">{clue.text}</p>
                                <div className="clue-inputs">
                                    <div className="input-row">
                                        <div className="input-group">
                                            <label>Word:</label>
                                        <input
                                            type="text"
                                            value={answers[clue.id].word}
                                            onChange={(e) => handleInputChange(clue.id, 'word', e.target.value)}
                                            placeholder="______"
                                            className={getInputClass(clue.id, 'word')}
                                        />
                                        </div>
                                        <div className="input-group">
                                            <label>Coord:</label>
                                        <input
                                            type="text"
                                            value={answers[clue.id].coord}
                                            onChange={(e) => handleInputChange(clue.id, 'coord', e.target.value)}
                                            placeholder="(x,y)"
                                            className={getInputClass(clue.id, 'coord')}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CrosswordPuzzle;
