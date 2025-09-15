using Portfolio.Core.Entities;

namespace Portfolio.Core.Interfaces
{
    public interface IAboutRepository : IGenericRepository<About>
    {
        Task<About?> GetAboutInfoAsync();
    }
}
