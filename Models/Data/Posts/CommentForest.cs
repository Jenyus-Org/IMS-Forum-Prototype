using System;
using System.Collections.Generic;
using IMSForumPrototype.Models.Data.Comments;
using IMSForumPrototype.Models.Data.Users;

namespace IMSForumPrototype.Models.Data.Posts
{
    public class CommentForest : Thing
    {
        public int Id { get; }
        public int SubmissionId { get; set; }
        public int TutorialId { get; set; }
        public int SubmissionId { get; set; }
        public int TutorialId { get; set; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public DateTime DeletedAt { get; set; }
        public User DeletedBy { get; set; }
        public bool Deleted { get => this.DeletedAt != null && this.DeletedBy != null; }
        public List<Comment> Comments { get; } = new List<Comment>();

        public CommentForest(int id, int submissionId, int tutorialId, DateTime createdAt, User createdBy)
        {
            this.Id = id;
            this.SubmissionId = submissionId;
            this.TutorialId = tutorialId;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
        }
    }
}
