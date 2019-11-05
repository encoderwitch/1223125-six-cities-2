import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

let list = [`A`, `B`, `C`];

it(`renders correctly`, () => {
  const tree = renderer
      .create(<App
        list ={list}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
