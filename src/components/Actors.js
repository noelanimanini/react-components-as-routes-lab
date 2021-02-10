import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
        <ul>
          {actor.name}
        </ul>)}
    </div>
  );
};

export default Actors;
