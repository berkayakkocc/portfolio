using Portfolio.Core.Entities;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Data.SeedData
{
    public static class AboutSeedData
    {
        public static void SeedAboutData(PortfolioDbContext context)
        {
            var existingAbout = context.Abouts.FirstOrDefault();
            
            if (existingAbout != null)
            {
                // Mevcut kaydı güncelle
                existingAbout.Title = "Berkaycan";
                existingAbout.Content = "Merhaba! Ben Berkaycan, İstanbul'da yaşayan bir .NET Core geliştiricisiyim. Yazılım geliştirme alanında deneyimliyim ve özellikle Clean Architecture, EF Core, JWT tabanlı kimlik doğrulama, çok katmanlı backend projeleri ve modern web teknolojileriyle çalışıyorum. Sürekli öğrenmeye, yeni teknolojiler keşfetmeye ve kendimi geliştirmeye odaklanıyorum.";
                existingAbout.ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                existingAbout.Skills = "[\"C#\", \".NET 8\", \".NET Core\", \"ASP.NET Web API\", \"Entity Framework Core\", \"SQL Server\", \"JWT\", \"Refresh Token\", \"MFA\", \"TOTP\", \"Clean Architecture\", \"AutoMapper\", \"FluentValidation\", \"Docker\", \"Docker Compose\", \"Redis\", \"Git\", \"Azure\"]";
                existingAbout.Experience = "4+ Yıl";
                existingAbout.Location = "İstanbul, Türkiye";
                existingAbout.Email = "berkayakkocc6@gmail.com";
                existingAbout.Phone = "+90 537 550 25 75";
                existingAbout.UpdatedDate = DateTime.UtcNow;
                
                context.Abouts.Update(existingAbout);
            }
            else
            {
                // Yeni kayıt oluştur
                var aboutData = new About
                {
                    Title = "Berkaycan",
                    Content = "Merhaba! Ben Berkaycan, İstanbul'da yaşayan bir .NET Core geliştiricisiyim. Yazılım geliştirme alanında deneyimliyim ve özellikle Clean Architecture, EF Core, JWT tabanlı kimlik doğrulama, çok katmanlı backend projeleri ve modern web teknolojileriyle çalışıyorum. Sürekli öğrenmeye, yeni teknolojiler keşfetmeye ve kendimi geliştirmeye odaklanıyorum.",
                    ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                    Skills = "[\"C#\", \".NET 8\", \".NET Core\", \"ASP.NET Web API\", \"Entity Framework Core\", \"SQL Server\", \"JWT\", \"Refresh Token\", \"MFA\", \"TOTP\", \"Clean Architecture\", \"AutoMapper\", \"FluentValidation\", \"Docker\", \"Docker Compose\", \"Redis\", \"Git\", \"Azure\"]",
                    Experience = "4+ Yıl",
                    Location = "İstanbul, Türkiye",
                    Email = "berkayakkocc6@gmail.com",
                    Phone = "+90 537 550 25 75",
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = null
                };

                context.Abouts.Add(aboutData);
            }
            
            context.SaveChanges();
        }
    }
}
