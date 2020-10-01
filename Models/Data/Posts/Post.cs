using IMSForumPrototype.Models.Data.Users;

namespace IMSForumPrototype.Models.Data.Posts
{
    public interface Post : Thing
    {
        User Author { get; }
        bool Removed { get; }
        User RemovedBy { get; set; }
        string Title { get; }
        string Body { get; set; }
        CommentForest Comments { get; set; }
    }
}
