import React, { Component } from "react";
import BookTicket from "../components/BookTicket";
import Login from "../components/Login";
import { ticketBooking } from "../utilities/Booking";
import '../App.css';

  class Booking extends Component {
  constructor() {
    super();
    this.state = {
      bookedMovieId: "",
      bookedTickets: "",
      loggedIn: false,
      accessToken: {},
    };
  }

  bookTickets(movieId, tickets) {
    var bookingConfirmation = ticketBooking(
      movieId,
      tickets,
      this.state.accessToken
    );
    this.setState({
      bookedMovieId: bookingConfirmation.movieId,
      bookedTickets: bookingConfirmation.tickets
    });
  }

  handleAccessToken(token) {
    this.setState({ loggedIn: true, accessToken: token });
  }

  render() {
    return (
      <div>
        <div>Look at Available Movies To Find Movie ID</div>
        {!this.state.loggedIn ? (
          <Login loggedIn={token => this.handleAccessToken(token)} />
        ) : (
          <></>
        )}
        
        {this.state.loggedIn ? (
          this.state.bookedMovieId === "" ? (
            <BookTicket
              bookTickets={(movieId, tickets) =>
                this.bookTickets(movieId, tickets)
              }
            />
          ) : (
            <div>
              Booking {this.state.bookedTickets} tickets for movie number{" "}
              {this.state.bookedMovieId}
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    );
  }
}
export default Booking;