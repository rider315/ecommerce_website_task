import React from 'react';

const CartTotal = ({ subtotal, shipping, total }) => {
  return (
    <div className="border rounded-md p-4 w-full md:w-1/3 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>{shipping}</span>
      </div>
      <hr />
      <div className="flex justify-between font-bold text-lg mt-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button className="w-full bg-red-600 text-white py-2 mt-4 rounded hover:bg-red-700">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
