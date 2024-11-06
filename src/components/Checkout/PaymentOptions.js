import React, { useState } from 'react';

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("cash");

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
      <label className="flex items-center mb-4">
        <input
          type="radio"
          name="payment"
          value="bank"
          checked={selectedPayment === "bank"}
          onChange={() => setSelectedPayment("bank")}
          className="form-radio mr-2"
        />
        <span>Bank</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="radio"
          name="payment"
          value="cash"
          checked={selectedPayment === "cash"}
          onChange={() => setSelectedPayment("cash")}
          className="form-radio mr-2"
        />
        <span>Cash on delivery</span>
      </label>
    </div>
  );
};

export default PaymentOptions;
