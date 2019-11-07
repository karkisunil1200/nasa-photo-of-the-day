import React from 'react';

// import './PictureStyle.css';
import {Pic, Title, Image, Para} from './PictureStyle';

const Picture = props => {
  return (
    <div>
      <Title>{props.title}</Title>
      <h4>Date: {props.date}</h4>
      <Pic>
        <Image src={props.picture} className='image' />
      </Pic>
      <Para>{props.explanation}</Para>
    </div>
  );
};

export default Picture;
