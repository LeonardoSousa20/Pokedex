import React from 'react';

const Pokemon = ({ details }) => {
  if (details === null) {
    return <div>-</div>;
  }

  return (
    <div className="md:w-80 w-40">
      <div className="flex items-center justify-center">
        <img src={details.sprites.front_default} alt="Pokemon" />
        <div>
          <b className="md:text-lg text-sm">{details.name}</b>
          <span className="md:text-lg text-sm">
            {' '}
            - XP: {details.base_experience}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
