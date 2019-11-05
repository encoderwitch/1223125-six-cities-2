import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

let list = [`A`, `B`, `C`];

it(`renders correctly`, () => {
  const tree = renderer
      .create(<Main
        list ={list}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
