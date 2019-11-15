import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

// let list = [`A`, `B`, `C`];

// it(`renders correctly`, () => {
//   const tree = renderer
//       .create(<App
//         list ={list}
//       />)
//       .toJSON();
//   expect(tree).toMatchSnapshot();
// });
import {cardOfferMock} from '../mocks/cardOfferMock';

it(`renders correctly`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);
  const tree = renderer
    .create(<App
      offers={cardOfferMock}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
