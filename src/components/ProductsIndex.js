import React from 'react';
import ProductSummary from './ProductSummary';
import { getProducts } from '../utilities/requests';

class ProductsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    getProducts()
      .then((products) => {
        this.setState({
          products: products
        });
      });
  }

  _renderProducts() {
    return this.state.products.map((product) => {
      return <ProductSummary
        onClick={this.props.onProductClick}
        key={product.id}
        {...product} />
    });
  }

  render() {
    return (
      <div className="ProductsIndex">
        <h2>Products</h2>
        { this._renderProducts() }
      </div>
    )
  }
}

export default ProductsIndex;
