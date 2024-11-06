import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <img src={selectedImage} alt="Selected" className="w-full h-auto" />
      </div>
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-red-600"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
