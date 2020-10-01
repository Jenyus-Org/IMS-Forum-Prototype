using System;
using IMSForumPrototype.Models.Data.Users;

namespace IMSForumPrototype.Models.Data
{
    public class Tag : Thing
    {
        public int Id { get; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public DateTime DeletedAt { get; set; }
        public User DeletedBy { get; set; }
        public bool Deleted { get => this.DeletedAt != null && this.DeletedBy != null; }
        public string Text { get; }

        public Tag(int id, DateTime createdAt, User createdBy, string text)
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
            this.Text = text;
        }
    }
}
