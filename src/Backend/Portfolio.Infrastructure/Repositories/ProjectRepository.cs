using Microsoft.EntityFrameworkCore;
using Portfolio.Core.Entities;
using Portfolio.Core.Interfaces;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Repositories
{
    public class ProjectRepository : GenericRepository<Project>, IProjectRepository
    {
        public ProjectRepository(PortfolioDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Project>> GetActiveProjectsAsync()
        {
            return await _dbSet
                .Where(p => p.IsActive)
                .OrderByDescending(p => p.CreatedDate)
                .ToListAsync();
        }

        public async Task<Project?> GetProjectWithDetailsAsync(int id)
        {
            return await _dbSet
                .Where(p => p.Id == id && p.IsActive)
                .FirstOrDefaultAsync();
        }
    }
}
