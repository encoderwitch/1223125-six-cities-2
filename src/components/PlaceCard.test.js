import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './PlaceCard';

let title = `TitleA`;

it(`renders correctly`, () => {
  const tree = renderer
      .create(<PlaceCard
        title ={title}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
