using System;

namespace IMSForumPrototype.Models
{
    public interface Thing
    {
        int Id { get; }
        DateTime CreatedAt { get; }
        User CreatedBy { get; }
        DateTime DeletedAt { get; set; }
        User DeletedBy { get; set; }
        bool Deleted { get; }
    }
}
