using Microsoft.AspNetCore.Mvc;
using Portfolio.Core.Interfaces;

namespace Portfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AboutController : ControllerBase
    {
        private readonly IAboutRepository _aboutRepository;

        public AboutController(IAboutRepository aboutRepository)
        {
            _aboutRepository = aboutRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Core.Entities.About>> GetAbout()
        {
            var about = await _aboutRepository.GetAboutInfoAsync();
            if (about == null)
            {
                return NotFound();
            }
            return Ok(about);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAbout(Core.Entities.About about)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingAbout = await _aboutRepository.GetAboutInfoAsync();
            if (existingAbout == null)
            {
                about.CreatedDate = DateTime.UtcNow;
                await _aboutRepository.AddAsync(about);
                return CreatedAtAction(nameof(GetAbout), about);
            }

            about.Id = existingAbout.Id;
            about.CreatedDate = existingAbout.CreatedDate;
            about.UpdatedDate = DateTime.UtcNow;

            await _aboutRepository.UpdateAsync(about);
            return NoContent();
        }
    }
}
