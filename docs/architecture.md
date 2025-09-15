# Portfolio Projesi - Mimari Dokümantasyonu

## Genel Mimari

Bu proje **N-Tier Architecture** prensiplerine uygun olarak geliştirilmiştir.

### Proje Yapısı

```
Portfolio/
├── src/
│   ├── Frontend/                 # React Uygulaması
│   │   └── portfolio-frontend/
│   └── Backend/                  # .NET Core Solution
│       ├── Portfolio.API/        # Presentation Layer
│       ├── Portfolio.Core/       # Business Logic Layer
│       ├── Portfolio.Infrastructure/ # Data Access Layer
│       └── Portfolio.Shared/     # Shared DTOs, Models
├── docs/                         # Dokümantasyon
└── README.md
```

## Katmanlar

### 1. Presentation Layer (Portfolio.API)
- **Sorumluluklar:**
  - HTTP isteklerini karşılama
  - Authentication/Authorization
  - Request/Response mapping
  - API endpoint'leri

- **Teknolojiler:**
  - ASP.NET Core Web API
  - Swagger/OpenAPI
  - JWT Authentication

### 2. Business Logic Layer (Portfolio.Core)
- **Sorumluluklar:**
  - İş mantığı kuralları
  - Domain modelleri
  - Service interfaces
  - Business validations

- **Teknolojiler:**
  - .NET Core Class Library
  - Repository Pattern
  - Dependency Injection

### 3. Data Access Layer (Portfolio.Infrastructure)
- **Sorumluluklar:**
  - Veritabanı işlemleri
  - Repository implementations
  - Entity Framework konfigürasyonu
  - MSSQL bağlantısı

- **Teknolojiler:**
  - Entity Framework Core
  - SQL Server
  - Repository Pattern

### 4. Shared Layer (Portfolio.Shared)
- **Sorumluluklar:**
  - DTOs (Data Transfer Objects)
  - Common models
  - Constants
  - Enums

## Veritabanı Tasarımı

### Temel Tablolar

1. **Projects**
   - Id, Title, Description, ImageUrl, GitHubUrl, LiveUrl, Technologies, CreatedDate

2. **About**
   - Id, Title, Content, ImageUrl, Skills, Experience

3. **ContactMessages**
   - Id, Name, Email, Subject, Message, CreatedDate, IsRead

4. **Skills**
   - Id, Name, Level, Category

## API Endpoints

### Projects
- GET /api/projects - Tüm projeleri listele
- GET /api/projects/{id} - Belirli proje detayı
- POST /api/projects - Yeni proje ekle (Admin)
- PUT /api/projects/{id} - Proje güncelle (Admin)
- DELETE /api/projects/{id} - Proje sil (Admin)

### About
- GET /api/about - Hakkımda bilgileri
- PUT /api/about - Hakkımda güncelle (Admin)

### Contact
- POST /api/contact - İletişim mesajı gönder
- GET /api/contact/messages - Mesajları listele (Admin)

## Güvenlik

- JWT Token tabanlı authentication
- Role-based authorization (Admin/User)
- CORS konfigürasyonu
- Input validation

## Deployment

- **Backend:** Azure App Service / Docker
- **Frontend:** Vercel / Netlify
- **Database:** Azure SQL Database
