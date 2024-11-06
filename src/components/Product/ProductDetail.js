import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, quantity + value));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">{product.title}</h2>
      <p className="text-lg text-gray-500 mb-2">({product.reviews} Reviews)</p>
      <p className="text-3xl font-bold text-red-600 mb-4">${product.price}</p>
      <p className="text-sm text-green-600 mb-4">{product.stockStatus}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Color Options */}
      <div className="mb-4">
        <h3 className="font-semibold">Colours:</h3>
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color, index) => (
            <button key={index} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full border"></button>
          ))}
        </div>
      </div>

      {/* Size Options */}
      <div className="mb-4">
        <h3 className="font-semibold">Size:</h3>
        <div className="flex space-x-2 mt-2">
          {product.sizes.map((size, index) => (
            <button key={index} className="border px-3 py-1 rounded hover:bg-gray-100">{size}</button>
          ))}
        </div>
      </div>

      {/* Quantity Selector and Buy Button */}
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 border rounded">-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 border rounded">+</button>
      </div>

      <button className="w-full bg-red-600 text-white py-2 rounded-md mb-4">Buy Now</button>
      <button className="w-full border py-2 rounded-md">Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
