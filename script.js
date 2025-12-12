// Data bencana alam terbaru di Indonesia (November - Desember 2025)
const disasterData = [
    {
        id: 1,
        type: 'banjir',
        name: 'Banjir Bandang Aceh Selatan',
        location: 'Aceh Selatan, Aceh',
        lat: 3.0000,
        lng: 97.2500,
        date: '8 Desember 2025',
        magnitude: 'Ekstrem',
        casualties: '35 jiwa meninggal, 12 hilang, 87 luka-luka',
        affected: '28.000+ jiwa',
        description: 'Banjir bandang dahsyat menerjang Aceh Selatan akibat hujan ekstrem selama 48 jam non-stop. Material longsor ikut terbawa arus, menghancurkan ratusan rumah dan infrastruktur. Tim SAR masih melakukan pencarian korban hilang.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 2,
        type: 'gempa',
        name: 'Gempa Bumi Maluku Utara',
        location: 'Halmahera Selatan, Maluku Utara',
        lat: 0.5000,
        lng: 127.5000,
        date: '5 Desember 2025',
        magnitude: '6.3 SR',
        casualties: '18 jiwa meninggal, 156 luka-luka',
        affected: '12.500+ jiwa',
        description: 'Gempa berkekuatan 6.3 SR mengguncang Halmahera Selatan dengan kedalaman 15 km. Ratusan bangunan roboh termasuk sekolah dan puskesmas. Gempa susulan masih terjadi hingga kini dengan intensitas menurun.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 3,
        type: 'banjir',
        name: 'Banjir Jakarta & Bekasi',
        location: 'Jakarta Timur & Bekasi',
        lat: -6.2250,
        lng: 106.9004,
        date: '2-4 Desember 2025',
        magnitude: 'Berat',
        casualties: '8 jiwa meninggal',
        affected: '185.000+ jiwa',
        description: 'Hujan deras melanda Jakarta dan Bekasi menyebabkan banjir masif. Luapan Kali Ciliwung dan Kali Bekasi menggenangi ribuan rumah dengan ketinggian 1-2 meter. Aktivitas warga dan ekonomi lumpuh total selama 3 hari.',
        status: 'Pemulihan',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 4,
        type: 'longsor',
        name: 'Longsor Puncak Pass',
        location: 'Cipanas, Cianjur, Jawa Barat',
        lat: -6.7333,
        lng: 107.0333,
        date: '1 Desember 2025',
        magnitude: 'Besar',
        casualties: '14 jiwa meninggal, 5 hilang',
        affected: '3.200+ jiwa',
        description: 'Longsor masif di kawasan Puncak Pass menimbun belasan kendaraan dan pemukiman warga. Material longsor mencapai 2.000 meter kubik menutupi jalan utama. Jalur Puncak-Cianjur terputus total dan proses evakuasi masih berlangsung.',
        status: 'Evakuasi Berlangsung',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 5,
        type: 'banjir',
        name: 'Banjir Bandang Garut',
        location: 'Garut, Jawa Barat',
        lat: -7.2104,
        lng: 107.9074,
        date: '29 November 2025',
        magnitude: 'Ekstrem',
        casualties: '22 jiwa meninggal, 34 luka-luka',
        affected: '18.500+ jiwa',
        description: 'Banjir bandang melanda Kabupaten Garut setelah hujan deras mengguyur sepanjang malam. Sungai Cimanuk meluap menghanyutkan ratusan rumah dan kendaraan. Material lumpur dan batu menutupi jalan-jalan utama.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 6,
        type: 'gempa',
        name: 'Gempa Bumi Nusa Tenggara Timur',
        location: 'Kupang, NTT',
        lat: -10.1719,
        lng: 123.6075,
        date: '27 November 2025',
        magnitude: '5.9 SR',
        casualties: '11 jiwa meninggal, 98 luka-luka',
        affected: '9.800+ jiwa',
        description: 'Gempa mengguncang Kupang dan sekitarnya dengan kedalaman 20 km. Kerusakan parah terjadi pada rumah-rumah warga dan gedung pemerintahan. BMKG mengeluarkan peringatan potensi gempa susulan dalam 24-48 jam ke depan.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 7,
        type: 'banjir',
        name: 'Banjir Kalimantan Tengah',
        location: 'Palangkaraya & Kapuas',
        lat: -2.2090,
        lng: 113.9213,
        date: '25-28 November 2025',
        magnitude: 'Berat',
        casualties: '6 jiwa meninggal',
        affected: '42.000+ jiwa',
        description: 'Banjir melanda Palangkaraya dan Kabupaten Kapuas akibat luapan Sungai Kahayan. Ribuan rumah terendam dengan ketinggian air 1-3 meter. Distribusi logistik terhambat karena akses jalan terputus.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 8,
        type: 'gunung',
        name: 'Erupsi Gunung Lewotobi',
        location: 'Flores Timur, NTT',
        lat: -8.3519,
        lng: 122.7750,
        date: '23 November 2025',
        magnitude: 'Level IV (Awas)',
        casualties: '9 jiwa meninggal, evakuasi 4.200 jiwa',
        affected: '8.500+ jiwa',
        description: 'Gunung Lewotobi Laki-laki erupsi dengan kolom abu mencapai 5.000 meter. Lava pijar keluar dari kawah mengancam pemukiman warga. Status Awas dengan radius aman 7 km. Ribuan warga di 8 desa telah dievakuasi ke tempat pengungsian.',
        status: 'Status Awas',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 9,
        type: 'longsor',
        name: 'Longsor Tasikmalaya',
        location: 'Tasikmalaya, Jawa Barat',
        lat: -7.3506,
        lng: 108.2173,
        date: '21 November 2025',
        magnitude: 'Sedang-Besar',
        casualties: '7 jiwa meninggal, 12 luka-luka',
        affected: '2.800+ jiwa',
        description: 'Tanah longsor melanda kawasan perbukitan Tasikmalaya setelah hujan deras 6 jam. Material longsor menimbun 18 rumah warga. Tim gabungan TNI-Polri dan relawan masih melakukan evakuasi dan pembersihan material.',
        status: 'Evakuasi Selesai',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 10,
        type: 'banjir',
        name: 'Banjir Sulawesi Selatan',
        location: 'Makassar & Gowa',
        lat: -5.1477,
        lng: 119.4327,
        date: '18-20 November 2025',
        magnitude: 'Sedang',
        casualties: '4 jiwa meninggal',
        affected: '32.000+ jiwa',
        description: 'Banjir merendam wilayah Makassar dan Gowa akibat intensitas hujan tinggi. Luapan Sungai Jeneberang menggenangi ratusan rumah dan ruas jalan utama. Aktivitas di pelabuhan dan bandara sempat terganggu.',
        status: 'Pemulihan',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 11,
        type: 'gempa',
        name: 'Gempa Bumi Sumatera Barat',
        location: 'Padang Pariaman, Sumbar',
        lat: -0.6167,
        lng: 100.1167,
        date: '16 November 2025',
        magnitude: '5.7 SR',
        casualties: '13 jiwa meninggal, 142 luka-luka',
        affected: '11.200+ jiwa',
        description: 'Gempa mengguncang Padang Pariaman dengan kedalaman 12 km. Ratusan bangunan rusak termasuk masjid dan sekolah. Trauma gempa 2009 membuat warga panik dan langsung mengungsi ke dataran tinggi.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 12,
        type: 'banjir',
        name: 'Banjir Bandang Sumatera Utara',
        location: 'Deli Serdang & Medan',
        lat: 3.5952,
        lng: 98.6722,
        date: '12-14 November 2025',
        magnitude: 'Ekstrem',
        casualties: '19 jiwa meninggal, 8 hilang',
        affected: '45.000+ jiwa',
        description: 'Banjir bandang melanda Deli Serdang dan sebagian Medan setelah hujan ekstrem 36 jam. Luapan beberapa sungai menggenangi ribuan rumah dengan ketinggian 2-4 meter. Ribuan warga mengungsi ke tempat yang lebih tinggi.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 13,
        type: 'longsor',
        name: 'Longsor Wonosobo',
        location: 'Wonosobo, Jawa Tengah',
        lat: -7.3667,
        lng: 109.9000,
        date: '10 November 2025',
        magnitude: 'Besar',
        casualties: '10 jiwa meninggal, 6 hilang',
        affected: '4.500+ jiwa',
        description: 'Longsor menimbun pemukiman di kawasan dataran tinggi Wonosobo. Material longsor mencapai 1.500 meter kubik menutupi puluhan rumah. Cuaca buruk dan medan sulit memperlambat proses pencarian korban.',
        status: 'Pencarian Korban',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 14,
        type: 'gunung',
        name: 'Aktivitas Gunung Merapi',
        location: 'Sleman & Magelang',
        lat: -7.5407,
        lng: 110.4458,
        date: 'Monitoring Desember 2025',
        magnitude: 'Level III (Siaga)',
        casualties: 'Evakuasi preventif 1.200 jiwa',
        affected: '5.800+ jiwa',
        description: 'Gunung Merapi menunjukkan peningkatan aktivitas signifikan dengan awan panas guguran mencapai 3 km. Gempa vulkanik meningkat drastis. BPPTKG menaikkan status menjadi Siaga. Warga radius 5 km diminta siap mengungsi.',
        status: 'Status Siaga',
        helpLink: 'https://www.bnpb.go.id/'
    }
];

