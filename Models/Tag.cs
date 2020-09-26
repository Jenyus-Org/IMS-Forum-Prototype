using System;

namespace IMSForumPrototype.Models
{
    public class Tag : Thing
    {
        public int Id { get; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public DateTime DeletedAt { get; set; }
        public bool Deleted { get => this.DeletedAt != null; }
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
