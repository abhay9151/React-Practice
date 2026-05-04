import React from 'react';
import lovepic from '../assets/hero.png';
import './card.css';

const Card = (props) => {
  return (
    <div className='container' style={props.style}>
      <p id='user-name'>{props.name}</p>
    <img id='user-img' src={lovepic} alt='love' />
    <p id='user-desc'>{props.desc}</p>
    </div>
  );
};

export default Card;