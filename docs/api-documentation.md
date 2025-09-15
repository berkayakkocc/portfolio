# Portfolio API Dokümantasyonu

## Genel Bilgiler

- **Base URL**: `https://localhost:7001/api`
- **Authentication**: JWT Bearer Token
- **Content-Type**: `application/json`

## Authentication

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires": "2024-12-31T23:59:59Z"
}
```

## Projects API

### Tüm Projeleri Listele
```http
GET /api/projects
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "E-Commerce Website",
    "description": "Modern e-commerce platform",
    "imageUrl": "https://example.com/image.jpg",
    "githubUrl": "https://github.com/user/project",
    "liveUrl": "https://project.com",
    "technologies": ["React", "Node.js", "MongoDB"],
    "createdDate": "2024-01-15T10:30:00Z"
  }
]
```

### Belirli Proje Detayı
```http
GET /api/projects/{id}
```

### Yeni Proje Ekle (Admin)
```http
POST /api/projects
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "New Project",
  "description": "Project description",
  "imageUrl": "https://example.com/image.jpg",
  "githubUrl": "https://github.com/user/project",
  "liveUrl": "https://project.com",
  "technologies": ["React", "TypeScript"]
}
```

### Proje Güncelle (Admin)
```http
PUT /api/projects/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated Project Title",
  "description": "Updated description"
}
```

### Proje Sil (Admin)
```http
DELETE /api/projects/{id}
Authorization: Bearer {token}
```

## About API

### Hakkımda Bilgilerini Getir
```http
GET /api/about
```

**Response:**
```json
{
  "id": 1,
  "title": "About Me",
  "content": "I am a passionate developer...",
  "imageUrl": "https://example.com/profile.jpg",
  "skills": ["C#", "React", "SQL Server"],
  "experience": "5+ years"
}
```

### Hakkımda Güncelle (Admin)
```http
PUT /api/about
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "About Me",
  "content": "Updated content...",
  "imageUrl": "https://example.com/new-profile.jpg"
}
```

## Contact API

### İletişim Mesajı Gönder
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### Mesajları Listele (Admin)
```http
GET /api/contact/messages
Authorization: Bearer {token}
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss...",
    "createdDate": "2024-01-15T10:30:00Z",
    "isRead": false
  }
]
```

## Skills API

### Yetenekleri Listele
```http
GET /api/skills
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "C#",
    "level": "Expert",
    "category": "Backend"
  },
  {
    "id": 2,
    "name": "React",
    "level": "Advanced",
    "category": "Frontend"
  }
]
```

## Hata Kodları

| Kod | Açıklama |
|-----|----------|
| 200 | Başarılı |
| 201 | Oluşturuldu |
| 400 | Hatalı İstek |
| 401 | Yetkisiz |
| 403 | Yasak |
| 404 | Bulunamadı |
| 500 | Sunucu Hatası |

## Hata Response Formatı

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

## Rate Limiting

- **Genel API**: 1000 istek/saat
- **Authentication**: 10 istek/dakika
- **Contact Form**: 5 istek/saat

## CORS

Frontend domain'leri:
- `http://localhost:3000` (Development)
- `https://yourdomain.com` (Production)
