using System.Collections.Generic;

namespace IMSForumPrototype.Models
{
    public interface Taggable
    {
        List<Tag> Tags { get; set; }

        void AddTag(Tag tag);

        bool RemoveTag(Tag tag);
    }
}
