# Proje Görselleri Kullanım Kılavuzu

## 🎯 Özet

Projelerim bölümündeki görseller artık dinamik hale getirildi! Artık görselleri kolayca değiştirebilirsiniz.

## 📁 Klasör Yapısı

```
public/
└── images/
    └── projects/
        ├── README.md
        ├── default-project.jpg          # Varsayılan görsel
        ├── ecommerce-platform.jpg       # E-Commerce projesi
        ├── task-management.jpg          # Task Management projesi
        └── portfolio-website.jpg        # Portfolio projesi
```

## 🔧 Nasıl Kullanılır

### 1. Yeni Görsel Ekleme

1. Görselinizi `public/images/projects/` klasörüne ekleyin
2. Veritabanında veya `projectService.ts`'te `imageUrl` alanını güncelleyin:

```typescript
{
  id: 1,
  title: 'Yeni Proje',
  imageUrl: 'yeni-proje-gorseli.jpg', // Sadece dosya adı
  // ... diğer alanlar
}
```

### 2. Mevcut Görseli Değiştirme

1. Eski görseli silin veya yeni görselle değiştirin
2. Dosya adını aynı tutun veya veritabanını güncelleyin

### 3. External URL Kullanma

```typescript
{
  id: 1,
  title: 'External Proje',
  imageUrl: 'https://example.com/proje-gorseli.jpg', // Tam URL
  // ... diğer alanlar
}
```

## 🚀 Özellikler

### ✅ Dinamik Görsel Yükleme
- Local görseller: `/images/projects/dosya-adi.jpg`
- External URL'ler: Doğrudan kullanılır
- Fallback: Görsel yoksa `default-project.jpg` kullanılır

### ✅ Hata Yönetimi
- Görsel yüklenemezse otomatik fallback
- `onError` handler ile güvenli yükleme

### ✅ Cache Temizleme
- `addImageCacheBuster()` fonksiyonu ile cache temizleme
- Timestamp ekleme ile güncel görseller

### ✅ Responsive Tasarım
- Tüm görseller 500x300px boyutunda optimize edilir
- `object-cover` ile orantılı boyutlandırma

## 📝 Örnek Kullanım

```typescript
// projectService.ts'te
import { getProjectImageUrl, addImageCacheBuster } from './projectService';

// Görsel URL'i al
const imageUrl = getProjectImageUrl(project.imageUrl);

// Cache temizleme ile
const imageUrlWithCache = addImageCacheBuster(project.imageUrl);
```

## 🎨 Görsel Önerileri

- **Boyut:** 500x300px (16:9 oranı)
- **Format:** JPG, PNG, WebP
- **Kalite:** Yüksek kalite, düşük dosya boyutu
- **İçerik:** Projenin ana özelliklerini yansıtan görsel

## 🔄 Güncelleme Süreci

1. Yeni görseli `public/images/projects/` klasörüne ekleyin
2. Veritabanında `imageUrl` alanını güncelleyin
3. Tarayıcı cache'ini temizleyin (Ctrl+F5)
4. Değişiklikleri kontrol edin

## 🛠️ Geliştirici Notları

- Görseller `public` klasöründen servis edilir
- Vite otomatik olarak static dosyaları işler
- Production'da CDN kullanılabilir
- Görsel optimizasyonu için WebP formatı önerilir
