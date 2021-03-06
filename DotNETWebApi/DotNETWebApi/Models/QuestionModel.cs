using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DotNETWebApi.Models
{
    public class QuestionModel
    {
        public string question { get; set; }
        public int questionType { get; set; }
        public List<ChoiceModel> choices { get; set; }
        public int order { get; set; }
    }
}