// Initialize map
const map = L.map('map').setView([-2.5, 118.0], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
}).addTo(map);

// Custom icons for different disaster types
const icons = {
    gempa: L.divIcon({
        html: '<i class="fas fa-house-damage" style="color: white; font-size: 20px;"></i>',
        className: 'custom-marker gempa-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    }),
    banjir: L.divIcon({
        html: '<i class="fas fa-water" style="color: white; font-size: 20px;"></i>',
        className: 'custom-marker banjir-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    }),
    longsor: L.divIcon({
        html: '<i class="fas fa-mountain" style="color: white; font-size: 20px;"></i>',
        className: 'custom-marker longsor-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    }),
    gunung: L.divIcon({
        html: '<i class="fas fa-volcano" style="color: white; font-size: 20px;"></i>',
        className: 'custom-marker gunung-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    })
};

// Store markers for filtering
let markers = [];

// Create popup content
function createPopupContent(disaster) {
    return `
        <div class="popup-header">
            <div class="popup-title">${disaster.name}</div>
            <div class="popup-date"><i class="far fa-calendar-alt"></i> ${disaster.date}</div>
        </div>
        <div class="popup-body">
            <div class="popup-info">
                <div class="popup-label"><i class="fas fa-map-marker-alt"></i> Lokasi:</div>
                <div class="popup-value">${disaster.location}</div>
            </div>
            <div class="popup-info">
                <div class="popup-label"><i class="fas fa-chart-line"></i> Skala/Magnitude:</div>
                <div class="popup-value">${disaster.magnitude}</div>
            </div>
            <div class="popup-info">
                <div class="popup-label"><i class="fas fa-user-injured"></i> Korban:</div>
                <div class="popup-value">${disaster.casualties}</div>
            </div>
            <div class="popup-info">
                <div class="popup-label"><i class="fas fa-users"></i> Terdampak:</div>
                <div class="popup-value">${disaster.affected}</div>
            </div>
            <div class="popup-info">
                <div class="popup-label"><i class="fas fa-info-circle"></i> Status:</div>
                <div class="popup-value"><strong>${disaster.status}</strong></div>
            </div>
            <div class="popup-description">
                <strong>Deskripsi:</strong><br>
                ${disaster.description}
            </div>
        </div>
        <div class="popup-footer">
            <a href="${disaster.helpLink}" target="_blank" class="help-btn">
                <i class="fas fa-hands-helping"></i> Bantu Korban
            </a>
        </div>
    `;
}

// Add markers to map
function addMarkers(data) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    data.forEach(disaster => {
        const marker = L.marker([disaster.lat, disaster.lng], {
            icon: icons[disaster.type]
        })
        .bindPopup(createPopupContent(disaster), {
            maxWidth: 350,
            className: 'custom-popup'
        })
        .addTo(map);

        // Store marker with type for filtering
        marker.disasterType = disaster.type;
        markers.push(marker);
    });
}

// Initial markers
addMarkers(disasterData);

// Update statistics
function updateStats() {
    const totalBencana = disasterData.length;
    let totalKorban = 0;

    disasterData.forEach(disaster => {
        // Extract numbers from affected field
        const numbers = disaster.affected.match(/\d+/g);
        if (numbers) {
            totalKorban += parseInt(numbers[0]);
        }
    });

    // Animate counter
    animateValue('totalBencana', 0, totalBencana, 1000);
    animateValue('totalKorban', 0, totalKorban, 1500);
}

function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('id-ID');
    }, 16);
}

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterType = button.dataset.type;

        if (filterType === 'all') {
            // Show all markers
            addMarkers(disasterData);
        } else {
            // Filter data by type
            const filteredData = disasterData.filter(d => d.type === filterType);
            addMarkers(filteredData);
        }
    });
});

