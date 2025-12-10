export const diseaseData = [
  {
    id: 1,
    title: "Ulat Penggulung Daun Kapas",
    type: "Serangga",
    plant: "Kapas",
    image: "https://www.vegetables.cornell.edu/files/2020/11/Scab-fruit.jpg",
    description: "Ulat penggulung daun kapas adalah hama yang menyerang tanaman kapas dengan cara menggulung daun dan memakan jaringan daun dari dalam.",
    symptoms: ["Daun menggulung", "Lubang pada daun", "Pertumbuhan terhambat"],
    prevention: ["Rotasi tanaman", "Penggunaan insektisida alami", "Pemasangan perangkap feromon"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-leaf", text: "Kapas" },
      { icon: "fas fa-exclamation-triangle", text: "Berbahaya" }
    ]
  },
  {
    id: 2,
    title: "Antraknosa pada Kedelai",
    type: "Jamur",
    plant: "Kedelai",
    image: "https://www.vegetables.cornell.edu/files/2020/11/Phytophthora-blight-fruit-1024x768.jpg",
    description: "Antraknosa adalah penyakit jamur yang menyebabkan bercak coklat kehitaman pada daun, batang, dan polong kedelai.",
    symptoms: ["Bercak coklat pada daun", "Lesi pada batang", "Polong busuk"],
    prevention: ["Gunakan benih bersertifikat", "Jaga kelembaban", "Aplikasi fungisida"],
    tags: [
      { icon: "fas fa-virus", text: "Jamur" },
      { icon: "fas fa-leaf", text: "Kedelai" }
    ]
  },
  {
    id: 3,
    title: "Kumbang Pistachio",
    type: "Bakteri",
    plant: "Pistachio",
    image: "https://i0.wp.com/onvegetables.ca/wp-content/uploads/2012/07/dsc_0149.jpg",
    description: "Kumbang yang menyerang tanaman pistachio dan menyebabkan kerusakan pada buah dan daun.",
    symptoms: ["Lubang pada buah", "Daun rusak", "Produksi menurun"],
    prevention: ["Pemasangan perangkap", "Pembersihan kebun", "Penyemprotan insektisida"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-seedling", text: "Pistachio" }
    ]
  },
  {
    id: 4,
    title: "Busuk Batang Jagung",
    type: "Virus",
    plant: "Jagung",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Cucumber_mosaic_virus_symptoms.jpg",
    description: "Penyakit yang menyerang batang jagung menyebabkan pembusukan dan kematian tanaman.",
    symptoms: ["Batang lunak", "Tanaman rebah", "Bau busuk"],
    prevention: ["Drainase yang baik", "Rotasi tanaman", "Pemupukan seimbang"],
    tags: [
      { icon: "fas fa-virus", text: "Jamur" },
      { icon: "fas fa-leaf", text: "Jagung" },
      { icon: "fas fa-exclamation-circle", text: "Serius" }
    ]
  },
  {
    id: 5,
    title: "Bercak Daun Padi",
    type: "Bakteri",
    plant: "Padi",
    image: "https://ipm-cahnr.media.uconn.edu/wp-content/uploads/sites/3216/2023/11/bacterial-speck-gary-e-vallad-university-of-florida.jpeg",
    description: "Penyakit bakteri yang menyebabkan bercak-bercak pada daun padi dan menurunkan hasil panen.",
    symptoms: ["Bercak coklat pada daun", "Daun mengering", "Gabah hampa"],
    prevention: ["Varietas tahan", "Pengaturan air", "Sanitasi lahan"],
    tags: [
      { icon: "fas fa-bacteria", text: "Bakteri" },
      { icon: "fas fa-leaf", text: "Padi" }
    ]
  },
  {
    id: 6,
    title: "Kutu Daun Kapas",
    type: "Serangga",
    plant: "Kapas",
    image: "https://assets.corteva.com/is/image/Corteva/ar4-26jun20?$image_desktop$",
    description: "Hama kutu daun yang mengisap cairan dari daun kapas menyebabkan tanaman layu.",
    symptoms: ["Daun keriting", "Embun madu", "Pertumbuhan kerdil"],
    prevention: ["Musuh alami", "Penyemprotan air", "Insektisida sistemik"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-leaf", text: "Kapas" }
    ]
  },
  {
    id: 7,
    title: "Spotted Wilt Virus",
    type: "Virus",
    plant: "Tomat",
    image: "https://bioprotectionportal.com/wp-content/uploads/2025/04/tomato-spotted-wilt-virus_symptom-1024x763.jpg?x62924",
    description: "Virus yang ditularkan oleh thrips menyebabkan bercak dan layu pada tanaman tomat.",
    symptoms: ["Bercak cincin pada daun", "Buah deformasi", "Tanaman layu"],
    prevention: ["Kontrol thrips", "Varietas tahan", "Mulsa reflektif"],
    tags: [
      { icon: "fas fa-virus", text: "Virus" },
      { icon: "fas fa-leaf", text: "Tomat" }
    ]
  },
  {
    id: 8,
    title: "Hawar Daun Kentang",
    type: "Jamur",
    plant: "Kentang",
    image: "https://s.hdnux.com/photos/01/34/05/54/24140594/6/rawImage.jpg",
    description: "Penyakit jamur yang menyebabkan kerusakan parah pada daun dan umbi kentang.",
    symptoms: ["Bercak hitam pada daun", "Daun layu cepat", "Umbi busuk"],
    prevention: ["Fungisida preventif", "Varietas tahan", "Rotasi tanaman"],
    tags: [
      { icon: "fas fa-virus", text: "Jamur" },
      { icon: "fas fa-leaf", text: "Kentang" }
    ]
  },
  {
    id: 9,
    title: "Trips Cabai",
    type: "Serangga",
    plant: "Cabai",
    image: "https://assets.corteva.com/is/image/Corteva/ar4-26jun20?$image_desktop$",
    description: "Hama trips yang menyerang daun dan bunga cabai menyebabkan kerusakan dan penurunan produksi.",
    symptoms: ["Daun keperakan", "Bunga rontok", "Buah cacat"],
    prevention: ["Perangkap warna biru", "Musuh alami", "Rotasi tanaman"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-leaf", text: "Cabai" }
    ]
  },
  {
    id: 10,
    title: "Layu Fusarium",
    type: "Jamur",
    plant: "Tomat",
    image: "https://assets.corteva.com/is/image/Corteva/ar4-26jun20?$image_desktop$",
    description: "Penyakit jamur tanah yang menyebabkan layu dan kematian tanaman tomat.",
    symptoms: ["Daun menguning satu sisi", "Pembuluh coklat", "Tanaman layu permanen"],
    prevention: ["Varietas tahan", "Solarisasi tanah", "Drainase baik"],
    tags: [
      { icon: "fas fa-virus", text: "Jamur" },
      { icon: "fas fa-leaf", text: "Tomat" }
    ]
  },
  {
    id: 11,
    title: "Wereng Coklat",
    type: "Serangga",
    plant: "Padi",
    image: "https://assets.corteva.com/is/image/Corteva/ar4-26jun20?$image_desktop$",
    description: "Hama utama padi yang mengisap cairan tanaman dan menularkan virus.",
    symptoms: ["Tanaman menguning", "Hopperburn", "Gagal panen"],
    prevention: ["Varietas tahan", "Pengaturan air", "Penanaman serempak"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-leaf", text: "Padi" }
    ]
  },
  {
    id: 12,
    title: "Penggerek Batang Jagung",
    type: "Serangga",
    plant: "Jagung",
    image: "https://assets.corteva.com/is/image/Corteva/ar4-26jun20?$image_desktop$",
    description: "Larva ngengat yang menggerek batang jagung menyebabkan tanaman patah dan mati.",
    symptoms: ["Lubang pada batang", "Tanaman patah", "Tongkol tidak sempurna"],
    prevention: ["Penanaman serempak", "Pembersihan sisa tanaman", "Insektisida saat tanam"],
    tags: [
      { icon: "fas fa-bug", text: "Serangga" },
      { icon: "fas fa-leaf", text: "Jagung" }
    ]
  }
]

export const getDiseaseById = (id) => {
  return diseaseData.find(d => d.id === parseInt(id))
}

export const filterDiseases = (searchTerm, plantFilter, diseaseFilter) => {
  return diseaseData.filter(disease => {
    const matchesSearch = !searchTerm || 
      disease.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      disease.plant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.type.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesPlant = !plantFilter || disease.plant.toLowerCase() === plantFilter.toLowerCase()
    const matchesDisease = !diseaseFilter || disease.type.toLowerCase() === diseaseFilter.toLowerCase()

    return matchesSearch && matchesPlant && matchesDisease
  })
}
