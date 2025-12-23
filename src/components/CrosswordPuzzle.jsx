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
        { id: 'clue1', text: 'I\'m found in the ocean and can "clap" without hands. I sit at the starting corner of the whole grid.', answer: '🦭', correctCoord: '(1,1)' },
        { id: 'clue2', text: 'People count me to fall asleep; I\'m fluffy like a cloud. I share the same "spine" as the ocean clapper and sit immediately beneath it.', answer: '🐑', correctCoord: '(2,1)' },
        { id: 'clue3', text: 'I purr, I nap, and I land on my feet. I touch the sleep-counter by a side, and I am the only animal on my level.', answer: '🐱', correctCoord: '(2,2)' },
        { id: 'clue4', text: 'A buttery, crescent-shaped breakfast pastry. I remain on the same spine as the first answer, but I\'m two steps below it.', answer: '🥐', correctCoord: '(3,1)' },
        { id: 'clue5', text: 'I\'m the symbol of love; I beat inside you. I sit flush against the pastry, forming the start of a three-word run.', answer: '❤️', correctCoord: '(3,2)' },
        { id: 'clue6', text: 'I bark, I fetch, and I\'m loyal. I complete that three-word run by sitting directly against the beating symbol.', answer: '🐶', correctCoord: '(3,3)' },
        { id: 'clue7', text: 'Lights off, screen on, time for a story. I begin the only level where four consecutive cells are filled.', answer: '🎬', correctCoord: '(4,1)' },
        { id: 'clue8', text: 'Oink oink, pink, round, and loves snacks. On that four-filled level, I stand closest to the story.', answer: '🐷', correctCoord: '(4,2)' },
        { id: 'clue9', text: 'A fancy knot you wear at your collar or tie on a gift. On the same four-filled level, I\'m farther from the story than the snack-lover is, but closer than the bright idea is.', answer: '🎀', correctCoord: '(4,3)' },
        { id: 'clue10', text: 'I\'m a light that turns on when you get an idea. On that four-filled level, nothing sits beyond me.', answer: '💡', correctCoord: '(4,4)' },
        { id: 'clue11', text: 'I fix a tear with thread; I\'m a tiny repeated loop. I live on the same spine as the story, immediately beneath it.', answer: '🧵', correctCoord: '(5,1)' },
        { id: 'clue12', text: 'Sweet, colorful, small, often wrapped. I sit directly against the thread-fixer, and I am the only non-tool object sharing that level with it.', answer: '🍭', correctCoord: '(5,2)' }
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