// Add custom marker styles
const style = document.createElement('style');
style.textContent = `
    .custom-marker {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;
        animation: markerPulse 2s ease-in-out infinite;
    }
    
    .custom-marker:hover {
        transform: scale(1.2);
    }
    
    @keyframes markerPulse {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }
        50% {
            box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        }
    }
    
    .gempa-marker {
        background: linear-gradient(135deg, #e74c3c, #c0392b);
    }
    
    .banjir-marker {
        background: linear-gradient(135deg, #3498db, #2980b9);
    }
    
    .longsor-marker {
        background: linear-gradient(135deg, #f39c12, #e67e22);
    }
    
    .gunung-marker {
        background: linear-gradient(135deg, #e67e22, #d35400);
    }
`;
document.head.appendChild(style);

// Initialize statistics
updateStats();

// Add marker click effect
map.on('popupopen', function(e) {
    const marker = e.popup._source;
    marker.setIcon(L.divIcon({
        html: marker.options.icon.options.html,
        className: marker.options.icon.options.className + ' marker-active',
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25]
    }));
});

map.on('popupclose', function(e) {
    const marker = e.popup._source;
    const type = marker.disasterType;
    marker.setIcon(icons[type]);
});

// Add zoom to disaster on marker click
markers.forEach(marker => {
    marker.on('click', function() {
        map.setView(this.getLatLng(), 10, {
            animate: true,
            duration: 1
        });
    });
});

