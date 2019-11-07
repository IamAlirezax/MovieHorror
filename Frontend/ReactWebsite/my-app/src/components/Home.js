import React, { Component } from 'react';
import "../App.css";
import $ from 'jquery';
import MovieRow from "./MovieRow"
import AvailableMovies from './AvailableMovies';








class Home extends Component {
    constructor(props) {
     super(props);
     this.state = {}
  

  this.performsSearch()
    }
performsSearch(searchTerm) {
console.log("this is my app ")
const urlString = "https://api.themoviedb.org/3/search/movie/?api_key=9a7594ffc7866195d658f8f0f2a74531&query=" + searchTerm

$.ajax({
    url: urlString,
 success: ( searchResults) =>{
     console.log("fetched data successfully")
     console.log(searchResults)
     const results = searchResults.results

     console.log(results[1])
     var movieRows = []
     results.forEach((movie) => {
         movie.poster_src =  "https://image.tmdb.org/t/p/w185" + movie.poster_path
         const movieRow = <MovieRow key= { movie.id} movie={movie}/>







         movieRows.push(movieRow)
     })
     this.setState({rows: movieRows})
 },
 error: (xhr, status, err) => {
     console.log("failed to fetch data")
 }

})

}


searchChangeHandler(event) {
console.log(event.target.value)
const boundObject = this
const searchTerm = event.target.value
this.performsSearch(searchTerm)
}
  render(){
return (
<div className= "Home">


<input style={{
            fontSize : 24,
            display:'block',
            width: "99%",
            paddingTop : 8,
            paddingLeft: 16
            
}} onChange= {this.searchChangeHandler.bind(this)} placeholder="Search For Movies and Trailers" />




{this.state.rows}
 
 

</div>

    )
   }
}

export default Home;



