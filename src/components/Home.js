import React from 'react';
import AddToFavorites from './AddToFavorites';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';
import WeatherData from './WeatherData';

const Home = () => {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <WeatherData />
      <Footer>
        <AddToFavorites />
      </Footer>
    </>
  );
};

export default Home;
