import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        const arrayOfUsers = res.data
        this.setState({ arrayOfUsers })
      })
  }

  render() {
    return (
      <div class='App'>
        <header class='Header'>
          <ol>
            {this.state.arrayOfUsers.map((user, index) => {
              return(
              <li>{user.firstname}</li>,
              <li>{user.lastname}</li>,
              <li>{user.thumbnail}</li>
                )
            })}
          </ol>
        </header>
      </div>
    )
  };
}

  export default App;
