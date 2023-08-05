import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Frontend.</h2>
          <p>With automatic Helm package creation and uploading it to the gh-pages Helm repo at: https://github.com/tawfiqh58/ms-docker-k8s-cicd-app/ page</p>
        </div>
      </div>
    );
  }
}

export default App;
