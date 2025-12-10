import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <img src="/gambar/LOGO.png" alt="GO TANY Logo" />
          <div className={styles.logoText}>
            <span>GO TANY</span>
            <span>Smart Farming Assistant</span>
          </div>
        </Link>

        <nav>
          <ul className={styles.navMenu}>
            <li><Link to="/">Beranda</Link></li>
            <li><a href="#features">Fitur</a></li>
            <li><a href="#how">Cara Kerja</a></li>
            <li><Link to="/database" className={styles.active}>Database Penyakit</Link></li>
            <li><a href="#about">Tentang</a></li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <button className={styles.mobileMenuBtn} aria-label="Menu">
            <i className="fas fa-bars"></i>
          </button>
          <button 
            type="button" 
            className={styles.scanButton}
            onClick={() => navigate('/scan')}
          >
            <i className="fas fa-camera"></i>
            <span>Scan Tanaman</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
