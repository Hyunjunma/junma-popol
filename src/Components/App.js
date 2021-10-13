import React, { Component } from 'react';
import Router from './Router';
import Style from "./style"

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <Style />
      </>
    )
  }
}

export default App;

