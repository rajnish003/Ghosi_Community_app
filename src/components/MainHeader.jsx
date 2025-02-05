import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer'; // Import Footer Component

const MainHeader = () => {
  return (
    <div>
      <Header />
      <Navbar />
      
      <Outlet></Outlet>
    </div>
  );
};

export default MainHeader;
