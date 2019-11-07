import React from "react";
import "./../App.css";

class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: null};
      }
    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        const response = await fetch("http://localhost:56044/api/Bookings")
          .then(response => response.json())
          .then(data => this.setState({ result: data, loaded: true }));
          console.log(this.state.result)
      
    };
    


  render() {
    return (
      <div>
        <h3>Biljetter</h3>
            <p>tidpunkt</p>
            <p>Film</p>
      </div>
    );
  }
}

export default Tickets;