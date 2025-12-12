# 🌐 Dokumentasi API BMKG

## Overview

Website ini terintegrasi dengan **API resmi BMKG** (Badan Meteorologi, Klimatologi, dan Geofisika) untuk menampilkan data bencana real-time, khususnya gempa bumi dan peringatan cuaca.

## API Endpoints yang Digunakan

### 1. Gempa Bumi Terkini (Autogempa)

**URL**: `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`

**Deskripsi**: Menampilkan info gempa bumi terkini yang terjadi di Indonesia

**Response Data**:
```json
{
  "Infogempa": {
    "gempa": {
      "Tanggal": "12 Des 2025",
      "Jam": "14:35:21 WIB",
      "DateTime": "2025-12-12T07:35:21+00:00",
      "Coordinates": "-7.52,110.44",
      "Lintang": "7.52 LS",
      "Bujur": "110.44 BT",
      "Magnitude": "5.8",
      "Kedalaman": "10 km",
      "Wilayah": "Pusat gempa berada di darat 8 km barat daya Sleman",
      "Potensi": "Gempa ini dirasakan untuk diteruskan pada masyarakat",
      "Shakemap": "20251212143521.mmi.jpg"
    }
  }
}
```

**Data yang Ditampilkan**:
- ⏰ Waktu gempa (tanggal & jam)
- 📍 Lokasi dan wilayah
- 📊 Magnitude (kekuatan gempa)
- 📏 Kedalaman
- 🗺️ Koordinat
- ⚠️ Potensi dampak

### 2. Gempa yang Dirasakan

**URL**: `https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`

**Deskripsi**: Menampilkan daftar gempa yang dirasakan masyarakat

**Response Data**:
```json
{
  "Infogempa": {
    "gempa": [
      {
        "Tanggal": "12 Des 2025",
        "Jam": "12:15:30 WIB",
        "DateTime": "2025-12-12T05:15:30+00:00",
        "Coordinates": "-6.82,107.14",
        "Lintang": "6.82 LS",
        "Bujur": "107.14 BT",
        "Magnitude": "4.2",
        "Kedalaman": "10 km",
        "Wilayah": "Pusat gempa berada di darat 15 km Tenggara Cianjur",
        "Dirasakan": "II - III Cianjur, II Sukabumi"
      }
    ]
  }
}
```

**Data yang Ditampilkan**:
- 📍 Lokasi gempa
- 📊 Magnitude
- 🏘️ Wilayah yang merasakan (skala MMI)
- ⏰ Waktu kejadian

## Implementasi di Website

### Inisialisasi

```javascript
// Auto-fetch saat page load
initBMKGData();

// Refresh otomatis setiap 5 menit
setInterval(() => {
    fetchBMKGEarthquake();
    fetchBMKGWarnings();
}, 300000);
```

### Fetch Gempa Terkini

```javascript
async function fetchBMKGEarthquake() {
    try {
        const response = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json');
        const data = await response.json();
        
        if (data && data.Infogempa && data.Infogempa.gempa) {
            displayEarthquakeInfo(data.Infogempa.gempa);
        }
    } catch (error) {
        console.error('Error fetching BMKG data:', error);
    }
}
```

### Fetch Peringatan

```javascript
async function fetchBMKGWarnings() {
    try {
        const response = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        const data = await response.json();
        
        if (data && data.Infogempa && data.Infogempa.gempa) {
            displayWeatherWarnings(data.Infogempa.gempa);
        }
    } catch (error) {
        console.error('Error:', error);
        displayManualWarnings(); // Fallback
    }
}
```

## Fitur yang Diimplementasi

### 1. Gempa Terkini (Real-time)
- ✅ Magnitude besar dan terkini
- ✅ Lokasi detail dengan koordinat
- ✅ Waktu kejadian
- ✅ Kedalaman gempa
- ✅ Potensi dampak/tsunami
- ✅ Link ke detail BMKG

### 2. Peringatan Dini
- ✅ 3 gempa dirasakan terakhir
- ✅ Info wilayah yang merasakan
- ✅ Badge peringatan untuk magnitude >= 5.0
- ✅ Link ke prakiraan cuaca BMKG

### 3. UI/UX
- 🎨 Section khusus dengan gradient merah (gempa)
- 🎨 Section kuning-orange (peringatan)
- ⚡ Loading spinner saat fetch data
- 🔄 Auto-refresh setiap 5 menit
- 📱 Responsive design
- ⚠️ Animasi warning blinking

## Error Handling

Website memiliki fallback jika API BMKG tidak dapat diakses:

```javascript
catch (error) {
    console.error('Error:', error);
    // Tampilkan pesan error atau data manual
    displayManualWarnings();
}
```

## Link BMKG Resmi

Untuk informasi lebih lengkap:

- **Website BMKG**: https://www.bmkg.go.id/
- **Info Gempa**: https://www.bmkg.go.id/gempabumi/
- **Prakiraan Cuaca**: https://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg
- **Peringatan Dini**: https://www.bmkg.go.id/cuaca/peringatan-dini-cuaca.bmkg

## Update Schedule

- **Data Gempa**: Update otomatis dari BMKG setiap ada gempa baru
- **Refresh Website**: Setiap 5 menit
- **Manual Refresh**: Refresh browser untuk update instant

## Browser Compatibility

API ini menggunakan `fetch()` modern JavaScript. Kompatibel dengan:
- ✅ Chrome/Edge 42+
- ✅ Firefox 39+
- ✅ Safari 10.1+
- ✅ Opera 29+

## Notes

- Data berasal dari **API resmi BMKG** yang bersifat publik
- Tidak memerlukan API key atau autentikasi
- Data di-update real-time oleh BMKG
- Pastikan koneksi internet stabil untuk fetch data

## Troubleshooting

**Data tidak muncul?**
- Cek koneksi internet
- Buka Developer Console (F12) untuk lihat error
- Tunggu beberapa detik, API mungkin sedang sibuk
- Refresh halaman

**Data lama/tidak update?**
- Pastikan auto-refresh aktif (setiap 5 menit)
- Manual refresh browser (Ctrl+F5)
- Cek status website BMKG

---

💡 **Tip**: Website ini menggunakan data **real-time langsung dari server BMKG**, jadi informasinya selalu ter-update!
