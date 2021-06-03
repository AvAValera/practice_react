import React from 'react';

import './App.css';
import Header from './Header';
import Menu from './Menu';
import Content from './modules/Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}


export default App;
