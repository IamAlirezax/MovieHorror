using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheMovie.Libraries.Utlilities;
using TheMovie.Models;

namespace TheMovie.Libraries
{
    public class LoginUtility
    {
        private HorrorMoviesEntities db = new HorrorMoviesEntities();

        public string Login(string username, string password)
        {
            var user = db.users.Where(u => u.username == username).FirstOrDefault<user>();

            if (user != null)
            {
                if (user.password == password)
                {
                    return CreateTokenString(username);
                } else
                {
                    return string.Empty;
                }
            } else
            {
                return string.Empty;
            }
        }

        public string CreateTokenString(string uid)
        {
            var guid = Guid.NewGuid();
            var ret = uid + ":" + guid.ToString();
            return Base64.Encode(ret);
        }
    }
}