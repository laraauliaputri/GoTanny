import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Header, Breadcrumb } from '../components'
import { getDiseaseById } from '../data/diseaseData'
import styles from './DetailPenyakit.module.css'

function DetailPenyakit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const disease = getDiseaseById(id)

  if (!disease) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.notFound}>
            <i className="fas fa-exclamation-circle"></i>
            <h2>Penyakit tidak ditemukan</h2>
            <p>Data yang Anda cari tidak tersedia</p>
            <button onClick={() => navigate('/database')} className={styles.backButton}>
              <i className="fas fa-arrow-left"></i>
              Kembali ke Database
            </button>
          </div>
        </main>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Beranda', link: '/', icon: 'fas fa-home' },
    { label: 'Database Penyakit', link: '/database' },
    { label: disease.title }
  ]

  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className={styles.mainContent}>
        <article className={styles.detailCard}>
          {/* Header Section */}
          <div className={styles.detailHeader}>
            <div className={styles.imageWrapper}>
              <img src={disease.image} alt={disease.title} />
              <div className={styles.badge}>
                <i className={`fas ${disease.type === 'Serangga' ? 'fa-bug' : 'fa-virus'}`}></i>
                {disease.type}
              </div>
            </div>
            <div className={styles.headerInfo}>
              <h1>{disease.title}</h1>
              <div className={styles.metaInfo}>
                <span className={styles.metaItem}>
                  <i className="fas fa-leaf"></i>
                  Tanaman: {disease.plant}
                </span>
                <span className={styles.metaItem}>
                  <i className="fas fa-tag"></i>
                  Jenis: {disease.type}
                </span>
              </div>
              <p className={styles.description}>{disease.description}</p>
              <div className={styles.tags}>
                {disease.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    <i className={tag.icon}></i>
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className={styles.contentGrid}>
            <section className={styles.section}>
              <h2>
                <i className="fas fa-stethoscope"></i>
                Gejala
              </h2>
              <ul className={styles.list}>
                {disease.symptoms.map((symptom, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    {symptom}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>
                <i className="fas fa-shield-alt"></i>
                Pencegahan
              </h2>
              <ul className={styles.list}>
                {disease.prevention.map((item, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <button onClick={() => navigate(-1)} className={styles.secondaryButton}>
              <i className="fas fa-arrow-left"></i>
              Kembali
            </button>
            <button onClick={() => navigate('/scan')} className={styles.primaryButton}>
              <i className="fas fa-camera"></i>
              Scan Tanaman Saya
            </button>
          </div>
        </article>
      </main>
    </div>
  )
}

export default DetailPenyakit
