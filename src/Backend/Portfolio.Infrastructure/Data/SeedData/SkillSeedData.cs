using Portfolio.Core.Entities;

namespace Portfolio.Infrastructure.Data.SeedData
{
    public static class SkillSeedData
    {
        public static void SeedSkillData(PortfolioDbContext context)
        {
            // Skills tablosunda veri var mı kontrol et
            if (context.Skills.Any())
            {
                return; // Veri varsa seed işlemini atla
            }

            var skills = new List<Skill>
            {
                
                new Skill
                {
                    Name = "Tailwind CSS",
                    Level = "Advanced",
                    Category = "Frontend",
                    Order = 6,
                    IsActive = true
                },
              

                // Backend Skills
                new Skill
                {
                    Name = ".NET 8",
                    Level = "Expert",
                    Category = "Backend",
                    Order = 1,
                    IsActive = true
                },
                new Skill
                {
                    Name = ".NET Core",
                    Level = "Expert",
                    Category = "Backend",
                    Order = 2,
                    IsActive = true
                },
                new Skill
                {
                    Name = "C#",
                    Level = "Expert",
                    Category = "Backend",
                    Order = 3,
                    IsActive = true
                },
                new Skill
                {
                    Name = "ASP.NET Web API",
                    Level = "Expert",
                    Category = "Backend",
                    Order = 4,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Entity Framework Core",
                    Level = "Advanced",
                    Category = "Backend",
                    Order = 5,
                    IsActive = true
                },
                new Skill
                {
                    Name = "JWT",
                    Level = "Advanced",
                    Category = "Backend",
                    Order = 6,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Clean Architecture",
                    Level = "Advanced",
                    Category = "Backend",
                    Order = 7,
                    IsActive = true
                },

                // Database Skills
                new Skill
                {
                    Name = "SQL Server",
                    Level = "Advanced",
                    Category = "Database",
                    Order = 1,
                    IsActive = true
                },
                new Skill
                {
                    Name = "PostgreSQL",
                    Level = "Intermediate",
                    Category = "Database",
                    Order = 2,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Redis",
                    Level = "Intermediate",
                    Category = "Database",
                    Order = 3,
                    IsActive = true
                },

                // Tools & Technologies
                new Skill
                {
                    Name = "Git",
                    Level = "Advanced",
                    Category = "Tools",
                    Order = 1,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Docker",
                    Level = "Intermediate",
                    Category = "Tools",
                    Order = 2,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Docker Compose",
                    Level = "Intermediate",
                    Category = "Tools",
                    Order = 3,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Azure",
                    Level = "Intermediate",
                    Category = "Cloud",
                    Order = 1,
                    IsActive = true
                },
                new Skill
                {
                    Name = "AWS",
                    Level = "Beginner",
                    Category = "Cloud",
                    Order = 2,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Jira",
                    Level = "Advanced",
                    Category = "Tools",
                    Order = 4,
                    IsActive = true
                },
                new Skill
                {
                    Name = "Agile",
                    Level = "Advanced",
                    Category = "Methodology",
                    Order = 1,
                    IsActive = true
                }
            };

            context.Skills.AddRange(skills);
            context.SaveChanges();
        }
    }
}
