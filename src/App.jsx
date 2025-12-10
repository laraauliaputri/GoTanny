import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda'
import DetailPenyakit from './pages/DetailPenyakit'
import ScanTanaman from './pages/ScanTanaman'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/database" element={<Beranda />} />
      <Route path="/detail/:id" element={<DetailPenyakit />} />
      <Route path="/scan" element={<ScanTanaman />} />
    </Routes>
  )
}

export default App
