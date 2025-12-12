// Data bencana alam terbaru di Indonesia (2024)
const disasterData = [
    {
        id: 1,
        type: 'gempa',
        name: 'Gempa Bumi Cianjur',
        location: 'Cianjur, Jawa Barat',
        lat: -6.8167,
        lng: 107.1425,
        date: '21 November 2022 (Update 2024)',
        magnitude: '5.6 SR',
        casualties: '602 jiwa meninggal, 7.729 luka-luka',
        affected: '73.000+ jiwa',
        description: 'Gempa bumi mengguncang Kabupaten Cianjur dengan kerusakan parah pada ribuan bangunan. Dampak masih terasa hingga 2024 dengan upaya rehabilitasi berkelanjutan.',
        status: 'Rehabilitasi Berkelanjutan',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 2,
        type: 'banjir',
        name: 'Banjir Bandang Sumbar',
        location: 'Agam & Tanah Datar, Sumatra Barat',
        lat: -0.2500,
        lng: 100.3500,
        date: '11-12 Mei 2024',
        magnitude: 'Ekstrem',
        casualties: '67 jiwa meninggal, 20+ hilang',
        affected: '15.000+ jiwa',
        description: 'Banjir bandang dan tanah longsor melanda Sumatera Barat akibat curah hujan tinggi. Material vulkanik dari Gunung Marapi ikut terbawa arus, memperparah kerusakan infrastruktur dan pemukiman warga.',
        status: 'Tanggap Darurat',
        helpLink: 'https://pmikabupaten.pmi.or.id/'
    },
    {
        id: 3,
        type: 'gunung',
        name: 'Erupsi Gunung Marapi',
        location: 'Agam, Sumatra Barat',
        lat: -0.3811,
        lng: 100.4736,
        date: '3 Desember 2023 (Masih Aktif)',
        magnitude: 'Level II (Waspada)',
        casualties: '24 pendaki meninggal',
        affected: '5.000+ jiwa mengungsi',
        description: 'Gunung Marapi meletus dengan mengeluarkan kolom abu setinggi 3.000 meter. Status masih Waspada dengan radius aman 3 km dari kawah. Aktivitas vulkanik masih tinggi hingga 2024.',
        status: 'Status Waspada',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 4,
        type: 'banjir',
        name: 'Banjir Jakarta',
        location: 'DKI Jakarta',
        lat: -6.2088,
        lng: 106.8456,
        date: 'Januari-Februari 2024',
        magnitude: 'Sedang-Berat',
        casualties: '15 jiwa meninggal',
        affected: '200.000+ jiwa',
        description: 'Banjir merendam berbagai wilayah Jakarta akibat intensitas hujan tinggi dan luapan sungai Ciliwung. Ribuan warga mengungsi dan aktivitas ekonomi terganggu selama beberapa hari.',
        status: 'Pemulihan',
        helpLink: 'https://jakarta.go.id/'
    },
    {
        id: 5,
        type: 'gempa',
        name: 'Gempa Bumi Lombok',
        location: 'Lombok, NTB',
        lat: -8.5778,
        lng: 116.3275,
        date: '5 Oktober 2024',
        magnitude: '5.8 SR',
        casualties: '12 jiwa meninggal, 145 luka-luka',
        affected: '8.500+ jiwa',
        description: 'Gempa mengguncang Lombok dengan kedalaman 10 km. Ratusan rumah rusak dan warga panik mengingat trauma gempa 2018. BMKG menyatakan potensi gempa susulan masih ada.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 6,
        type: 'longsor',
        name: 'Longsor Purworejo',
        location: 'Purworejo, Jawa Tengah',
        lat: -7.7167,
        lng: 110.0167,
        date: '22 Maret 2024',
        magnitude: 'Besar',
        casualties: '8 jiwa meninggal',
        affected: '2.000+ jiwa mengungsi',
        description: 'Longsor material tebing setinggi 30 meter menutupi pemukiman warga. Hujan deras selama 3 hari menjadi pemicu utama. Tim SAR melakukan evakuasi dan pencarian korban.',
        status: 'Evakuasi Selesai',
        helpLink: 'https://pmikabupaten.pmi.or.id/'
    },
    {
        id: 7,
        type: 'banjir',
        name: 'Banjir Aceh',
        location: 'Aceh Utara & Pidie',
        lat: 5.1500,
        lng: 96.7500,
        date: '15-18 November 2024',
        magnitude: 'Ekstrem',
        casualties: '25 jiwa meninggal',
        affected: '50.000+ jiwa',
        description: 'Banjir bandang melanda Aceh Utara dan Pidie akibat luapan sungai dan intensitas hujan ekstrem. Ribuan rumah terendam, infrastruktur rusak, dan akses jalan terputus.',
        status: 'Tanggap Darurat',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 8,
        type: 'gunung',
        name: 'Aktivitas Gunung Semeru',
        location: 'Lumajang, Jawa Timur',
        lat: -8.1080,
        lng: 112.9225,
        date: 'Monitoring 2024',
        magnitude: 'Level III (Siaga)',
        casualties: 'Evakuasi preventif',
        affected: '3.500+ jiwa siaga',
        description: 'Gunung Semeru menunjukkan peningkatan aktivitas dengan awan panas guguran. Radius aman 5 km dari kawah. Warga di zona bahaya diminta waspada dan siap mengungsi sewaktu-waktu.',
        status: 'Status Siaga',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 9,
        type: 'banjir',
        name: 'Banjir Rob Semarang',
        location: 'Semarang, Jawa Tengah',
        lat: -6.9667,
        lng: 110.4167,
        date: 'Juni-Juli 2024',
        magnitude: 'Sedang (Berulang)',
        casualties: '0 jiwa',
        affected: '12.000+ jiwa',
        description: 'Banjir rob atau banjir air laut merendam wilayah pesisir Semarang. Fenomena ini berulang setiap tahun akibat penurunan tanah dan kenaikan muka air laut. Ribuan rumah dan bisnis terdampak.',
        status: 'Mitigasi Berkelanjutan',
        helpLink: 'https://semarangkota.go.id/'
    },
    {
        id: 10,
        type: 'longsor',
        name: 'Longsor Puncak',
        location: 'Puncak, Bogor, Jawa Barat',
        lat: -6.7000,
        lng: 107.0000,
        date: '8 Februari 2024',
        magnitude: 'Sedang',
        casualties: '5 jiwa meninggal',
        affected: '1.500+ jiwa',
        description: 'Tanah longsor menutup jalur Puncak, destinasi wisata populer. Material longsor mencapai 500 meter kubik, merusak puluhan kendaraan dan memutus akses jalan utama selama 2 hari.',
        status: 'Jalan Sudah Dibuka',
        helpLink: 'https://bogorkab.go.id/'
    },
    {
        id: 11,
        type: 'gempa',
        name: 'Gempa Bumi Maluku',
        location: 'Maluku Tengah',
        lat: -3.2384,
        lng: 130.1453,
        date: '18 September 2024',
        magnitude: '6.1 SR',
        casualties: '8 jiwa meninggal, 67 luka-luka',
        affected: '5.000+ jiwa',
        description: 'Gempa dengan kedalaman 25 km mengguncang Maluku Tengah. Kerusakan terjadi pada ratusan bangunan. Gempa susulan tercatat hingga 40 kali dalam 24 jam pertama.',
        status: 'Pemulihan',
        helpLink: 'https://www.bnpb.go.id/'
    },
    {
        id: 12,
        type: 'banjir',
        name: 'Banjir Kalimantan Selatan',
        location: 'Banjarmasin & Sekitarnya',
        lat: -3.3194,
        lng: 114.5906,
        date: 'April 2024',
        magnitude: 'Ekstrem',
        casualties: '18 jiwa meninggal',
        affected: '85.000+ jiwa',
        description: 'Banjir besar merendam 11 kabupaten/kota di Kalimantan Selatan. Ketinggian air mencapai 3-4 meter di beberapa lokasi. Distribusi bantuan terhambat akibat akses yang sulit.',
        status: 'Rehabilitasi',
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

console.log('🗺️ Peta Bencana Alam Indonesia berhasil dimuat!');
console.log(`📊 Total bencana: ${disasterData.length}`);
console.log('❤️ Mari bersama-sama membantu saudara kita yang terdampak bencana');
