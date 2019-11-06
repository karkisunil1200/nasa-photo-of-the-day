import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Picture from '../Picture/Picture';

const PicList = () => {
  const [pictures, setPictures] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=yELbZjDgdiqPsQDgGMjOHlWEXEVyUGS43m5cAfBh')
      .then(response => {
        console.log(response);
        setPictures(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='PicList'>
      <h1>Hello World</h1>
      <Picture picture={pictures.url} explanation={pictures.explanation} />
    </div>
  );
};

export default PicList;
