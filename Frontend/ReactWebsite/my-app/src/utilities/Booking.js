export const ticketBooking = async (movieId, tickets, token) => {
  console.log(token);
  fetch("http://localhost:56044/MakeBooking", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + token.accessToken
    },
    body: JSON.stringify({
      movieId: movieId,
      tickets: tickets,
      token: token
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data == null) {
      } else {
        console.log(data);
      }
    });
};
