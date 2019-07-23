import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './NasaPictures.css';

function NasaPictures() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        ' https://api.nasa.gov/planetary/apod?api_key=NcAuRZ6T19qUGwI5ckEc1VpmEybaJwbvdrsdXcp1&date=2019-05-15'
      )
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
      <div className='image'>{loading ? <Loader /> : <img src={photos.url} alt='pic' />}</div>
      <div className='description'>
        <Modal explanation={photos.explanation} />
      </div>
    </div>
  );
}

export default NasaPictures;
