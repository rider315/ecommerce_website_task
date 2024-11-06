import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Related Items</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {products.map((product) => (
          <div key={product.id} className="w-40 flex-shrink-0">
            <img src={product.image} alt={product.title} className="w-full h-auto mb-2" />
            <p className="text-sm font-semibold">{product.title}</p>
            <p className="text-red-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
