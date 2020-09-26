using System;

namespace IMSForumPrototype.Models
{
    public class Comment : Thing
    {
        public int Id { get; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public Thing Parent { get; }
        string Body { get; set; }
        public User Author { get; }
        public bool Removed { get => this.RemovedBy != null; }
        public User RemovedBy { get; set; }
        public DateTime DeletedAt { get; set; }
        public bool Deleted { get => this.DeletedAt != null; }

        public Comment(int id, DateTime createdAt, User createdBy, string body, User author)
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
            this.Body = body;
            this.Author = author;
        }
    }
}
