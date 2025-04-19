import React from "react";
import { Chess } from "chess.js";
import { pieces } from "./pieces";

type Props = {
  fen: string;
};

type puzzle = {
  fen: string;
  moves: string;
  rating: number;
  ratingDeviation: number;
  popularity: number;
  nbPlays: number;
  themes: string;
  gameUrl: string;
  openingTags: string;
};

const Chessboard: React.FC<Props> = ({ fen }) => {
  const chess = new Chess(fen);
  console.log(chess.ascii());

  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isDark = (row + col) % 2 === 1;
        squares.push(
          <div
            // could use the actual square name ex: a4, b2
            // maybe need file and rank arrays
            key={`${row}-${col}`}
            className="flex items-center justify-center"
            style={{
              backgroundColor: isDark ? "#769656" : "#eeeed2",
              width: "12.5%", // 1/8th of the board width
              height: "12.5%", // 1/8th of the board height
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="black"
              style={{
                width: "80%",
                height: "80%",
              }}
            >
              <path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400l160 0L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32l-8.5 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4z" />
            </svg>
          </div>
        );
      }
    }
    return squares;
  };

  return (
    <div
      className="flex flex-wrap"
      style={{
        width: "512px", // Set the board width
        height: "512px", // Set the board height
      }}
    >
      {renderSquares()}
    </div>
  );
};

export default Chessboard;
