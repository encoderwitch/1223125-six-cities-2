import React from 'react';
import PropTypes from 'prop-types';

import CardOffer from './CardOffer';

class ListOffers extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };
  }

  render() {
    const {cards} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content" >
        {cards.map((card) =>
          <CardOffer
            key={card.id}
            title={card.title}
            price={card.price}
            type={card.type}
            premium={card.premium}
            img={card.img}
            rating={card.rating}
            onMouseHover={() => {
              this.setState({
                activeCard: card,
              });
            }}
          />
        )};
      </div>
    );
  }
}

ListOffers.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }))
};

export default ListOffers;