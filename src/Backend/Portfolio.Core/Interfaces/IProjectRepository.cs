using Portfolio.Core.Entities;

namespace Portfolio.Core.Interfaces
{
    public interface IProjectRepository : IGenericRepository<Project>
    {
        Task<IEnumerable<Project>> GetActiveProjectsAsync();
        Task<Project?> GetProjectWithDetailsAsync(int id);
    }
}
