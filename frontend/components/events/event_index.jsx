import React from 'react';

const Events = ({ logout }) => {
  return (
    <div>
      <button onClick={logout}></button>
      <h1>youre logged in</h1>
    </div>
  );
};

export default Events;
