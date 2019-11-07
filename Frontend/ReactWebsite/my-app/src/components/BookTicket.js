import React, { Component } from "react";

export default class BookTicket extends Component {
  constructor() {
    super();
    this.state = { movieId: "", tickets: "" };
  }
  render() {
    return (
      <div>
        MovieID:{" "}
        <input
          value={this.state.movieId}
          onChange={event => this.setState({ movieId: event.target.value })}
        />
        Tickets:{" "}
        <input
          value={this.state.tickets}
          onChange={event => this.setState({ tickets: event.target.value })}
        />
        <button
          onClick={() =>
            this.props.bookTickets(this.state.movieId, this.state.tickets)
          }
        >
          Book
        </button>
      </div>
    );
  }
}
