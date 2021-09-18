using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNETWebApi.Models;
using DotNETWebApi.Models.Requests;

namespace DotNETWebApi.Helpers
{
    public static class FormsHelper
    {
        public static void ValidateForm(FullForm form)
        {
            if (form == null)
            {
                throw new Exception("Form empty.");
            }
            if (string.IsNullOrEmpty(form.formName))
            {
                throw new Exception("Form name not provided.");
            }
            if (string.IsNullOrEmpty(form.formDescription))
            {
                throw new Exception("Form description not provided.");
            }
            if (form.questions == null || form.questions.Count == 0)
            {
                throw new Exception("Form must have one question at least.");
            }
            // if one cuestion is of multiple choice type, and it don't have one choice at least, throw error.
            if (form.questions.Any(question => question.questionType == (int)QuestionTypesEnum.MultipleChoice && (question.choices == null || question.choices.Count == 0)))
            {
                throw new Exception("Form must have one question at least.");
            }
        }
    }
}