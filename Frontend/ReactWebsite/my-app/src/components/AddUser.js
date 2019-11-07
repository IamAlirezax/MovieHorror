import React from "react";
import "./../App.css";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleClick = () => {
    fetch("http://localhost:56044/api/Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(() => this.props.onAddedUser());
  };

  render() {
    return (
      <div className="border">
        <p>
          Username:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </p>
        <input
          type="button"
          onClick={() => this.handleClick()}
          value="Register"
        />
      </div>
    );
  }
}

export default AddUser;