import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{backgroundImage: 'url(./landing.jpg)'}}>
          <div className="header-content">
            <div className="header-content-inner" style={{paddingTop: '45vh', color: '#fff'}}>
              <h1>Melvyn Sng Guo Jie</h1>
              <h2>Hello World!</h2>
              <h3>Technopreneur | Student of Leadership | Software Engineer</h3>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
