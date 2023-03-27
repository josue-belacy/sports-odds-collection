import React, { Component } from "react";
import axios from "axios";
// if i install axios

// first state is used to hold data in the local component
class App extends Component {
  constructor(props) {
    super(props);
    // creating state
    this.state = {
      users: [],
      loading: false,
    };
  }

  //extracting the info from the comoponent

  getUsers() {
    axios("https://api.randomuser.me/?nat=US&results=5").then((response) =>
      this.setState({
        users: response.data.results,
      })
    );
  }

  componentWillMount() {
    this.getUsers();
  }

  render() {
    return;
    <div className="App">
      {this.state.users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>;
  }
}

export default App;
