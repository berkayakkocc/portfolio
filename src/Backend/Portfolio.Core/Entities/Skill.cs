using System.ComponentModel.DataAnnotations;

namespace Portfolio.Core.Entities
{
    public class Skill
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        
        [MaxLength(50)]
        public string? Level { get; set; } // Beginner, Intermediate, Advanced, Expert
        
        [MaxLength(50)]
        public string? Category { get; set; } // Frontend, Backend, Database, Tools, etc.
        
        public int? Order { get; set; } // Sıralama için
        
        public bool IsActive { get; set; } = true;
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
