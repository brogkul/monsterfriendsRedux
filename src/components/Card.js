import React from 'react';

const Card = ({name, nickname, email, id}) => {
  return (
    <div className = 'tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='mosters' src={`https://robohash.org/set_set2/${id}?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <h3>{nickname}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;