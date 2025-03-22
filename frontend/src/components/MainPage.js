// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
    
    /* Simple fade-in animation */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    /* Slight upward fade */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f9f9f9',
      color: '#333'
    }}>
      <style>{globalStyles}</style>

      {/* HEADER */}
      <header style={{
        backgroundColor: '#222',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 600 }}>NotionCards</h1>
        <nav>
          <Link to="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/profile" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Profile</Link>
          <Link to="/deck" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Deck</Link>
          <Link to="/login" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Login</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{
        maxWidth: '1200px',
        margin: '4rem auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Left: Text */}
        <div style={{ flex: 1, animation: 'fadeIn 1s ease-out' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#555' }}>
            We’re revolutionizing studying with a clean, intuitive interface that helps you organize decks, track progress, and master your flashcards—all in a minimalist, Notion-inspired style.
          </p>
          <Link to="/login">
            <button style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Get Started
            </button>
          </Link>
        </div>
        {/* Right: Image */}
        <div style={{ flex: 1, textAlign: 'center', animation: 'fadeIn 1.2s ease-out' }}>
          <img
            src="/avengers.jpg"
            alt="Hero"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </section>

      {/* WHAT'S NEW SECTION */}
      <section style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '2rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        borderBottom: '1px solid #ddd'
      }}>
        {/* Left: Heading with Accent */}
        <div style={{ flex: 0.3, display: 'flex', alignItems: 'center', animation: 'fadeInUp 1s ease-out' }}>
          <h2 style={{ fontSize: '2rem', margin: 0 }}>
            <span style={{ color: '#e74c3c', marginRight: '0.5rem' }}>•</span>What's New?
          </h2>
        </div>
        {/* Right: Description */}
        <div style={{ flex: 0.7, paddingLeft: '1rem', animation: 'fadeInUp 1s ease-out', animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#555' }}>
            Discover our latest update: an AI-powered Study Buddy designed to optimize your study sessions, generate flashcards, and offer personalized insights to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {/* Feature Card 1 */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          <img
            src="/profile - light.jpg"
            alt="Study Sessions"
            style={{ width: '180px', height: 'auto', marginBottom: '1rem' }}
          />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Study Sessions</h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
            Track your progress and master your flashcards in a sleek interface.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          <img
            src="/notionlady.jpeg"
            alt="Profile & Stats"
            style={{ width: '180px', height: 'auto', marginBottom: '1rem' }}
          />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Profile & Stats</h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
            Review your stats, accuracy, and history in one convenient view.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          <img
            src="/highlight.jpg"
            alt="Flashcard Decks"
            style={{ width: '180px', height: 'auto', marginBottom: '1rem' }}
          />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Flashcard Decks</h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
            Create and organize decks with ease using our uncluttered design.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          animation: 'fadeIn 1.2s ease-out'
        }}>
          <img
            src="/studybuddy.jpg"
            alt="Study Buddy"
            style={{ width: '180px', height: 'auto', marginBottom: '1rem' }}
          />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Study Buddy</h3>
          <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>
            Let our AI guide your study sessions with personalized tips and flashcards.
          </p>
        </div>
      </section>

      {/* AI ASSISTANCE SECTION */}
      <section style={{
        maxWidth: '1000px',
        margin: '3rem auto',
        padding: '3rem 2rem',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        animation: 'fadeIn 1.2s ease-out'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>AI Assistance</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6, marginBottom: '2rem' }}>
          Our AI-powered Study Buddy optimizes your study sessions, analyzes your stats,
          and even generates flashcards tailored to your needs.
        </p>
        <Link to="/ask-ai">
          <button style={{
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Ask AI Now
          </button>
        </Link>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={{
        maxWidth: '800px',
        margin: '3rem auto',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#fff'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333', animation: 'fadeIn 1s ease-out' }}>What People Are Saying</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <blockquote style={{ fontSize: '1rem', color: '#555', fontStyle: 'italic', animation: 'fadeIn 1.2s ease-out' }}>
            “NotionCards transformed my study routine. The minimal design keeps me focused!”
            <br />
            <span style={{ display: 'block', marginTop: '0.5rem', fontWeight: 600, color: '#333' }}>— Safa, Information Systems Major</span>
          </blockquote>
          <blockquote style={{ fontSize: '1rem', color: '#555', fontStyle: 'italic', animation: 'fadeIn 1.4s ease-out' }}>
            “I love how I can visualize my notes and track my progress in real-time.”
            <br />
            <span style={{ display: 'block', marginTop: '0.5rem', fontWeight: 600, color: '#333' }}>— Smita, Business Analyst</span>
          </blockquote>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 2rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>© 2025 NotionCards. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
