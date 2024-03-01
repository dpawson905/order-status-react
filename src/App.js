import React, { useEffect } from 'react';
import ReactGA from 'react-ga-neo';
import MainNav from './Components/Navbar';
import OrderSearch from './Components/OrderSearch';
import './App.scss';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-Y4ZVQ8PES5');
  }, []);
  return (
    <>
      <MainNav />
      <OrderSearch />
    </>
  );
}

export default App;
