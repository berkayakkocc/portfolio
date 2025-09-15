# Portfolio Projesi - Kurulum Rehberi

## Gereksinimler

### Backend Gereksinimleri
- .NET 8.0 SDK
- SQL Server (LocalDB veya Full SQL Server)
- Visual Studio 2022 veya VS Code
- Git

### Frontend Gereksinimleri
- Node.js 18+
- npm veya yarn
- Modern web browser

## Kurulum Adımları

### 1. Projeyi Klonlama
```bash
git clone <repository-url>
cd Portfolio
```

### 2. Backend Kurulumu

#### Solution'ı Açma
```bash
dotnet sln build
```

#### Veritabanı Konfigürasyonu
1. `appsettings.json` dosyasında connection string'i güncelleyin:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=PortfolioDB;Trusted_Connection=true;MultipleActiveResultSets=true"
  }
}
```

2. Migration'ları çalıştırın:
```bash
cd src/Backend/Portfolio.API
dotnet ef database update
```

#### Projeyi Çalıştırma
```bash
cd src/Backend/Portfolio.API
dotnet run
```

API şu adreste çalışacak: `https://localhost:7001`

### 3. Frontend Kurulumu

#### Bağımlılıkları Yükleme
```bash
cd src/Frontend/portfolio-frontend
npm install
```

#### Geliştirme Sunucusunu Başlatma
```bash
npm start
```

Frontend şu adreste çalışacak: `http://localhost:3000`

## Proje Yapısı

### Backend Projeleri
- **Portfolio.API**: Web API katmanı
- **Portfolio.Core**: İş mantığı katmanı
- **Portfolio.Infrastructure**: Veri erişim katmanı
- **Portfolio.Shared**: Paylaşılan modeller

### Frontend
- **portfolio-frontend**: React uygulaması

## Geliştirme

### Backend Geliştirme
1. Yeni özellik eklerken önce Core katmanında interface'leri tanımlayın
2. Infrastructure katmanında implementation'ları yazın
3. API katmanında controller'ları oluşturun
4. Dependency injection'ı yapılandırın

### Frontend Geliştirme
1. Component'leri `src/components` klasöründe oluşturun
2. API çağrıları için `src/services` klasörünü kullanın
3. State management için Context API veya Redux kullanın

## Test

### Backend Testleri
```bash
dotnet test
```

### Frontend Testleri
```bash
npm test
```

## Deployment

### Backend Deployment
1. Azure App Service'e publish
2. SQL Database oluştur
3. Connection string'i güncelle

### Frontend Deployment
1. Build al: `npm run build`
2. Vercel/Netlify'e deploy et

## Sorun Giderme

### Yaygın Sorunlar

1. **Migration Hatası**
   - Connection string'i kontrol edin
   - SQL Server'ın çalıştığından emin olun

2. **CORS Hatası**
   - API'de CORS policy'sini kontrol edin
   - Frontend URL'ini allow list'e ekleyin

3. **Port Çakışması**
   - Farklı port kullanın
   - `launchSettings.json`'ı güncelleyin

## Katkıda Bulunma

1. Feature branch oluşturun
2. Değişikliklerinizi commit edin
3. Pull request açın
4. Code review'den geçin
