using System.Collections.Generic;

namespace IMSForumPrototype.Models
{
    public interface IRepository<T>
    {
        IEnumerable<T> List { get; }

        int Create(T item);
        void Update(T item);
        void Delete(T item);

        List<T> Query(ISpecification<T> specification);
    }
}
