import React from 'react';
import Header from '../../src/components/Layout/Header';
import Footer from '../../src/components/Layout/Footer';
import ProductGallery from '../../src/components/Product/ProductGallery';
import ProductDetails from '../../src/components/Product/ProductDetails';
import RelatedProducts from '../../src/components/Product/RelatedProducts';

const ProductPage = ({ product, relatedProducts }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="flex space-x-8">
          <ProductGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
        <div className="mt-12">
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

// Fetch product data for the product page
// Assuming you're using getStaticProps or getServerSideProps for data fetching
