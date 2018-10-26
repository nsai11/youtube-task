import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
// import SearchBar from 'material-ui-search-bar'
import 'typeface-roboto';


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
    width: 15%;
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
  // padding: 0.5em;
  margin: 1%;
  display: inline-block;
  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-radius: 30px;
  padding: 10px;
  outline: none;
  height: 20px;
  width: 30%;
`;

const API_Key = 'AIzaSyB3iM1KV1Jk_2-iPNXiflbIehCRaxmaBBY';




const BuySellBox = styled.div`
    padding: 60px 20px;
    border-radius: 2px;
    width: 800px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

var results = {}; 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      results: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getResults(){
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_Key}&maxResults=10&part=snippet&q=${this.state.value}`;
    console.log(this.state.value);
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        results = responseJson.items;
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          <div style={{...({ display: 'inline-block', width: '60%', marginTop: '50px' })}}>
          <Input type="text" value={this.state.value} onChange={this.handleChange}/>
          <Btn onClick={() => this.getResults()}>
            Search
          </Btn>
          {/* <Button variant="contained" color="primary">
            Search
          </Button> */}
          </div>
          {/* <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    /> */}
          
          
        </header>
      </div>
    );
  }
}

export default App;
