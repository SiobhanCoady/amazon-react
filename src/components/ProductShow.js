import React from 'react';
import { getProduct } from '../utilities/requests';
import ReviewsList from './ReviewsList';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    }

    this._handleBackClick = this._handleBackClick.bind(this);
  }

  _handleBackClick(event) {
    event.preventDefault();
    if (typeof this.props.onBackClick === 'function') {
      this.props.onBackClick();
    }
  }

  componentDidMount() {
    getProduct(this.props.id)
      .then((product) => {
        this.setState({ product: product })
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="ProductShow">
        <a href onClick={this._handleBackClick}>Back</a>
        <h2>{product.title} - ${product.price}</h2>
        <p>{product.description}</p>
        <ReviewsList reviews={product.reviews} />
      </div>
    )
  }
}

export default ProductShow;
