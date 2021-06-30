using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNETWebApi.Models.FormsGeneratorDB;

namespace DotNETWebApi.Models.Responses
{
    public class UserModel
    {
        public System.Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }

        public UserModel(User user)
        {
            this.Id = user.Id;
            this.Username = user.Username;
            this.Email = user.Email;
        }
    }
}