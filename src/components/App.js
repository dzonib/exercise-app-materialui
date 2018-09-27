import React, { Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
