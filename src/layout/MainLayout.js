import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
const MainLayout = ({children}) => {
  return (
    <>  
        <Banner/>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default MainLayout