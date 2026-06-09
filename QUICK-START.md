# 🚀 QUICK START - LMS English PWA

## Langkah 1: Download Semua File
- Download semua file dari folder output ini
- Extract ke folder `LMSDTI-English/` di PC Anda

## Langkah 2: Ganti Icon Placeholder

### Cara Cepat (Direkomendasikan):
1. Buka https://favicon.io/favicon-generator/
2. Atur:
   - Text: "LMS"
   - Background: #064e3b
   - Font: Poppins Bold
   - Font Size: 110
   - Color: #ffffff
3. Download ZIP
4. Extract ke folder `icons/`
5. Rename file sesuai manifest.json:
   - favicon-16x16.png ✓
   - favicon-32x32.png ✓
   - apple-touch-icon.png (180x180) ✓

### Untuk PWA Icons (72-512px):
1. Buka https://www.pwabuilder.com/imageGenerator
2. Upload logo PNG (512x512px, transparan)
3. Download hasilnya
4. Copy semua file ke folder `icons/`

## Langkah 3: Rename File Utama
- Ganti nama `LMS-English-DTI.html` → `index.html`
- Atau biarkan saja, tapi pastikan link di manifest.json & sw.js sesuai

## Langkah 4: Push ke GitHub
```bash
cd LMSDTI-English
git init
git add .
git commit -m "Initial PWA commit"
git remote add origin https://github.com/[USERNAME]/LMSDTI-English.git
git push -u origin main
```

## Langkah 5: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Settings → Pages
3. Source: Deploy from a branch → main
4. Folder: / (root)
5. Save → tunggu 1-2 menit

## Langkah 6: Verifikasi PWA
1. Buka `https://[username].github.io/LMSDTI-English/`
2. F12 → Application tab
3. Cek:
   - ✅ Manifest terdeteksi
   - ✅ Service Worker aktif
   - ✅ Cache berisi file

## Langkah 7: Install di Mobile
### Android (Chrome):
- Buka halaman → akan muncul popup "Add to Home Screen"
- Atau: Menu (⋮) → "Add to Home Screen"

### iPhone (Safari):
- Buka halaman → tap Share (⬆️)
- Scroll → "Add to Home Screen"
- Tap "Add"

## ✅ Ceklist Sebelum Launch

- [ ] Icon semua ukuran tersedia di folder `icons/`
- [ ] Google Sheet di-set "Anyone with link can view"
- [ ] File `index.html` atau `LMS-English-DTI.html` di root
- [ ] `manifest.json` dan `sw.js` di root
- [ ] GitHub Pages aktif dan HTTPS
- [ ] Test di Chrome DevTools → Lighthouse PWA score 90+
- [ ] Test di iPhone Safari (Add to Home Screen)
- [ ] Test di Android Chrome (Install prompt)
- [ ] Test offline mode (matikan wifi, reload)

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| "Cannot read manifest" | Cek path manifest.json, pastikan di root |
| Service Worker not found | Cek path sw.js, pastikan di root |
| Icon blur/pixelated | Buat icon dari sumber 512x512px, jangan upscale |
| Data tidak muncul | Cek console (F12) → Network → lihat error fetch |
| iOS tidak install | iOS tidak support auto-install, user harus manual add |
| Update tidak muncul | Ganti versi di sw.js, push, hard reload (Ctrl+Shift+R) |

---

**Siap Launch! 🚀**
