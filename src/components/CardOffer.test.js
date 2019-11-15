import React from 'react';
import renderer from 'react-test-renderer';
import CardOffer from './CardOffer';

import {cardOfferMock} from '../mocks/cardOfferMock';

const mock = cardOfferMock[0];

it(`CardOffer correctly renders`, () => {
  const tree = renderer
    .create(<CardOffer
      title={mock.title}
      img={mock.img}
      type={mock.type}
      premium={mock.premium}
      price={mock.price}
      rating={mock.rating}
      onMouseHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
