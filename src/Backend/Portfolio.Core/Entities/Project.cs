using System.ComponentModel.DataAnnotations;

namespace Portfolio.Core.Entities
{
    public class Project
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Description { get; set; } = string.Empty;
        
        [MaxLength(500)]
        public string? ImageUrl { get; set; }
        
        [MaxLength(500)]
        public string? GitHubUrl { get; set; }
        
        [MaxLength(500)]
        public string? LiveUrl { get; set; }
        
        public string? Technologies { get; set; } // JSON string olarak saklanacak
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        
        public DateTime? UpdatedDate { get; set; }
        
        public bool IsActive { get; set; } = true;
    }
}
