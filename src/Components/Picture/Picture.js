import React from 'react';

import './PictureStyle.css';

const Picture = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>{props.date}</h5>
      <div className='Pic'>
        <img src={props.picture} className='image' />
      </div>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Picture;
