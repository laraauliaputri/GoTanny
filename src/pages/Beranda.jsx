import React, { useState, useMemo } from 'react'
import { Header, Breadcrumb, DiseaseCard, FilterSection, Modal } from '../components'
import { diseaseData, filterDiseases } from '../data/diseaseData'
import styles from './Beranda.module.css'

function Beranda() {
  const [searchTerm, setSearchTerm] = useState('')
  const [plantFilter, setPlantFilter] = useState('')
  const [diseaseFilter, setDiseaseFilter] = useState('')
  const [selectedDisease, setSelectedDisease] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredData = useMemo(() => {
    return filterDiseases(searchTerm, plantFilter, diseaseFilter)
  }, [searchTerm, plantFilter, diseaseFilter])

  const breadcrumbItems = [
    { label: 'Beranda', link: '/', icon: 'fas fa-home' },
    { label: 'Database Penyakit', link: '/database' },
    { label: 'Hama & Penyakit' }
  ]

  const handleReset = () => {
    setSearchTerm('')
    setPlantFilter('')
    setDiseaseFilter('')
  }

  const handleInfoClick = (disease) => {
    setSelectedDisease(disease)
    setIsModalOpen(true)
  }

  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumb items={breadcrumbItems} onReset={handleReset} />
      
      <main className={styles.mainContent}>
        {/* Page Title */}
        <section className={styles.pageTitleSection}>
          <h1>🌿 Perpustakaan Hama & Penyakit Tanaman</h1>
          <p>Temukan informasi lengkap tentang hama dan penyakit yang menyerang tanaman Anda</p>
        </section>

        {/* Filters */}
        <FilterSection 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          plantFilter={plantFilter}
          onPlantChange={setPlantFilter}
          diseaseFilter={diseaseFilter}
          onDiseaseChange={setDiseaseFilter}
        />

        {/* Results Header */}
        <div className={styles.resultsHeader}>
          <h2>Ditemukan <span className={styles.resultsCount}>{filteredData.length}</span> hasil</h2>
          <div className={styles.resultsInfo}>
            <i className="fas fa-info-circle"></i>
            <span>Klik kartu untuk melihat detail</span>
          </div>
        </div>

        {/* Cards Grid */}
        <section className={styles.cardsGrid} aria-label="Daftar hama dan penyakit">
          {filteredData.length > 0 ? (
            filteredData.map(disease => (
              <DiseaseCard 
                key={disease.id} 
                disease={disease} 
                onInfoClick={handleInfoClick}
              />
            ))
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>
                <i className="fas fa-search"></i>
              </div>
              <h3>Tidak ada hasil ditemukan</h3>
              <p>Coba ubah kata kunci atau filter pencarian Anda</p>
            </div>
          )}
        </section>
      </main>

      {/* Info Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="📋 Info Cepat"
      >
        {selectedDisease && (
          <div className={styles.modalInfo}>
            <p><strong>Nama:</strong> {selectedDisease.title}</p>
            <p><strong>Jenis:</strong> {selectedDisease.type}</p>
            <p><strong>Tanaman:</strong> {selectedDisease.plant}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Beranda
