import React from 'react';
import { postProduct } from '../utilities/requests';

class ProductNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fData = new FormData(event.currentTarget);
    postProduct({
      title: fData.get('title'),
      description: fData.get('description')
    })
      .then(() => {
        this.props.onBack();
      })
  }

  render() {
    return (
      <div className='ProductNew'>
        <h2>New Product</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' />
          </div>

          <div>
            <label htmlFor='description'>Description</label>
            <textarea id='description' name='description' />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default ProductNew;
