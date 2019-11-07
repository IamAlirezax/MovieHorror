using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheMovie.Libraries.Utlilities
{
    public static class Base64
    {
        public static string Encode(string txt)
        {
            var bytes = System.Text.Encoding.UTF8.GetBytes(txt);
            return System.Convert.ToBase64String(bytes);
        }

        public static string Decode(string base64Txt)
        {
            var bytes = System.Convert.FromBase64String(base64Txt);
            return System.Text.Encoding.UTF8.GetString(bytes);
        }
    }
}