using Microsoft.EntityFrameworkCore;
using Portfolio.Core.Entities;
using Portfolio.Core.Interfaces;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Repositories
{
    public class SkillRepository : GenericRepository<Skill>, ISkillRepository
    {
        public SkillRepository(PortfolioDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Skill>> GetActiveSkillsAsync()
        {
            return await _dbSet
                .Where(s => s.IsActive)
                .OrderBy(s => s.Order)
                .ThenBy(s => s.Name)
                .ToListAsync();
        }

        public async Task<IEnumerable<Skill>> GetSkillsByCategoryAsync(string category)
        {
            return await _dbSet
                .Where(s => s.IsActive && s.Category == category)
                .OrderBy(s => s.Order)
                .ThenBy(s => s.Name)
                .ToListAsync();
        }

        public async Task<IEnumerable<Skill>> GetOrderedSkillsAsync()
        {
            return await _dbSet
                .Where(s => s.IsActive)
                .OrderBy(s => s.Category)
                .ThenBy(s => s.Order)
                .ThenBy(s => s.Name)
                .ToListAsync();
        }
    }
}
