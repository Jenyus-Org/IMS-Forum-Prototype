using System;
using IMSForumPrototype.Models.Data.Users;

namespace IMSForumPrototype.Models.Data.Posts.Submissions
{
    public class Submission : Post
    {
        public int Id { get; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public string Title { get; }
        public string Body { get; set; }
        public User Author { get; }
        public bool Removed { get => this.RemovedBy != null; }
        public User RemovedBy { get; set; }
        public DateTime DeletedAt { get; set; }
        public User DeletedBy { get; set; }
        public bool Deleted { get => this.DeletedAt != null && this.DeletedBy != null; }
        public CommentForest Comments { get; set; }

        public Submission(int id, DateTime createdAt, User createdBy, string body, User author)
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
            this.Body = body;
            this.Author = author;
        }
    }
}
