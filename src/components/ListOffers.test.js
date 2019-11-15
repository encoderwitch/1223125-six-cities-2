import React from 'react';
import renderer from 'react-test-renderer';
import ListOffers from './ListOffers';

import {cardOfferMock} from '../mocks/cardOfferMock';

it(`ListOffers correctly renders`, () => {
  const tree = renderer
    .create(<ListOffers
      cards={cardOfferMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
