import React, { useState } from 'react';
import './index.css';

const Sqaure = ({ onClick, value, hoverValue, winningLane, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isWinner = winningLane
    ? winningLane.includes(index)
      ? ' highlight'
      : ''
    : '';
  const isClicked = value !== null ? (value === 'X' ? 'x' : 'o') : '';
  const isHover =
    isHovered && value == null
      ? hoverValue === 'X'
        ? 'x-placeholder'
        : 'o-placeholder'
      : '';
  return (
    <div
      className={isHover + isClicked + isWinner + ' square'}
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {value}
      {isHovered && !value && !winningLane ? hoverValue : null}
    </div>
  );
};
export default Sqaure;
