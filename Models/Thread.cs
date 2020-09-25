namespace IMSForumPrototype.Models
{
    public class Thread
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Url { get; set; }
        public User Author { get; set; }
        public bool Removed { get; set; }
        public User RemovedBy { get; set; }
        public bool Deleted { get; set; }
    }
}
