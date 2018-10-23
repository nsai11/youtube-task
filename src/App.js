import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Btn = styled.button`
    background: #ffffff;
    border: none;
    display: inline-block;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    // margin: 20px 0;
    color: #4779E7;
    padding: 12px 1px;
    font-size: 1rem;
    font-weight: bold;
    width: 20%;
    border-radius: 30px;
    outline: none;
    max-width: calc(800px / 3);
    cursor: pointer;
    transition: 0.2s;
     &:hover {
        background: #4779E7;
        color: #fff;
        transition: 0.2s;
    }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  display: inline-block;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-radius: 30px;
  padding: 10px;
  outline: none;
  height: 20px;
  width: 30%;
`;


const BuySellBox = styled.div`
    padding: 60px 20px;
    border-radius: 2px;
    width: 800px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          <div style={{...({ display: 'inline-block', width: '60%' })}}>
          <Input type="text"/>
          <Btn>
            Search
          </Btn>
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
