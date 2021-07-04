using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DotNETWebApi.Models.Requests;
using DotNETWebApi.Models.FormsGeneratorDB;
using DotNETWebApi.Helpers;
using System.Web.Http.Cors;
using DotNETWebApi.Models.Responses;
using System.Threading;

namespace DotNETWebApi.Controllers
{
    [AllowAnonymous]
    public class AccountController : ApiController
    {

        [HttpPost]
        public IHttpActionResult RegisterUser(CreateUser userRequest)
        {
            try
            {
                AccountHelper accountHelper = new AccountHelper();
                if (
                    string.IsNullOrEmpty(userRequest.Username) ||
                    string.IsNullOrEmpty(userRequest.Email) ||
                    string.IsNullOrEmpty(userRequest.Password)
                   )
                {
                    return BadRequest("Incomplete fields");
                }

                if (accountHelper.GetUserByUsername(userRequest.Username) != null)
                {
                    return BadRequest("There is already a user with that username");
                }

                if (accountHelper.GetUserByEmail(userRequest.Email) != null)
                {
                    return BadRequest("There is already a user with that email");
                }

                // Save salt of user
                User userToCreate = new User();
                userToCreate.Id = Guid.NewGuid();
                userToCreate.Username = userRequest.Username;
                userToCreate.Email = userRequest.Email;
                userToCreate.Salt = PasswordHasher.GenerateSalt();
                userToCreate.Password = PasswordHasher.HashPasswordWithSalt(userRequest.Password, userToCreate.Salt);

                accountHelper.Create(userToCreate);

                return Ok("Your account has been created successfully, now please log in!");
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IHttpActionResult LogIn(CreateUser userRequest)
        {
            try
            {
                if (string.IsNullOrEmpty(userRequest.Username))
                {
                    return BadRequest("You must provide the username");
                }
                if (string.IsNullOrEmpty(userRequest.Password))
                {
                    return BadRequest("You must provide the password");
                }

                AccountHelper accountHelper = new AccountHelper();
                User user = accountHelper.GetUserByUsername(userRequest.Username);

                if (user == null)
                {
                    return BadRequest("No user was found with that username");
                }

                byte[] hashedPassword = PasswordHasher.HashPasswordWithSalt(userRequest.Password, user.Salt);

                if (PasswordHasher.ByteArrayCompare(hashedPassword, user.Password))
                {
                    UserModel model = new UserModel(user);
                    string token = TokenGenerator.GenerateTokenJwt(user);

                    LoginResponse response = new LoginResponse(model, token);

                    return Ok(response);
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }

            }
            catch(Exception ex)
            {
                return BadRequest("something failed when trying to login");
            }
        }

        [HttpGet]
        public IHttpActionResult IsAuthenticated()
        {
            // var identity = Thread.CurrentPrincipal.Identity;
            return Ok(true);
        }
    }
}