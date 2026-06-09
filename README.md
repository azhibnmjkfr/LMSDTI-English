# LMS English - PWA Setup Guide

## 📁 Struktur Folder

Setelah di-extract, pastikan struktur folder Anda seperti ini:

```
LMSDTI-English/
├── LMS-English-DTI.html      (File utama - rename dari index.html jika perlu)
├── manifest.json              (PWA Manifest)
├── sw.js                      (Service Worker)
├── icons/                     (Folder icon - BUAT SENDIRI)
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── apple-touch-icon-120x120.png
│   ├── apple-touch-icon-152x152.png
│   ├── apple-touch-icon-76x76.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   ├── safari-pinned-tab.svg
│   └── og-image.png          (Gambar untuk social sharing)
└── screenshots/               (Folder screenshot - OPSIONAL)
    ├── screenshot-mobile.png
    └── screenshot-desktop.png
```

## 🎨 Membuat Icon

### Opsi 1: Generator Online (Paling Mudah)
1. Kunjungi [https://favicon.io/](https://favicon.io/) atau [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload logo/icon Anda (minimal 512x512px, format PNG)
3. Download hasilnya
4. Extract ke folder `icons/`

### Opsi 2: Manual dengan Canva/Photoshop
Buat icon dengan ukuran berikut:
- **favicon**: 16x16, 32x32
- **apple-touch-icon**: 180x180 (iPhone), 152x152 (iPad), 120x120, 76x76
- **PWA icons**: 72x72, 96x96, 128x128, 144x144, 192x192, 384x384, 512x512

### Warna & Style
- **Background**: #064e3b (hijau tua) atau putih
- **Icon**: Logo/book/education symbol
- **Format**: PNG dengan transparansi (untuk maskable)
- **og-image.png**: 1200x630px untuk social media preview

## 🚀 Setup GitHub Pages

1. Buat repository baru: `LMSDTI-English`
2. Upload SEMUA file ke repository
3. Settings → Pages → Source: Deploy from a branch → Main branch
4. Tunggu 1-2 menit, lalu akses: `https://[username].github.io/LMSDTI-English/`

## ⚠️ Catatan Penting

### Google Sheets Access
Pastikan Google Sheet Anda di-set ke **"Anyone with the link can view"**:
1. Buka Google Sheet
2. Klik Share → Change to anyone with the link
3. Pilih "Viewer"

### HTTPS Wajib
PWA hanya berjalan di HTTPS. GitHub Pages otomatis HTTPS, jadi aman.

### iOS Specific
- iOS tidak support "Add to Home Screen" otomatis seperti Android
- User harus tap Share → "Add to Home Screen"
- Untuk iOS 16+, PWA berjalan baik dengan standalone mode

### Android Specific
- Chrome akan otomatis menampilkan "Add to Home Screen" popup
- Support offline caching penuh

## 🔧 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Icon tidak muncul | Cek nama file dan path di manifest.json |
| PWA tidak terinstall | Pastikan manifest.json & sw.js accessible |
| Data tidak load | Cek koneksi & izin Google Sheet |
| Service worker error | Cek console browser (F12 → Application → Service Workers) |

## 📱 Testing

### Chrome DevTools
1. Buka halaman
2. F12 → Application tab
3. Cek: Manifest, Service Workers, Cache Storage

### Lighthouse Audit
1. F12 → Lighthouse tab
2. Centang "PWA"
3. Generate report
4. Target: Score 90+

## 📝 Update Aplikasi

Saat update file:
1. Ubah versi di `sw.js` (ganti `CACHE_NAME`)
2. Push ke GitHub
3. User akan otomatis mendapat update saat reload

---

**Dibuat oleh**: Ahmad Zaman Huri, S.Pd.
**Sekolah**: MTsT Daarut Tahfizh
**Tahun**: 2026
