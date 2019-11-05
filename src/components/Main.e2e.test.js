import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import PlaceCard from './PlaceCard';

Enzyme.configure({adapter: new Adaptor()});
const item = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

it(`renders correctly`, () => {
  const mockhandleClick = jest.fn();
  const openPlace = shallow(
      <PlaceCard title={item[0]} key={item} handleClick={mockhandleClick}/>
  );
  const startClickOnTitle = openPlace.find(`[className="place-card__name"]`).simulate(`click`);
  expect(startClickOnTitle).not.toBe(null);
  expect(mockhandleClick).toHaveBeenCalledTimes(1);
  // const startClickOnTitle1 = openPlace.find(`.place-card__name`).simulate(`click`); - works the same as openPlace.find(`[className="place-card__name"]`).simulate(`click`);
  // expect(startClickOnTitle1).not.toBe(null);
});
