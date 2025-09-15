using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Interfaces;

namespace Portfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private readonly ISkillRepository _skillRepository;

        public SkillsController(ISkillRepository skillRepository)
        {
            _skillRepository = skillRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Core.Entities.Skill>>> GetSkills()
        {
            var skills = await _skillRepository.GetOrderedSkillsAsync();
            return Ok(skills);
        }

        [HttpGet("active")]
        public async Task<ActionResult<IEnumerable<Core.Entities.Skill>>> GetActiveSkills()
        {
            var skills = await _skillRepository.GetActiveSkillsAsync();
            return Ok(skills);
        }

        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Core.Entities.Skill>>> GetSkillsByCategory(string category)
        {
            var skills = await _skillRepository.GetSkillsByCategoryAsync(category);
            return Ok(skills);
        }

        [HttpPost]
        public async Task<ActionResult<Core.Entities.Skill>> CreateSkill(Core.Entities.Skill skill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            skill.CreatedDate = DateTime.UtcNow;
            skill.IsActive = true;

            var createdSkill = await _skillRepository.AddAsync(skill);
            return CreatedAtAction(nameof(GetSkills), new { id = createdSkill.Id }, createdSkill);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSkill(int id, Core.Entities.Skill skill)
        {
            if (id != skill.Id)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingSkill = await _skillRepository.GetByIdAsync(id);
            if (existingSkill == null)
            {
                return NotFound();
            }

            await _skillRepository.UpdateAsync(skill);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(int id)
        {
            var skill = await _skillRepository.GetByIdAsync(id);
            if (skill == null)
            {
                return NotFound();
            }

            await _skillRepository.DeleteAsync(skill);
            return NoContent();
        }
    }
}
