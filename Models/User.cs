using System;

namespace IMSForumPrototype.Models
{
    public class User : Thing
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public DateTime DeletedAt { get; set; }
        public User DeletedBy { get; set; }
        public bool Deleted { get => this.DeletedAt != null && this.DeletedBy != null; }
        public string Username { get; set; }
        public string Password { get; set; }

        public User(int id, DateTime createdAt, User createdBy, string body, string username, string password)
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
            this.Username = username;
            this.Password = password;
        }
    }
}
