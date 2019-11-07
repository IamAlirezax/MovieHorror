using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheMovie.Models
{
    public class AccessTokenViewModel
    {
        public string accessToken { get; set; }
        public DateTime expireDate { get; set; }
    }
}