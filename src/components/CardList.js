import React from 'react';
import Card from './Card';

const CardList = ({monsters}) => {
  return (
    <div>
      {
        monsters.map((user, i) => {
          return (
            <Card 
              key = {i}
              id = {monsters[i].id}
              name = {monsters[i].name}
              nickname = {monsters[i].username}
              email = {monsters[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;