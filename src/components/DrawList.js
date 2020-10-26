import React from 'react';
import DrawItem from './DrawItem';

const DrawList = ({ draws, onDrawSelect }) => {
  const renderedList = draws.map((draw) => {
    return <DrawItem draw={draw} onDrawSelect={onDrawSelect} />;
  });

  return (
    <div
      className="rendered-list"
      style={{ position: 'absolute', right: '0px' }}
    >
      {renderedList}
    </div>
  );
};

export default DrawList;
