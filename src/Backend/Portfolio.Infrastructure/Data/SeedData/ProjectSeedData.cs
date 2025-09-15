using Portfolio.Core.Entities;

namespace Portfolio.Infrastructure.Data.SeedData
{
    public static class ProjectSeedData
    {
        public static void SeedProjectData(PortfolioDbContext context)
        {
            // Projects tablosunda veri var mı kontrol et
            if (context.Projects.Any())
            {
                return; // Veri varsa seed işlemini atla
            }

            var projects = new List<Project>
{
    new Project
    {
        Title = "Clicq",
        Description = "JWT tabanlı kimlik doğrulama, Refresh Token, MFA ve TOTP desteği bulunan tam kapsamlı bir web uygulaması. .NET 8, EF Core ve Clean Architecture yapısıyla geliştirilmiş backend içerir.",
        ImageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        GitHubUrl = "https://github.com/berkayakkocc/clicq",
        LiveUrl = "https://clicq.example.com",
        Technologies = "[\".NET 8\", \"ASP.NET Web API\", \"Entity Framework Core\", \"SQL Server\", \"JWT\", \"Refresh Token\", \"MFA\", \"TOTP\", \"Clean Architecture\"]",
        CreatedDate = DateTime.UtcNow.AddDays(-120),
        UpdatedDate = DateTime.UtcNow.AddDays(-15),
        IsActive = true
    },
    new Project
    {
        Title = "E-Mutabakat",
        Description = "Firmalar arası BA/BS mutabakat süreçlerini yöneten kurumsal web platformu. PDF ve Excel entegrasyonu, toplu mail gönderimi, kullanıcı yetkilendirmeleri ve onay akışları içerir. NTT Data Türkiye'de canlı ortamda kullanılmaktadır.",
        ImageUrl = "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&h=400&fit=crop",
        GitHubUrl = "https://github.com/berkayakkocc/e-mutabakat",
        LiveUrl = "https://emutabakat.example.com",
        Technologies = "[\".NET Core\", \"Entity Framework Core\", \"SQL Server\", \"JWT\", \"FluentValidation\", \"AutoMapper\", \"PDFSharp\", \"ClosedXML\"]",
        CreatedDate = DateTime.UtcNow.AddDays(-400),
        UpdatedDate = DateTime.UtcNow.AddDays(-200),
        IsActive = true
    },
    new Project
    {
        Title = "Alba C4C",
        Description = "SAP C4C ile entegre çalışan CRM çözümü. Müşteri, fırsat, teklif ve satış süreçlerini yönetmek için geliştirildi. SAP OData servisleri ile çift yönlü veri entegrasyonu, çok katmanlı mimari ve planlanabilir job yapısı içerir.",
        ImageUrl = "https://images.unsplash.com/photo-1581093588401-22d40b7d3c3e?w=600&h=400&fit=crop",
        GitHubUrl = "https://github.com/berkayakkocc/alba-c4c",
        LiveUrl = "https://albac4c.example.com",
        Technologies = "[\".NET Core\", \"Entity Framework Core\", \"SQL Server\", \"Clean Architecture\", \"SAP OData\", \"Hangfire\", \"AutoMapper\", \"FluentValidation\"]",
        CreatedDate = DateTime.UtcNow.AddDays(-600),
        UpdatedDate = DateTime.UtcNow.AddDays(-100),
        IsActive = true
    }
};


            context.Projects.AddRange(projects);
            context.SaveChanges();
        }
    }
}
