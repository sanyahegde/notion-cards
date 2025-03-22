import React, { useState } from 'react';

function DeckPage() {
  const flashcards = [
    { question: 'What is React?', answer: 'A library for building user interfaces.' },
    { question: 'What is FastAPI?', answer: 'A modern web framework for Python.' },
    { question: 'What is MongoDB?', answer: 'A NoSQL document database.' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentCardIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.deckTitle}>Sample Deck</h2>

      <div
        style={{
          ...styles.card,
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div style={{ ...styles.cardFace, ...styles.front }}>
          <p style={styles.cardText}>{currentCard.question}</p>
        </div>
        <div style={{ ...styles.cardFace, ...styles.back }}>
          <p style={styles.cardText}>{currentCard.answer}</p>
        </div>
      </div>

      <div style={styles.controls}>
        <button onClick={handlePrev} style={styles.button}>← Previous</button>
        <button onClick={handleNext} style={styles.button}>Next →</button>
      </div>

      <p style={styles.instructions}>Click the card to flip between question and answer.</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '3rem auto',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  deckTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
    fontWeight: '600',
    color: '#222',
  },
  card: {
    width: '100%',
    height: '300px',
    margin: '0 auto 4rem',
    perspective: '1000px',
    cursor: 'pointer',
    position: 'relative',
    transformStyle: 'preserve-3d',
    marginBottom: '10rem',
    transition: 'transform 0.6s ease-in-out',
  },
  cardFace: {
    position: 'center',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontSize: '1.7rem',
    fontWeight: '500',
    textAlign: 'center',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    border: '2px solid #e74c3c',
    transition: 'box-shadow 0.3s ease',
  },
  cardText: {
    maxWidth: '90%',
    lineHeight: '1.6',
    color: '#222',
  },
  front: {
    zIndex: 2,
  },
  back: {
    transform: 'rotateY(180deg)',
    backgroundColor: '#ffffff',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
  },
  instructions: {
    fontSize: '0.95rem',
    color: '#444',
    marginTop: '1rem',
  },
};

export default DeckPage;
