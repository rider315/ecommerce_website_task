import React, { useState } from 'react';
import Header from '../../src/components/Layout/Header';
import Footer from '../../src/components/Layout/Footer';
import CartItem from '../../src/components/Cart/CartItem';
import CouponCode from '../../src/components/Cart/CouponCode';
import CartTotal from '../../src/components/Cart/CartTotal';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "LCD Monitor", price: 650, quantity: 1, image: "/path/to/lcd.jpg" },
    { id: 2, title: "H1 Gamepad", price: 550, quantity: 2, image: "/path/to/gamepad.jpg" },
  ]);

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Number(quantity) } : item))
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (coupon) => {
    console.log("Coupon applied:", coupon);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = "Free";
  const total = subtotal;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-6">Cart</h1>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
              />
            ))}
          </tbody>
        </table>

        <button className="bg-gray-700 text-white py-2 px-4 rounded mb-4 hover:bg-gray-800">
          Return To Shop
        </button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded mb-4 ml-4 hover:bg-gray-800">
          Update Cart
        </button>

        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <CouponCode onApplyCoupon={handleApplyCoupon} />
          <CartTotal subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
