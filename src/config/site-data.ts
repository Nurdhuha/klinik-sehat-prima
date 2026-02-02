export const siteData = {
    general: {
        brandName: "Klinik Sehat Prima",
        tagline: "Kesehatan Keluarga Anda Prioritas Kami",
        logo: "/clinic-logo.png",
        phone: "+62 21 1234 5678",
        email: "info@kliniksehatprima.id",
        address: "Jl. Kesehatan No. 123, Jakarta Selatan",
        whatsappNumbers: ["6281234567890"],
        whatsappMessage: "Halo Klinik Sehat Prima, saya ingin konsultasi.",
        operationalHours: "Senin - Sabtu: 08:00 - 21:00",
    },
    features: {
        enableFloatingWA: true,
        waRotator: false,
        enableAnimations: true,
        enableSEOJSONLD: true,
    },
    navbar: {
        links: [
            { label: "Beranda", href: "/" },
            { label: "Layanan", href: "#services" },
            { label: "Dokter", href: "#doctors" },
            { label: "Fasilitas", href: "#facilities" },
            { label: "Kontak", href: "#contact" },
        ],
    },
    hero: {
        headline: "Kesehatan Keluarga Anda Prioritas Kami",
        subheadline: "Solusi medis terpercaya dengan teknologi terkini dan dokter spesialis berpengalaman. Kami hadir untuk kesehatan Anda.",
        backgroundImage: "/hero-bg.jpg",
        ctaPrimary: "Buat Janji",
        ctaSecondary: "Hubungi Kami",
        badges: [
            { icon: "Clock", label: "24 Jam" },
            { icon: "UserCheck", label: "Dokter Spesialis" },
            { icon: "Building", label: "Fasilitas Modern" },
        ],
    },
    services: [
        {
            icon: "Stethoscope",
            title: "Pemeriksaan Umum",
            description: "Konsultasi dokter umum untuk pemeriksaan kesehatan rutin dan diagnosis.",
        },
        {
            icon: "Baby",
            title: "Spesialis Anak",
            description: "Perawatan medis komprehensif untuk bayi, anak-anak, dan remaja.",
        },
        {
            icon: "FlaskConical",
            title: "Laboratorium",
            description: "Fasilitas diagnostik modern untuk analisis sampel darah dan urin.",
        },
        {
            icon: "Scan",
            title: "Radiologi",
            description: "Pencitraan medis termasuk X-Ray, USG, dan MRI.",
        },
        {
            icon: "SmilePlus",
            title: "Gigi & Mulut",
            description: "Perawatan kesehatan gigi lengkap dari pembersihan hingga ortodontik.",
        },
        {
            icon: "Pill",
            title: "Farmasi",
            description: "Layanan resep obat dan konsultasi apoteker terpercaya.",
        },
    ],
    doctors: [
        {
            name: "Dr. Anya Sharma",
            specialty: "Dokter Umum",
            image: "/doctors/doctor-1.jpg",
            schedule: "Senin - Jumat",
        },
        {
            name: "Dr. Budi Santoso",
            specialty: "Dokter Anak",
            image: "/doctors/doctor-2.jpg",
            schedule: "Selasa - Sabtu",
        },
        {
            name: "Dr. Clara Dewi",
            specialty: "Dokter Gigi",
            image: "/doctors/doctor-3.jpg",
            schedule: "Senin - Kamis",
        },
        {
            name: "Dr. David Pratama",
            specialty: "Spesialis Dalam",
            image: "/doctors/doctor-4.jpg",
            schedule: "Rabu - Sabtu",
        },
    ],
    facilities: [
        { image: "/facilities/reception.jpg", title: "Ruang Resepsi" },
        { image: "/facilities/waiting.jpg", title: "Ruang Tunggu" },
        { image: "/facilities/consultation.jpg", title: "Ruang Konsultasi" },
        { image: "/facilities/lab.jpg", title: "Laboratorium" },
    ],
    testimonials: [
        {
            name: "Ibu Sarah",
            role: "Pasien Umum",
            content: "Pelayanan sangat ramah dan dokternya sangat profesional. Sangat merekomendasikan!",
            rating: 5,
        },
        {
            name: "Bapak Hendra",
            role: "Pasien Anak",
            content: "Anak saya tidak takut ke dokter lagi karena dokter di sini sangat sabar dan ramah.",
            rating: 5,
        },
        {
            name: "Ibu Mega",
            role: "Pasien Gigi",
            content: "Fasilitas modern dan bersih. Perawatan gigi sangat nyaman tanpa rasa sakit.",
            rating: 5,
        },
    ],
    cta: {
        headline: "Butuh Konsultasi Kesehatan?",
        subheadline: "Tim medis kami siap membantu Anda. Hubungi kami sekarang untuk jadwal konsultasi.",
        ctaWhatsApp: "Chat via WhatsApp",
        ctaPhone: "Telepon Kami",
    },
    footer: {
        description: "Klinik Sehat Prima adalah fasilitas kesehatan terpercaya yang melayani kebutuhan medis keluarga Anda dengan standar pelayanan terbaik.",
        quickLinks: [
            { label: "Tentang Kami", href: "#about" },
            { label: "Layanan", href: "#services" },
            { label: "Jadwal Dokter", href: "#doctors" },
            { label: "Kontak", href: "#contact" },
        ],
    },
    social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com",
    },
};
