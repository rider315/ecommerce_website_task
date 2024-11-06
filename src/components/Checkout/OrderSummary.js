import React from 'react';

const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = "Free";
  const total = subtotal;

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between text-gray-700">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <hr />
      <div className="flex justify-between font-semibold mt-4">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Shipping:</span>
        <span>{shipping}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
