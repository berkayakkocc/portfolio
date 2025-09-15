using Microsoft.EntityFrameworkCore;
using Portfolio.Core.Entities;
using Portfolio.Core.Interfaces;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Repositories
{
    public class AboutRepository : GenericRepository<About>, IAboutRepository
    {
        public AboutRepository(PortfolioDbContext context) : base(context)
        {
        }

        public async Task<About?> GetAboutInfoAsync()
        {
            return await _dbSet
                .OrderByDescending(a => a.CreatedDate)
                .FirstOrDefaultAsync();
        }
    }
}
