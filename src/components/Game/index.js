import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Pulse from 'react-reveal/Pulse';
import Square from '../Square';
import './index.css';
import { Button, Icon } from 'semantic-ui-react';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [userSymbol, setUserSymbol] = useState(null);
  const [winningLane, setwinningLane] = useState(null);
  const nextSymbol = isXNext ? 'X' : 'O';
  const calculateWinner = squares => {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], winningLane: [a, b, c] };
      }
    }
    return null;
  };
  const isBoardEmpty = squares => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] !== null) {
        return false;
      }
    }
    return true;
  };
  const isBoardFull = squares => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  };
  const isWinner = calculateWinner(squares);
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setwinningLane(null);
    if (isBoardFull(squares) || isWinner) {
      setUserSymbol(null);
    }
  };

  const getStatus = () => {
    if (isWinner) {
      if (!winningLane) {
        setwinningLane(isWinner.winningLane);
      }
      return (
        <Tada>
          <p>
            <Icon className='winner yellow' /> The winner is {isWinner.winner}
          </p>
        </Tada>
      );
    } else if (isBoardFull(squares)) {
      return (
        <Pulse>
          <p> It`s a Draw!</p>
        </Pulse>
      );
    } else {
      return 'Next player: ' + nextSymbol;
    }
  };
  const selectSquare = i => {
    if (squares[i] !== null || isWinner !== null) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = nextSymbol;
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  return !userSymbol ? (
    <Fade bottom>
      <div className='select-symbol'>
        <p>Choose your player</p>
        <p
          className='symbol x'
          onClick={() => {
            setUserSymbol('X');
            setIsXNext(true);
          }}
        >
          X
        </p>
        <p
          className='symbol o'
          onClick={() => {
            setUserSymbol('O');
            setIsXNext(false);
          }}
        >
          O
        </p>
      </div>
    </Fade>
  ) : (
    <div>
      <Fade top>
        {/* <Fade left>
          <div className='title'> Tic Tac Toe</div>
        </Fade> */}
        <div className='board'>
          {squares.map((_, i) => {
            return (
              <Square
                key={i}
                index={i}
                winningLane={winningLane}
                value={squares[i]}
                hoverValue={isXNext ? 'X' : 'O'}
                onClick={() => {
                  selectSquare(i);
                }}
              />
            );
          })}
        </div>
      </Fade>
      <Fade right>
        <div className='options'>
          <div className='game-info'>{getStatus()}</div>
          {isBoardEmpty(squares) ? null : (
            <Button onClick={() => resetGame()} className='purple big'>
              {isBoardFull(squares) || isWinner ? 'Play again' : 'Reset game'}
            </Button>
          )}
        </div>
      </Fade>
    </div>
  );
};
export default Game;
