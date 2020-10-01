using System;
using IMSForumPrototype.Models.Data.Users;

namespace IMSForumPrototype.Models.Data
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
