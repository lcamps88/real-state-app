import React from 'react';
import Header from './components/Header';
import Howitwork from './components/Howitwork';
import About from './components/About';
import Agent from './components/Agents';
import Properties from './components/Properties'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Howitwork/>
    <About/>
    <Agent/>
    <Properties/>
    <Contact/>
    </div>
  );
}

export default App;
