import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-2 flex items-center space-x-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
        <span>{item.title}</span>
      </td>
      <td className="py-4 px-2">${item.price}</td>
      <td className="py-4 px-2">
        <select
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
          className="border rounded-md px-2 py-1"
        >
          {[...Array(10).keys()].map((n) => (
            <option key={n} value={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>
      </td>
      <td className="py-4 px-2">${item.price * item.quantity}</td>
      <td className="py-4 px-2 text-center">
        <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-600">
          <FiTrash2 size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
