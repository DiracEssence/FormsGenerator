using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DotNETWebApi.Models
{
    public class FormModel
    {
        public string name { get; set; }
        public string description { get; set; }
        public DateTime createdAt { get; set; }
        public List<QuestionModel> questions { get; set; }
    }
}