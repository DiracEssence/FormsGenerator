using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using DotNETWebApi.Models.FormsGeneratorDB;

namespace DotNETWebApi.Helpers
{
    public class AccountHelper
    {
        private FormsGeneratorDBEntities db = new FormsGeneratorDBEntities();

        public void Create(User user)
        {
            try
            {
                db.Users.Add(user);
                db.Entry(user).State = EntityState.Added;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Update(User user)
        {
            try
            {
                db.Users.Attach(user);
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public User GetUserById(Guid id)
        {
            User user = db.Users.FirstOrDefault(f => f.Id == id);
            return user;
        }

        public User GetUserByEmail(string email)
        {
            User user = db.Users.FirstOrDefault(f => f.Email == email);
            return user;
        }

        public User GetUserByUsername(string username)
        {
            User user = db.Users.FirstOrDefault(f => f.Username == username);
            return user;
        }

    }
}
