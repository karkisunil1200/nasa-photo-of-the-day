import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Row} from 'reactstrap';
// import PiList from './PiList.css';

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
    <Container>
      <Row>
        <Picture
          picture={pictures.url}
          explanation={pictures.explanation}
          title={pictures.title}
          date={pictures.date}
        />
      </Row>
    </Container>
  );
};

export default PicList;
