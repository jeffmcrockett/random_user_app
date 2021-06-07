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
        const arrayOfUsers = res.data.results
        this.setState({ arrayOfUsers });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <ol>
            {this.state.arrayOfUsers.map((user, index) => {
              return(
              <li key={index}>{user.name.first} {user.name.last}
                <button className="nameButton" id="nameButton1" value="submit" onClick="showDetails()">Contact</button>
                <button className="hideButton" id="hideButton1" value="submit" onClick="hideDetails()">Hide</button>
                <br></br>
                <p key={index} id="contactDetails">
                  phone - {user.phone}, email - {user.phone}
                </p>
              </li>
                )
            })}
          </ol>
        </header>
      </div>
    )
  };
}

function showDetails() {
  document.getElementById('nameButton1').style.display = "inline";
}

function hideDetails() {
  document.getElementById('hideButton1').style.display = "none";
}

export {showDetails, hideDetails};
export default App;
