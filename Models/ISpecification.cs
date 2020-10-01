namespace IMSForumPrototype.Models
{
    public interface ISpecification<T>
    {
        bool Specificied(T item);
    }
}
