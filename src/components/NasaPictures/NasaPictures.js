import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

function NasaPictures() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(' https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-15')
      .then(res => {
        console.log('this is the data ', res);
        setPhotos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='header'>
      <h1 className='heading'>Nasa Picture Of The Day</h1>
      <h3>{photos.title}</h3>
      {loading ? <Loader /> : <img src={photos.url} alt='pic' />}

      <h3>{photos.explanation}</h3>
    </div>
  );
}

export default NasaPictures;
