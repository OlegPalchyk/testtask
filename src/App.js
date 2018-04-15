import React, { Component } from 'react';
import './App.css';
import Wrapper from './hoc/wrapper';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Provider} from "react-redux";
import configureStore from "./store/store";
let store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider  store={store}>
            <Wrapper>
                <Header/>
                <Main/>
            </Wrapper>
        </Provider>
    );
  }
}

export default App;
