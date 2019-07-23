import React from 'react';
import ReactDOM from 'react-dom';

// import NasaPictures from '../components/NasaPictures/NasaPictures';
// import renderer from 'react-test-renderer';

describe('<NasaPictures />', () => {
  it('should match snapshot', () => {
    act(() => {
      const tree = renderer.create(<NasaPictures />).toJSON();
    });
    expect(tree).toMatchSnapShot();
  });
});
