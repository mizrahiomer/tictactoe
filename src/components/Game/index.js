import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Pulse from 'react-reveal/Pulse';
import ReactTooltip from 'react-tooltip';
import Square from '../Square';
import axios from '../axios-instance';
import './index.css';
import { Icon } from 'semantic-ui-react';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isDraw, setIsDraw] = useState(false);
  const [userSymbol, setUserSymbol] = useState(null);
  const [winningLane, setwinningLane] = useState(null);
  const [results, setResults] = useState([0, 0, 0]);
  const nextSymbol = isXNext ? 'X' : 'O';
  useEffect(() => {
    fetchResults();
  });
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
    setIsDraw(false);
    if (isBoardFull(squares) || isWinner) {
      setUserSymbol(null);
    }
  };

  const getStatus = () => {
    if (isWinner) {
      if (!winningLane) {
        setwinningLane(isWinner.winningLane);
        setResult(isWinner.winner);
      }
      return (
        <Tada>
          <p>
            <Icon className='winner yellow' /> The winner is {isWinner.winner}
          </p>
        </Tada>
      );
    } else if (isBoardFull(squares)) {
      if (!isDraw) {
        setResult('draw');
      }
      return (
        <Pulse>
          <p> Its a Draw!</p>
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
  const fetchResults = async () => {
    try {
      const res = await axios.get('.json');
      setResults({ X: res.data.X, O: res.data.O, draw: res.data.draw });
    } catch (e) {
      console.log(e);
    }
  };
  const setResult = async result => {
    if (result === 'draw') {
      setIsDraw(true);
    }
    try {
      const res = await axios.get(`/${result}.json`);
      return await axios.put(`/${result}.json`, res.data + 1);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteAllResults = async () => {
    try {
      const x = axios.put('/X.json', 0);
      const o = axios.put('/O.json', 0);
      const draw = axios.put('/draw.json', 0);
      await Promise.all([x, o, draw]);
    } catch (e) {
      console.log(e);
    }
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
        <Fade left>
          <div className='title'>
            X: {results.X}| O: {results.O}| Draw: {results.draw}{' '}
            <Icon
              onClick={() => deleteAllResults()}
              className={'trash'}
              data-tip='Delete results history'
            ></Icon>
            <ReactTooltip
              place='right'
              type='light'
              afterShow={() => {
                setTimeout(ReactTooltip.hide, 8000);
              }}
            />
          </div>
        </Fade>
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
            <button onClick={() => resetGame()} className='btn'>
              {isBoardFull(squares) || isWinner ? 'Play again' : 'Reset game'}
            </button>
          )}
        </div>
      </Fade>
    </div>
  );
};
export default Game;
