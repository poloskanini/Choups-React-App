import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from "./pages/Home"
import QuiSommesNous from "./pages/QuiSommesNousPage"
import Contact from "./pages/Contact"
import NotFound from './components/NotFound'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <App />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
