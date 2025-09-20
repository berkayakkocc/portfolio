# Proje Görselleri

Bu klasörde projelerinizin görsellerini saklayabilirsiniz.

## Kullanım

1. Proje görsellerinizi bu klasöre ekleyin
2. Görsel dosya adlarını `projectService.ts` veya veritabanınızda `imageUrl` olarak belirtin
3. Görseller otomatik olarak `/images/projects/` yolundan yüklenecektir

## Desteklenen Formatlar

- JPG/JPEG
- PNG
- WebP
- SVG

## Örnek Kullanım

```typescript
// Veritabanında veya projectService'te
{
  id: 1,
  title: 'E-Commerce Platform',
  imageUrl: 'ecommerce-platform.jpg', // Sadece dosya adı
  // ... diğer alanlar
}
```

## Fallback Görsel

Eğer bir proje için görsel belirtilmemişse veya görsel yüklenemezse, `default-project.jpg` kullanılacaktır.

## Cache Temizleme

Görselleri değiştirdiğinizde cache'i temizlemek için:
1. Tarayıcı cache'ini temizleyin (Ctrl+F5)
2. Veya görsel dosya adına timestamp ekleyin: `project-image-v2.jpg`
