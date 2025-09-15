using Portfolio.Core.Entities;

namespace Portfolio.Core.Interfaces
{
    public interface ISkillRepository : IGenericRepository<Skill>
    {
        Task<IEnumerable<Skill>> GetActiveSkillsAsync();
        Task<IEnumerable<Skill>> GetSkillsByCategoryAsync(string category);
        Task<IEnumerable<Skill>> GetOrderedSkillsAsync();
    }
}
