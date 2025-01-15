import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>Zeynel Erdem Dogru</h1>
        <p>
        
        </p>
      </header>

      <main className="cv-content">
        <section className="cv-section">
          <h2>Kişisel Bilgiler</h2>
          <p><strong>Adı:</strong> Zeynel ERdem</p>
          <p><strong>Soyadı:</strong> Dogru</p>
          <p><strong>E-posta:</strong> <a href="mailto:ismail.kirac@kun.edu.tr">zeynel.dogru@kun.edu.tr</a></p>
        </section>

        <section className="cv-section">
          <h2>Eğitim Bilgileri</h2>
          <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
          <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
          <p><strong>Mezuniyet Yılı:</strong> 2024-2025</p>
        </section>

        <section className="cv-section">
          <h2>İş Deneyimi</h2>
          <p>Yok</p>
        </section>

        <section className="cv-section">
          <h2>Yetenekler</h2>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Oyun Geliştirme</li>
            <li>kayak</li>
            <li>bisiklet</li>
          </ul>
        </section>
      </main>

      <footer className="social-media">
        <h2>Beni Takip Edin</h2>
        <div className="icon-container">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;