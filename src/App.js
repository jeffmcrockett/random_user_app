import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
// import UserCard from './src/UserCard';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfUsers: []
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then(res => {
        const arrayOfUsers = res.data.results
        this.setState({ arrayOfUsers });
        console.log(arrayOfUsers);
      })
  }

  render() {
    return (
      <div class="App">
        <header class="Header">
          <ol>
            {this.state.arrayOfUsers.map((user, index) => {
              return(
              <li key={index}>{user.name.first}</li>
                )
            })}
          </ol>
        </header>
      </div>
    )
  };
}

export default App;
