using System.ComponentModel.DataAnnotations;

namespace Portfolio.Core.Entities
{
    public class About
    {
        public int Id { get; set; }
        
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Content { get; set; } = string.Empty;
        
        [MaxLength(500)]
        public string? ImageUrl { get; set; }
        
        public string? Skills { get; set; } // JSON string olarak saklanacak
        
        [MaxLength(100)]
        public string? Experience { get; set; }
        
        [MaxLength(200)]
        public string? Location { get; set; }
        
        [MaxLength(100)]
        public string? Email { get; set; }
        
        [MaxLength(100)]
        public string? Phone { get; set; }
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        
        public DateTime? UpdatedDate { get; set; }
    }
}
