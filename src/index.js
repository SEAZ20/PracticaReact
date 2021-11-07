import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const user={
  firstName: 'Silvio',
  lastName:'Alcivar',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}
function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user) {
  if (user) {
    return ( 
    <div>
      <h1>Hello, {getName(user)}!</h1>;
      <img src={user.avatar}/>
    </div>)
   
  }
  return <h1>Hello, Stranger.</h1>;
}
const name= "Silvio "

const element= <div>{getGreeting(user)}</div>
const container= document.getElementById('root');
ReactDOM.render(
element,container
);

