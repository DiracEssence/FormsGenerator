using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DotNETWebApi.Models;
using DotNETWebApi.Models.Requests;
using DotNETWebApi.Helpers;

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

                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
