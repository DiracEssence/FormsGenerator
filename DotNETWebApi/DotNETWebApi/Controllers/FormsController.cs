using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DotNETWebApi.Models;
using DotNETWebApi.Models.Requests;
using DotNETWebApi.Helpers;
using System.Threading;
using System.Security.Claims;

namespace DotNETWebApi.Controllers
{
    [Authorize]
    public class FormsController : ApiController
    {
        public IHttpActionResult CreateForm(FullForm form)
        {
            try
            {
                try
                {
                    // Validate form,if something is bad in form, throws an exception with related message.
                    FormsHelper.ValidateForm(form);
                }
                catch(Exception ex)
                {
                    return BadRequest(ex.Message);
                }

                ClaimsPrincipal identity = (ClaimsPrincipal)Thread.CurrentPrincipal;
                string idUserString = identity.Claims.FirstOrDefault(f => f.Type == "idUser").Value;

                Guid idUser = Guid.Empty;
                AccountHelper accountHelper = new AccountHelper();
                if (Guid.TryParse(idUserString, out idUser) && accountHelper.UserExist(idUser))
                {
                    try
                    {
                        FormsHelper formsHelper = new FormsHelper();
                        formsHelper.SaveForm(form, idUser);
                    }
                    catch(Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }

                    return Ok();
                }
                else
                {
                    return BadRequest("User not found");
                }
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpGet]
        public IHttpActionResult GetFormsOfUser()
        {
            try
            {
                ClaimsPrincipal identity = (ClaimsPrincipal)Thread.CurrentPrincipal;
                string idUserString = identity.Claims.FirstOrDefault(f => f.Type == "idUser").Value;

                Guid idUser = Guid.Empty;
                AccountHelper accountHelper = new AccountHelper();
                if (Guid.TryParse(idUserString, out idUser) && accountHelper.UserExist(idUser))
                {
                    try
                    {
                        FormsHelper formsHelper = new FormsHelper();
                        List<FormModel> forms = formsHelper.GetFormsOfUser(idUser);
                        return Ok(forms);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message);
                    }

                }
                else
                {
                    return BadRequest("User not found");
                }
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
