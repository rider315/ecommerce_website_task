import React from 'react';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';
import BillingDetailsForm from '../src/components/Checkout/BillingDetailsForm';
import OrderSummary from '../src/components/Checkout/OrderSummary';
import PaymentOptions from '../src/components/Checkout/PaymentOptions';
import CouponCode from '../src/components/Checkout/CouponCode';

const Checkout = () => {
  const cartItems = [
    { id: 1, title: "LCD Monitor", price: 650 },
    { id: 2, title: "H1 Gamepad", price: 1100 },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <BillingDetailsForm />

        <div className="space-y-4">
          <OrderSummary items={cartItems} />
          <PaymentOptions />
          <CouponCode />
          
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 mt-4">
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
