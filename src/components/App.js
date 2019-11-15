import React from 'react';
import PropTypes from 'prop-types';
import ListOffers from './ListOffers';

const App = ({offers}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <div className="cities__places places">
          <ListOffers cards={offers} />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Main from './Main';

// const App = (props) => {
//   return (
//     <Main list = {props.list}/>
//   );
// };

// App.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.string)
// };
