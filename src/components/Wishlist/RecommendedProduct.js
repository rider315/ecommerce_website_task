import React from 'react';

const RecommendedProduct = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-md p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-40 h-40 object-cover mb-4" />
      <h3 className="text-center font-semibold mb-2">{product.title}</h3>
      <p className="text-red-600 font-bold mb-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default RecommendedProduct;
