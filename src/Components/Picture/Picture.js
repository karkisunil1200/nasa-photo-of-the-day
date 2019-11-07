import React from 'react';

import './PictureStyle.css';

const Picture = props => {
  return (
    <div>
      <h2 className='title'>{props.title}</h2>
      <h4>Date: {props.date}</h4>
      <div className='Pic'>
        <img src={props.picture} className='image' />
      </div>
      <p className='para'>{props.explanation}</p>
    </div>
  );
};

export default Picture;
