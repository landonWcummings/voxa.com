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
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
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
    color: '#007bff',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1rem',
  },
  heroSection: {
    padding: '4rem 2rem',
    backgroundColor: '#e9ecef',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 1rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: '0 0 2rem',
    color: '#555',
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
  ctaButtonHover: {
    backgroundColor: '#0056b3',
  },
  footer: {
    padding: '1rem 0',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #eaeaea',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#666',
    margin: 0,
  },
};

export default IntroPage;
