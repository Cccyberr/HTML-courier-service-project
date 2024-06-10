import React from 'react';
import './App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
