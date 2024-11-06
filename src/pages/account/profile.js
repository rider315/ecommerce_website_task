import React from 'react';
import Header from '../../src/components/Layout/Header';
import Footer from '../../src/components/Layout/Footer';
import AccountSidebar from '../../src/components/Account/AccountSidebar';
import EditProfileForm from '../../src/components/Account/EditProfileForm';

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 flex space-x-8">
        <AccountSidebar />
        <EditProfileForm />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
