# 🗺️ Peta Bencana Alam Indonesia - Peduli & Berbagi

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://github.com)
[![Leaflet.js](https://img.shields.io/badge/Leaflet.js-1.9.4-green)](https://leafletjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Website interaktif yang menampilkan peta bencana alam terbaru di Indonesia dengan informasi lengkap dan fitur untuk membantu korban bencana.

## 🌟 Fitur Utama

- **Peta Interaktif**: Menggunakan Leaflet.js untuk menampilkan lokasi bencana secara real-time
- **Data Terbaru**: Informasi bencana alam yang terjadi di Indonesia (2022-2024)
- **Filter Bencana**: Filter berdasarkan jenis bencana (Gempa, Banjir, Longsor, Gunung Berapi)
- **Statistik Real-time**: Menampilkan total kejadian dan korban terdampak
- **Informasi Detail**: Setiap marker berisi informasi lengkap (tanggal, korban, deskripsi, status)
- **Tombol Donasi**: Link langsung ke BNPB, PMI, dan Kitabisa
- **Kontak Darurat**: Nomor telepon penting untuk tanggap darurat
- **Responsive Design**: Tampil sempurna di desktop, tablet, dan mobile
- **UI Modern**: Gradient colors, animasi, dan design yang menarik

## 🚀 Demo

Buka file `index.html` di browser atau deploy ke GitHub Pages untuk akses online.

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/Alvrr/GIS_PetaBencana.git
```

2. Masuk ke folder project:
```bash
cd GIS_PetaBencana
```

3. Buka `index.html` di browser favorit Anda

## 🌐 Deploy ke GitHub Pages

1. Push semua file ke repository GitHub Anda
2. Pergi ke **Settings** > **Pages**
3. Pilih branch `main` dan folder `/root`
4. Klik **Save**
5. Website akan live dalam beberapa menit di `https://Alvrr.github.io/GIS_PetaBencana/`

## 📊 Data Bencana

Website ini mencakup 12+ kejadian bencana alam terbaru di Indonesia:

- **Gempa Bumi**: Cianjur, Lombok, Maluku
- **Banjir**: Sumatera Barat, Jakarta, Aceh, Kalimantan Selatan
- **Gunung Berapi**: Marapi, Semeru
- **Tanah Longsor**: Purworejo, Puncak

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dengan gradient dan animasi
- **JavaScript (ES6)** - Logika aplikasi
- **Leaflet.js 1.9.4** - Library peta interaktif
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Poppins)** - Typography

## 📁 Struktur File

```
GIS_PetaBencana/
├── index.html          # Struktur HTML utama
├── style.css           # Styling dan animasi
├── script.js           # JavaScript dan data bencana
└── README.md          # Dokumentasi
```

## 🎨 Customisasi

### Menambah Data Bencana Baru

Edit file `script.js` dan tambahkan object baru di array `disasterData`:

```javascript
{
    id: 13,
    type: 'gempa', // gempa, banjir, longsor, gunung
    name: 'Nama Bencana',
    location: 'Lokasi',
    lat: -6.2088,
    lng: 106.8456,
    date: 'Tanggal',
    magnitude: 'Skala',
    casualties: 'Jumlah Korban',
    affected: 'Jumlah Terdampak',
    description: 'Deskripsi lengkap',
    status: 'Status Terkini',
    helpLink: 'https://link-bantuan.com'
}
```

### Mengubah Warna

Edit file `style.css` untuk mengubah gradient colors dan theme:

```css
/* Contoh: Ubah header gradient */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak Darurat

- **BNPB**: 117 / 021-29827444
- **PMI**: 021-7992325
- **Basarnas**: 115
- **Posko Bencana**: 129

## 💝 Donasi

Mari bantu saudara kita yang terdampak bencana:

- [BNPB](https://www.bnpb.go.id/)
- [PMI](https://pmikabupaten.pmi.or.id/)
- [Kitabisa](https://kitabisa.com/campaign/bencanaalam)

## 📄 Lisensi

Project ini menggunakan lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Terima Kasih

Dibuat dengan ❤️ dan kepedulian untuk Indonesia. Data bersumber dari BNPB, BMKG, dan berbagai sumber terpercaya.

---

**Note**: Data bencana adalah data aktual dari berbagai sumber berita dan BNPB. Untuk informasi terkini, selalu cek [BNPB.go.id](https://www.bnpb.go.id/)

## 📸 Screenshot

Website menampilkan:
- Peta interaktif dengan marker bencana
- Sidebar dengan statistik dan filter
- Popup detail bencana
- Tombol donasi dan kontak darurat
- Design responsive dan modern