# Portfolio Projesi

Modern, responsive ve özelleştirilebilir portfolio web sitesi. React frontend ve .NET Core backend ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **Admin Paneli**: İçerik yönetimi için admin paneli
- **Proje Galerisi**: Projelerinizi görsel olarak sergileyin
- **İletişim Formu**: Ziyaretçilerden mesaj alın
- **Blog Sistemi**: Deneyimlerinizi paylaşın (opsiyonel)
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş

## 🏗️ Mimari

Bu proje **N-Tier Architecture** prensiplerine uygun olarak geliştirilmiştir:

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: .NET Core Web API + Entity Framework Core
- **Veritabanı**: SQL Server
- **Authentication**: JWT Token

## 📁 Proje Yapısı

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
│   ├── architecture.md
│   ├── api-documentation.md
│   └── setup-guide.md
└── README.md
```

## 🛠️ Teknolojiler

### Backend
- .NET 8.0
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication
- Repository Pattern
- AutoMapper

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Axios
- React Router
- Context API

## 🚀 Hızlı Başlangıç

### Gereksinimler
- .NET 8.0 SDK
- Node.js 18+
- SQL Server

### Kurulum

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd Portfolio
```

2. **Backend'i çalıştırın**
```bash
cd src/Backend/Portfolio.API
dotnet run
```

3. **Frontend'i çalıştırın**
```bash
cd src/Frontend/portfolio-frontend
npm install
npm start
```

Detaylı kurulum rehberi için [setup-guide.md](docs/setup-guide.md) dosyasına bakın.

## 📚 Dokümantasyon

- [Mimari Dokümantasyonu](docs/architecture.md)
- [API Dokümantasyonu](docs/api-documentation.md)
- [Kurulum Rehberi](docs/setup-guide.md)

## 🔧 Geliştirme

### Backend Geliştirme
1. Yeni özellik eklerken önce Core katmanında interface'leri tanımlayın
2. Infrastructure katmanında implementation'ları yazın
3. API katmanında controller'ları oluşturun

### Frontend Geliştirme
1. Component'leri `src/components` klasöründe oluşturun
2. API çağrıları için `src/services` klasörünü kullanın

## 🧪 Test

```bash
# Backend testleri
dotnet test

# Frontend testleri
npm test
```

## 📦 Deployment

### Backend
- Azure App Service
- Docker Container

### Frontend
- Vercel
- Netlify
- GitHub Pages

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Teşekkürler

Bu projeyi mümkün kılan tüm açık kaynak kütüphanelere teşekkürler.
