import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const WishlistItem = ({ item, onAddToCart, onRemove }) => {
  return (
    <div className="border rounded-md p-4 flex flex-col items-center">
      <img src={item.image} alt={item.title} className="w-40 h-40 object-cover mb-4" />
      <h3 className="text-center font-semibold mb-2">{item.title}</h3>
      <p className="text-red-600 font-bold mb-2">${item.price}</p>
      <button
        onClick={() => onAddToCart(item)}
        className="bg-black text-white py-2 px-4 rounded mb-4 w-full hover:bg-gray-800"
      >
        Add To Cart
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="text-gray-500 hover:text-red-600"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default WishlistItem;
