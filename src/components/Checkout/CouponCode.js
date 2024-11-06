import React, { useState } from 'react';

const CouponCode = () => {
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {
    console.log("Coupon applied:", coupon);
    // Add logic to apply the coupon here
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-4">
      <input
        type="text"
        placeholder="Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mb-4"
      />
      <button
        onClick={applyCoupon}
        className="bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700"
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponCode;
