import React from "react";
import User from "./User";
import AddUser from "./AddUser";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch("http://localhost:56044/api/users")
      .then(response => response.json())
      .then(data => this.setState({ result: data }));
  };

  render() {
    return (
      <>
        {this.state.result !== null ? (
          <div>
            {this.state.result !== undefined
              ? this.state.result.map(item => {
                return (<User key={item.id} data={item} />);
              })
              : null}
          </div>
        ) : null}
        <AddUser onAddedUser={() => this.getUsers()} />
      </>
    );
  }
}

export default Users;