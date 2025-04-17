import React from 'react';
import { Chess } from 'chess.js';

const Chessboard: React.FC = () => {
    const renderSquares = () => {
        const squares = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const isDark = (row + col) % 2 === 1;
                squares.push(
                    <div
                        key={`${row}-${col}`}
                        className={`square ${isDark ? 'dark' : 'light'}`}
                    />
                );
            }
        }
        return squares;
    };

    return <div className="chessboard">{renderSquares()}</div>;
};

export default Chessboard;