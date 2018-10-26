import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";
import 'typeface-roboto';
import ReactTable from "react-table";
import 'react-table/react-table.css';


const Btn = styled.button`
    background: #ffffff;
    border: none;
    display: inline-block;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  display: inline-block;
  // color: ${props => props.inputColor || "palevioletred"};
  color: #333;
  border: none;
  border-radius: 30px;
  padding: 10px;
  outline: none;
  font-size: 1rem;
  padding-left: 20px;
  padding-right: 20px;
  height: 20px;
  width: 30%;
`;

const API_Key = 'AIzaSyB3iM1KV1Jk_2-iPNXiflbIehCRaxmaBBY';

var results = {}; 
var displayResults = [];
const columns = [{
  show: false,
  accessor: 'link'
}, {
  Header: 'Thumbnail',
  accessor: 'thumbnail',
  sortable: false,
  filterable: false,
  Cell: ({ row, original }) => (
    <a href={original.link} target="_blank"><img src={original.thumbnail}/></a>
  )

}, {
  Header: 'Title',
  accessor: 'title',
  Cell: ({ row, original }) => (
    <a href={original.link} target="_blank">{original.title}</a>
  )
}, {
  Header: 'Channel',
  accessor: 'channelTitle'
}, {
  Header: 'Published At',
  accessor: 'publishedAt'
}]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      res: [],
      disp: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(event){
    if(event.which === 13)
      this.getResults();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  displayTable(){
    this.setState({disp: true});
  }

  getResults(){
    const numberOfResults = 20; //change this to add more results to the page
    const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_Key}&maxResults=${numberOfResults}&part=snippet&q=${this.state.value}`;
    // console.log(this.state.value);
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        results = responseJson.items;
        console.log(results);
        displayResults = [];
        for(var i = 0; i<20; i++){
          displayResults.push({
            title: results[i].snippet.title,
            thumbnail: results[i].snippet.thumbnails.default.url,
            channelTitle: results[i].snippet.channelTitle,
            publishedAt: results[i].snippet.publishedAt,
            link: `https://www.youtube.com/watch?v=`+ results[i].id.videoId
          });
        }
        this.displayTable();
        console.log(displayResults);
        this.setState({res: displayResults});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <div style={{...({ display: 'inline-block', width: '60%', marginTop: '50px' })}}>
          <Input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
          <Btn onClick={() => this.getResults()}>
            Search
          </Btn>
          </div>
      <div
      style = {{...({ display: `${this.state.disp}`,transition: '1s',width: '80%', margin: 'auto', marginTop: '30px', borderRadius: '10px',overflow: 'hidden', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)' })}}
      className = {this.state.disp?'fadeIn':'fadeOut'}
      >
          <ReactTable
            data={this.state.res}
            columns={columns}
            defaultPageSize={10}
            style={{...({ marginBottom: '50px' })}}
            pageSizeOptions= {[5, 10, 20]}
          />
        </div>
          
        </header>
      </div>
    );
  }
}

export default App;
