import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
