import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Breadcrumb } from '../components'
import styles from './ScanTanaman.module.css'

function ScanTanaman() {
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState(null)

  const breadcrumbItems = [
    { label: 'Beranda', link: '/', icon: 'fas fa-home' },
    { label: 'Scan Tanaman' }
  ]

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        setScanResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        setScanResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleScan = () => {
    if (!selectedImage) return
    
    setIsScanning(true)
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setScanResult({
        disease: "Hawar Daun Kentang",
        confidence: 87,
        type: "Jamur",
        severity: "Sedang",
        id: 8
      })
    }, 2000)
  }

  const handleReset = () => {
    setSelectedImage(null)
    setScanResult(null)
  }

  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className={styles.mainContent}>
        <section className={styles.scanSection}>
          <div className={styles.scanHeader}>
            <h1>
              <i className="fas fa-camera"></i>
              Scan Tanaman Anda
            </h1>
            <p>Upload foto tanaman untuk mendeteksi hama atau penyakit</p>
          </div>

          <div className={styles.scanContainer}>
            {/* Upload Area */}
            <div 
              className={`${styles.uploadArea} ${selectedImage ? styles.hasImage : ''}`}
              onClick={() => !selectedImage && fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {selectedImage ? (
                <div className={styles.previewWrapper}>
                  <img src={selectedImage} alt="Preview" className={styles.previewImage} />
                  {isScanning && (
                    <div className={styles.scanningOverlay}>
                      <div className={styles.scanLine}></div>
                      <p>Menganalisis gambar...</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.uploadPlaceholder}>
                  <div className={styles.uploadIcon}>
                    <i className="fas fa-cloud-upload-alt"></i>
                  </div>
                  <h3>Drag & Drop gambar di sini</h3>
                  <p>atau klik untuk memilih file</p>
                  <span className={styles.supportedFormats}>
                    Mendukung: JPG, PNG, WEBP (max 10MB)
                  </span>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                hidden
              />
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              {selectedImage && !scanResult && (
                <>
                  <button 
                    className={styles.scanButton}
                    onClick={handleScan}
                    disabled={isScanning}
                  >
                    {isScanning ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Menganalisis...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-search"></i>
                        Analisis Sekarang
                      </>
                    )}
                  </button>
                  <button className={styles.resetButton} onClick={handleReset}>
                    <i className="fas fa-redo"></i>
                    Ganti Gambar
                  </button>
                </>
              )}
            </div>

            {/* Scan Result */}
            {scanResult && (
              <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                  <div className={styles.resultIcon}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3>Hasil Analisis</h3>
                    <p>Penyakit terdeteksi dengan akurasi tinggi</p>
                  </div>
                </div>

                <div className={styles.resultContent}>
                  <div className={styles.resultItem}>
                    <span className={styles.label}>Penyakit Terdeteksi</span>
                    <span className={styles.value}>{scanResult.disease}</span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.label}>Tingkat Kepercayaan</span>
                    <div className={styles.confidenceBar}>
                      <div 
                        className={styles.confidenceFill} 
                        style={{ width: `${scanResult.confidence}%` }}
                      ></div>
                      <span>{scanResult.confidence}%</span>
                    </div>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.label}>Jenis Patogen</span>
                    <span className={styles.value}>{scanResult.type}</span>
                  </div>
                  <div className={styles.resultItem}>
                    <span className={styles.label}>Tingkat Keparahan</span>
                    <span className={`${styles.severity} ${styles[scanResult.severity.toLowerCase()]}`}>
                      {scanResult.severity}
                    </span>
                  </div>
                </div>

                <div className={styles.resultActions}>
                  <button 
                    className={styles.detailButton}
                    onClick={() => navigate(`/detail/${scanResult.id}`)}
                  >
                    <i className="fas fa-info-circle"></i>
                    Lihat Detail & Solusi
                  </button>
                  <button className={styles.newScanButton} onClick={handleReset}>
                    <i className="fas fa-camera"></i>
                    Scan Baru
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className={styles.instructions}>
            <h3>Tips untuk hasil terbaik:</h3>
            <ul>
              <li>
                <i className="fas fa-sun"></i>
                Pastikan pencahayaan cukup terang
              </li>
              <li>
                <i className="fas fa-crosshairs"></i>
                Fokuskan kamera pada bagian yang terinfeksi
              </li>
              <li>
                <i className="fas fa-expand"></i>
                Ambil foto dengan jelas dan tidak blur
              </li>
              <li>
                <i className="fas fa-leaf"></i>
                Sertakan daun atau bagian tanaman yang terlihat sakit
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ScanTanaman
