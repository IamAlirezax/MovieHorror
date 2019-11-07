import React, { Component } from "react";
import '../App.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  logIn() {
    fetch("http://localhost:56044/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data == null) {
          // Login failed
        } else {
          this.props.loggedIn(data);
          console.log(data);
        }
      });
  }
  render() {
    return (
      <div>
        Username:{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
        />
        <br />
        Password:{" "}
        <input
          type="text"
          value={this.state.password}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <br />
        <button
          onClick={() => this.logIn(this.state.username, this.state.password)}
        >
          Log In
        </button>
      </div>
    );
  }
}
