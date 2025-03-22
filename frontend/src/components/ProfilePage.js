// src/components/ProfilePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  // Example data
  const user = {
    name: 'Jane Doe',
    avatar: '/profile1.png', // your avatar image path
    bio: 'Aspiring polyglot and NotionCards enthusiast.',
    stats: {
      cardsStudied: 120,
      accuracy: 85,
    },
    decks: [
      { id: 1, name: 'Sample Deck 1', cardsStudied: 50, accuracy: 80 },
      { id: 2, name: 'Sample Deck 2', cardsStudied: 30, accuracy: 90 },
    ],
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Profile Header */}
      <section style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{user.name}</h2>
          <p style={{ margin: '0.5rem 0', color: '#555' }}>{user.bio}</p>
          <button
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            Edit Profile
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            flex: '1 1 0',
            textAlign: 'center',
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem', color: '#333' }}>Cards Studied</h3>
          <p style={{ fontSize: '1.5rem', margin: 0 }}>{user.stats.cardsStudied}</p>
        </div>
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            flex: '1 1 0',
            textAlign: 'center',
          }}
        >
          <h3 style={{ margin: '0 0 0.5rem', color: '#333' }}>Accuracy</h3>
          <p style={{ fontSize: '1.5rem', margin: 0 }}>{user.stats.accuracy}%</p>
        </div>
      </section>

      {/* Decks Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ margin: 0 }}>Your Decks</h2>
          <button
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            + Add Deck
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {user.decks.map((deck) => (
            <div
              key={deck.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{ margin: '0 0 0.5rem', color: '#333' }}>{deck.name}</h3>
              <p style={{ margin: '0.5rem 0', color: '#555' }}>
                Cards Studied: {deck.cardsStudied}
              </p>
              <p style={{ margin: 0, color: '#555' }}>Accuracy: {deck.accuracy}%</p>
              <Link
                to={`/deck/${deck.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                Open Deck
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
