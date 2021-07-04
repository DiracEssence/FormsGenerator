using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DotNETWebApi.Models.Responses
{
    public class LoginResponse
    {
        public UserModel User { get; set; }
        public string Token { get; set; }

        public LoginResponse(UserModel user, string token)
        {
            this.User = user;
            this.Token = token;
        }
    }
}