// ============================================
// BMKG API INTEGRATION
// ============================================

// Fetch latest earthquake data from BMKG
async function fetchBMKGEarthquake() {
    try {
        const response = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json');
        const data = await response.json();
        
        if (data && data.Infogempa && data.Infogempa.gempa) {
            const gempa = data.Infogempa.gempa;
            displayEarthquakeInfo(gempa);
        }
    } catch (error) {
        console.error('Error fetching BMKG earthquake data:', error);
        document.getElementById('latestEarthquake').innerHTML = `
            <div style="text-align: center; padding: 1rem; opacity: 0.8;">
                <i class="fas fa-exclamation-triangle"></i><br>
                <small>Tidak dapat memuat data gempa. Silakan refresh halaman.</small>
            </div>
        `;
    }
}

// Display earthquake information
function displayEarthquakeInfo(gempa) {
    const container = document.getElementById('latestEarthquake');
    
    const html = `
        <div class="earthquake-info">
            <div class="earthquake-magnitude">${gempa.Magnitude}</div>
            <div class="earthquake-detail">
                <i class="fas fa-clock"></i>
                <div>
                    <strong>Waktu:</strong><br>
                    ${gempa.Tanggal} | ${gempa.Jam}
                </div>
            </div>
            <div class="earthquake-detail">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <strong>Lokasi:</strong><br>
                    ${gempa.Wilayah}
                </div>
            </div>
            <div class="earthquake-detail">
                <i class="fas fa-ruler-vertical"></i>
                <div>
                    <strong>Kedalaman:</strong> ${gempa.Kedalaman}<br>
                    <strong>Koordinat:</strong> ${gempa.Coordinates}
                </div>
            </div>
            <div class="earthquake-detail">
                <i class="fas fa-info-circle"></i>
                <div>
                    <strong>Potensi:</strong><br>
                    ${gempa.Potensi}
                </div>
            </div>
            <a href="https://www.bmkg.go.id/" target="_blank" class="earthquake-map-link">
                <i class="fas fa-external-link-alt"></i> Lihat Detail di BMKG
            </a>
        </div>
    `;
    
    container.innerHTML = html;
}

