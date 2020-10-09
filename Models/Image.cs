using System;

namespace IMSForumPrototype.Models
{
    public class Image : Thing
    {
        public int Id { get; }
        public DateTime CreatedAt { get; }
        public User CreatedBy { get; }
        public bool Removed { get => this.RemovedBy != null; }
        public User RemovedBy { get; set; }
        public DateTime DeletedAt { get; set; }
        public User DeletedBy { get; set; }
        public bool Deleted { get => this.DeletedAt != null && this.DeletedBy != null; }

        public Image(int id, DateTime createdAt, User createdBy)
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.CreatedBy = createdBy;
        }
    }
}
