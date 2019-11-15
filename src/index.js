import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import offers from './mocks/offers';

// const init = () => {
//   const list = [
//     `Beautiful & luxurious apartment at great location`,
//     `Wood and stone place`,
//     `Canal View Prinsengracht`,
//     `Nice, cozy, warm big bed apartment`
//   ];

//   ReactDOM.render(<App list={list}/>, document.getElementById(`root`));
// };

// init();

ReactDOM.render(<App offers={offers}/>, document.getElementById(`root`));
