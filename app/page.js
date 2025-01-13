"use client";

import React from 'react';

const IntroPage = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.logo}>Voxa</div>
        <nav style={styles.nav}>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={styles.heroSection}>
        <h1 style={styles.title}>Welcome to Voxa</h1>
        <p style={styles.subtitle}>Where Innovation Meets Simplicity</p>
        <button style={styles.ctaButton} onClick={() => alert('Getting Started!')}>
          Get Started
        </button>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 Voxa. All rights reserved.</p>
        
        {/* YouTube Video */}
        <div style={styles.videoContainer}>
          <iframe 
            width="681" 
            height="383" 
            src="https://www.youtube.com/embed/WUspEXAHGok" 
            title="BETTER AD" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#000',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #eaeaea',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
  },
  heroSection: {
    padding: '4rem 2rem',
    backgroundImage: 'url("/logo.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 1rem',
    color: '#000',
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: '0 0 2rem',
    color: '#000',
  },
  ctaButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footer: {
    padding: '1rem 0',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #eaeaea',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#000',
    margin: 0,
  },
  videoContainer: {
    marginTop: '1rem',
  },
};

export default IntroPage;
