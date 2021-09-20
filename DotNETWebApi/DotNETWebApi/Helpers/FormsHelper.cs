using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNETWebApi.Models;
using DotNETWebApi.Models.Requests;
using DotNETWebApi.Models.FormsGeneratorDB;
using System.Data.Entity;

namespace DotNETWebApi.Helpers
{
    public class FormsHelper
    {
        private FormsGeneratorDBEntities db = new FormsGeneratorDBEntities();

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

        public void SaveForm(FullForm formModel, Guid idUser)
        {
            using (var transaction = db.Database.BeginTransaction())
            {
                try
                {
                    Guid idForm = Guid.NewGuid();

                    Form form = new Form();
                    form.Id = idForm;
                    form.Name = formModel.formName;
                    form.Description = formModel.formDescription;
                    form.IdCreator = idUser;
                    form.CreatedAt = DateTime.Now;

                    db.Forms.Add(form);
                    db.Entry(form).State = EntityState.Added;

                    foreach (QuestionModel questionModel in formModel.questions)
                    {
                        Guid idQuestion = Guid.NewGuid();
                        Question questionToSave = new Question()
                        {
                            Id = idQuestion,
                            IdForm = idForm,
                            QuestionText = questionModel.question,
                            IdQuestionType = questionModel.questionType,
                            Order = questionModel.order
                        };

                        db.Questions.Add(questionToSave);
                        db.Entry(questionToSave).State = EntityState.Added;

                        foreach (ChoiceModel choiceModel in questionModel.choices)
                        {
                            Choice choiceToSave = new Choice()
                            {
                                Id = Guid.NewGuid(),
                                IdQuestion = idQuestion,
                                ChoiceText = choiceModel.choice,
                                Order = choiceModel.order
                            };

                            db.Choices.Add(choiceToSave);
                            db.Entry(choiceToSave).State = EntityState.Added;
                        }
                    }

                    db.SaveChanges();
                    transaction.Commit();
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw new Exception("Something went wrong while trying to save form.");
                }
            }
        }

        public List<FormModel> GetFormsOfUser(Guid idUser)
        {
            return db.Forms.Where(form => form.IdCreator == idUser).Select(
            form => new FormModel()
            {
                name = form.Name,
                description = form.Description,
                createdAt = form.CreatedAt,
                questions = form.Questions.Select(
                    question => new QuestionModel()
                    {
                        question = question.QuestionText,
                        questionType = question.IdQuestionType,
                        order = question.Order,
                        choices = question.Choices.Select(
                            choice => new ChoiceModel()
                            {
                                choice = choice.ChoiceText,
                                order = choice.Order
                            }).ToList()
                    }).ToList()
            }
            ).ToList();
        }
    }
}