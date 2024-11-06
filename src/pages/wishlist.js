import React, { useState } from 'react';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';
import WishlistItem from '../src/components/Wishlist/WishlistItem';
import RecommendedProduct from '../src/components/Wishlist/RecommendedProduct';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, title: "Gucci duffle bag", price: 960, image: "/path/to/image1.jpg" },
    { id: 2, title: "RGB liquid CPU Cooler", price: 160, image: "/path/to/image2.jpg" },
    { id: 3, title: "GP11 Shooter USB Gamepad", price: 550, image: "/path/to/image3.jpg" },
    { id: 4, title: "Quilted Satin Jacket", price: 750, image: "/path/to/image4.jpg" },
  ]);

  const recommendedProducts = [
    { id: 5, title: "ASUS FHD Gaming Laptop", price: 960, image: "/path/to/image5.jpg" },
    { id: 6, title: "IPS LCD Gaming Monitor", price: 1100, image: "/path/to/image6.jpg" },
    { id: 7, title: "HAVIT HV-G92 Gamepad", price: 560, image: "/path/to/image7.jpg" },
    { id: 8, title: "AK-900 Wired Keyboard", price: 200, image: "/path/to/image8.jpg" },
  ];

  const handleAddToCart = (item) => {
    console.log("Add to cart:", item);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const handleMoveAllToBag = () => {
    wishlistItems.forEach(handleAddToCart);
    setWishlistItems([]);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">Wishlist ({wishlistItems.length})</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              onRemove={handleRemoveFromWishlist}
            />
          ))}
        </div>

        <button
          onClick={handleMoveAllToBag}
          className="bg-red-600 text-white py-2 px-4 rounded mb-12 hover:bg-red-700"
        >
          Move All To Bag
        </button>

        <h2 className="text-xl font-semibold mb-4">Just For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <RecommendedProduct
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
