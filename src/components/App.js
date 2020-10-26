import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import DrawList from './DrawList';
import DrawDetail from './DrawDetail';
import './App.css';

const date = new Date();

const api = axios.create({
  baseURL: `https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=2020-10-24&endDate=${date.toISOString().substr(0, 10)}`,
});

class App extends React.Component {
  state = {
    draws: [
      {
        drawNumber: null,
        bonus: null,
        drawDate: null,
        winningNumbers: [],
      },
    ],
    selectedDraw: null,
  };

  constructor() {
    super();
    api.get('/').then((res) => {
      this.setState({ draws: res.data.draws });
    });
  }

  onDrawSelect = (draw) => {
    this.setState({ selectedDraw: draw });
  };

  onTermSubmit = (term) => {
    api.get('/').then((res) => {
      res.data.draws.map((draw) => {
        if (term == draw.drawNumber) {
          this.setState({ selectedDraw: draw });
        }
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <DrawDetail draw={this.state.selectedDraw} />
        <DrawList draws={this.state.draws} onDrawSelect={this.onDrawSelect} />
      </div>
    );
  }
}

export default App;
