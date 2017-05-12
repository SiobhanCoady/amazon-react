import React from 'react';

function ProductSummary(props) {
  const handleClick = event => {
    event.preventDefault();
    if (typeof props.onClick === 'function') {
      props.onClick(props.id);
    }
  }

  return (
    <div
      style={{marginBottom: '10px'}}
      className="ProductSummary">
      <a onClick={handleClick} href>{props.title}</a>
    </div>
  );
}

export default ProductSummary;
