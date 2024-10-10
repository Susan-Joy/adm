import React from 'react';

const ProductGrid = () => {
  // Hardcoded products for display. You can replace this with real data from an API later.
  const products = [
    { name: 'T-shirt for Men', price: 19.00 },
    { name: 'Travel Bag Jeans', price: 37.00 },
    { name: 'Sofa for Living Room', price: 275.00 },
    // add more products as needed
  ];

  return (
    <div className="grid-container">
      <h2 className="grid-title">Products Grid</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-placeholder"></div> {/* Image placeholder */}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
