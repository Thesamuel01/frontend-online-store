import React from 'react';
import { Link } from 'react-router-dom';

class BntCarrinho extends React.Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        Carinho
      </Link>
    );
  }
}

export default BntCarrinho;
