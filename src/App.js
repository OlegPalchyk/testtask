import React, { Component } from 'react';
import './App.css';
import Wrapper from './hoc/wrapper';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Main/>
      </Wrapper>
    );
  }
}

export default App;
