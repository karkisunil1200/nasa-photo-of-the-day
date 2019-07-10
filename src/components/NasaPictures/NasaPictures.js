import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NasaSinglePictures from '../NasaSinglePictures/NasaSinglePictures';

function NasaPictures() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
      .then(res => {
        console.log('this is the data ', res);
        setPhotos(res.data.url);
      }, [])
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Pictures</h1>
      <img src={photos} />
    </div>
  );
}

export default NasaPictures;
