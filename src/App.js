import React, { Component } from 'react';
import ProductsIndex from './components/ProductsIndex';
import ProductShow from './components/ProductShow';
import ProductNew from './components/ProductNew';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: 'productIndex'
    }

    this.goToProduct = this.goToProduct.bind(this);
    this.goToProducts = this.goToProducts.bind(this);
    this.goToProductNew = this.goToProductNew.bind(this);
  }

  goToProduct(id) {
    this.setState({
      to: `productShow#${id}`
    });
  }

  goToProducts() {
    this.setState({
      to: `productIndex`
    })
  }

  goToProductNew() {
    this.setState({
      to: `productNew`
    })
  }

  _renderPath() {
    const [path, id] = this.state.to.split('#');
    return ({
      productIndex: (
        <ProductsIndex
          onProductClick={this.goToProduct} />
      ),
      productShow: (
        <ProductShow
          onBackClick={this.goToProducts}
          id={id} />
      ),
      productNew: (
        <ProductNew
          onBack={this.goToProducts} />
      )
    })[path];
  }

  render() {
    return (
      <div className="App">
        <h1>Amazon</h1>
        <NavBar links={{
          'New Product': this.goToProductNew,
          'Products': this.goToProducts
        }} />
        { this._renderPath() }
      </div>
    );
  }
}

export default App;
