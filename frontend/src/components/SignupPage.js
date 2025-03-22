import React, { useState } from 'react';

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    notionId: '',
    age: '',
    usage: '',
    profilePic: '',
    profilePicFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePic: reader.result,
          profilePicFile: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Submit formData to FastAPI backend here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'First Name', name: 'firstName', type: 'text' },
          { label: 'Last Name', name: 'lastName', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Notion ID', name: 'notionId', type: 'text' },
          { label: 'Age', name: 'age', type: 'number' }
        ].map(field => (
          <div key={field.name} style={styles.field}>
            <label>{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        ))}

        <div style={styles.field}>
          <label>Account Usage:</label>
          <select
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select...</option>
            <option value="school">School</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={styles.field}>
          <label>Profile Picture:</label>
          <p style={styles.smallText}>
            🎨 Want a fun avatar? <a href="https://notion-avatar.app/" target="_blank" rel="noreferrer">Generate one here</a>, download it, then upload it below.
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={styles.input}
            required
          />
          {formData.profilePic && (
            <img
              src={formData.profilePic}
              alt="Uploaded Avatar"
              style={styles.avatarPreview}
            />
          )}
        </div>

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>

      <p style={styles.toggleText}>
        Already have an account? 
        <a href="/login" style={{ color: '#e74c3c', textDecoration: 'none', marginLeft: '0.25rem' }}>
          Log In
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '1.25rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '0.25rem',
  },
  smallText: {
    fontSize: '0.85rem',
    margin: '0.5rem 0',
  },
  avatarPreview: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginTop: '0.5rem',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  toggleText: {
    textAlign: 'center',
    marginTop: '1rem',
  },
};

export default SignupPage;
