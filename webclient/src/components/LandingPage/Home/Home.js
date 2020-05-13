import React from 'react';
import BannerCarusel from '../Carusel/BannerCarousel'
import Store from '../../../views/Store/index'
import Footer from '../Footer/index';

const Home = () => {
  return (
    <div>
      <BannerCarusel />
      <Store />
      <Footer/>
    </div>
  );
};

export default Home;