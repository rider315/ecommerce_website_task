import React, { useState } from 'react';

const CouponCode = ({ onApplyCoupon }) => {
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {
    onApplyCoupon(coupon);
    setCoupon("");
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="border rounded-md px-4 py-2"
      />
      <button onClick={applyCoupon} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponCode;
