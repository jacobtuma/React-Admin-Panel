import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardContainer from './dashboard/DashboardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <DashboardContainer/>
      </div>
    );
  }
}

export default App;
