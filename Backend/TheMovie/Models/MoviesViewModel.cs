using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheMovie.Models
{
    public class MoviesViewModel
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public int Length { get; set; }
        public bool Adult { get; set; }
        public string LoungeName { get; set; }
        public DateTime ViewingDate { get; set; }
        public int AvailableSeats { get; set; }
        public int TotalSeats { get; set; }

        public string Picture { get; set; }
    }
}