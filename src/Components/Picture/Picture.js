import React from 'react';

const Picture = props => {
  return (
    <div>
      <h2>This is from picture</h2>
      <img src={props.picture} />
    </div>
  );
};

export default Picture;
