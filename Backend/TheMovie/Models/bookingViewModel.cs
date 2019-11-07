using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheMovie.Models
{
    public class bookingViewModel
    {
        public int movieId { get; set; }
        public int tickets { get; set; }
        public AccessTokenViewModel token { get; set; }
    }
}