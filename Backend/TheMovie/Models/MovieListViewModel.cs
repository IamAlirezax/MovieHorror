using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheMovie.Models
{
    public class MovieListViewModel
    {
        public List<MoviesViewModel>ListOfMovies { get; set; }
        public string ErrorMessage { get; set; }
    }
}