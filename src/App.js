import React from 'react';

import GlobalStyles from './styles/global';
import ListCars from './pages/ListCars';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />
      <ListCars />
    </>
  );
}

export default App;
