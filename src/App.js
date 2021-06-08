import React from 'react';
import './App.css';
import Header from './modules/Header/Header';
import Content from './modules/Content/Content';
import Footer from './modules/Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Content contactList={props.contactList} contactMessages={props.contactMessages} />
      <Footer />
    </div>
  );
}


export default App;
