import React from 'react';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';
import LoginForm from '../src/components/Forms/LoginForm';

const Login = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
