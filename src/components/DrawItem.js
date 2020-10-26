import React from 'react';
import './DrawItem.css';

const DrawItem = ({ draw, onDrawSelect }) => {
  return (
    <div onClick={() => onDrawSelect(draw)}>
      <div className="draw-container">
        <ul>
          <h4>
            <div className="number">Game ID: {draw.drawNumber}</div>
            <div className="date">Draw Date: {draw.drawDate}</div>
          </h4>
        </ul>
      </div>
    </div>
  );
};

export default DrawItem;
