using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DotNETWebApi.Models.Requests
{
    public class CreateUser
    {
        public System.Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}