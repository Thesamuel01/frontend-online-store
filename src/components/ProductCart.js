import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  constructor() {
    super();
    this.state = { amount: 1, total: 0 };
  }

  componentDidMount() {
    const { product: { price } } = this.props;
    this.setState({ total: price });
  }

  lessItems = (prevAmount, price, prevTotal) => prevAmount > 0 && this.setState({
    amount: prevAmount - 1,
    total: prevTotal - price,
  });

  moreItems = (prevAmount, price, prevTotal) => this.setState({
    amount: prevAmount + 1,
    total: prevTotal + price,
  });

  render() {
    const { product, handleClick } = this.props;
    const { amount, total } = this.state;
    return (
      <li key={ product.id }>
        <button type="button" onClick={ () => handleClick(product) }>
          Remover
        </button>
        <img
          src={ product.thumbnail }
          alt={ `Imagem do produto ${product.title}` }
        />
        <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
        <span>{product.price}</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => this.lessItems(amount, product.price, total) }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">
          Quantidade:
          {amount}
        </span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.moreItems(amount, product.price, total) }
        >
          +
        </button>
        <span>
          Total:
          {total}
        </span>
      </li>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductCart;