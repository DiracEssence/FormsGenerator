using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DotNETWebApi.Models.Requests
{
    public class FullForm
    {
        public string formName { get; set; }
        public string formDescription { get; set; }
        public List<QuestionModel> questions { get; set; }
    }
}