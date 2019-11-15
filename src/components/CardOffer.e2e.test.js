import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardOffer from './CardOffer';
import {cardOfferMock} from '../mocks/cardOfferMock';

Enzyme.configure({adapter: new Adapter()});

const mock = cardOfferMock[0];

describe(`Card offer`, () => {
  it(`when hover, the correct data gets into the handler`, () => {
    const hoverHandler = jest.fn();
    const card = shallow(<CardOffer
      title={mock.title}
      img={mock.img}
      type={mock.type}
      premium={mock.premium}
      price={mock.price}
      rating={mock.rating}
      onMouseHover={hoverHandler}
    />);

    const article = card.find(`article`);
    article.simulate(`mouseenter`, mock);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
    expect(hoverHandler.mock.calls[0][0]).toBe(mock);
  });
});