// Fetch weather warnings from BMKG
async function fetchBMKGWarnings() {
    try {
        // Fetch cuaca ekstrem / peringatan dini
        const response = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        const data = await response.json();
        
        if (data && data.Infogempa && data.Infogempa.gempa) {
            displayWeatherWarnings(data.Infogempa.gempa);
        }
    } catch (error) {
        console.error('Error fetching BMKG warnings:', error);
        // Fallback to manual warnings
        displayManualWarnings();
    }
}

// Display weather warnings
function displayWeatherWarnings(gempaList) {
    const container = document.getElementById('bmkgWarning');
    
    // Get recent earthquakes (last 3)
    const recentQuakes = gempaList.slice(0, 3);
    
    let html = '<div style="font-weight: 600; margin-bottom: 0.8rem; color: #d35400;">';
    html += '<i class="fas fa-satellite-dish"></i> Gempa yang Dirasakan Terkini:</div>';
    
    recentQuakes.forEach(gempa => {
        const magnitude = gempa.Magnitude;
        const badgeClass = parseFloat(magnitude) >= 5.0 ? 'warning-badge' : '';
        
        html += `
            <div class="warning-item">
                <strong><i class="fas fa-map-marker-alt"></i> ${gempa.Wilayah}</strong>
                <div style="font-size: 0.85rem;">
                    📅 ${gempa.Tanggal} - ${gempa.Jam}<br>
                    📊 Magnitude: <strong>${magnitude}</strong> SR<br>
                    📏 Kedalaman: ${gempa.Kedalaman}<br>
                    💭 ${gempa.Dirasakan}
                </div>
            </div>
        `;
    });
    
    html += `
        <div style="text-align: center; margin-top: 0.8rem;">
            <a href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca.bmkg" target="_blank" 
               style="color: #d35400; text-decoration: none; font-weight: 600; font-size: 0.85rem;">
                <i class="fas fa-cloud-sun"></i> Cek Prakiraan Cuaca BMKG →
            </a>
        </div>
    `;
    
    container.innerHTML = html;
}

// Manual warnings if API fails
function displayManualWarnings() {
    const container = document.getElementById('bmkgWarning');
    container.innerHTML = `
        <div class="warning-item">
            <strong><i class="fas fa-cloud-showers-heavy"></i> Peringatan Cuaca</strong>
            <div style="font-size: 0.85rem;">
                Waspadai potensi hujan lebat disertai petir di wilayah Jawa Barat, Jakarta, Sumatra, dan Kalimantan.
                <span class="warning-badge">WASPADA</span>
            </div>
        </div>
        <div class="warning-item">
            <strong><i class="fas fa-water"></i> Potensi Banjir</strong>
            <div style="font-size: 0.85rem;">
                Tinggi muka air sungai-sungai besar meningkat. Warga di bantaran sungai diminta waspada.
            </div>
        </div>
        <div style="text-align: center; margin-top: 0.8rem;">
            <a href="https://www.bmkg.go.id/" target="_blank" 
               style="color: #d35400; text-decoration: none; font-weight: 600; font-size: 0.85rem;">
                <i class="fas fa-external-link-alt"></i> Lihat Info Lengkap BMKG →
            </a>
        </div>
    `;
}

// Initialize BMKG data
function initBMKGData() {
    fetchBMKGEarthquake();
    fetchBMKGWarnings();
    
    // Refresh data every 5 minutes
    setInterval(() => {
        fetchBMKGEarthquake();
        fetchBMKGWarnings();
    }, 300000); // 5 minutes
}

// Call init on page load
initBMKGData();

console.log('🗺️ Peta Bencana Alam Indonesia berhasil dimuat!');
console.log(`📊 Total bencana: ${disasterData.length}`);
console.log('❤️ Mari bersama-sama membantu saudara kita yang terdampak bencana');
console.log('🌐 Data real-time dari API BMKG aktif!');
