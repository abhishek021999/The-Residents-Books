import React, { useState } from 'react';
import './ModalForm.css';

const ProfileForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    linkedin: '',
    twitter: ''
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle text input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhotoFile(file);
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.role) {
      setMessage('First Name and Role are required.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const data = new FormData();

      // Append text fields
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      // Append file field
      if (photoFile) {
        data.append('Profileimg', photoFile);
      }

      const response = await fetch('http://localhost:8080/api/profile/add', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Profile saved successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          role: '',
          linkedin: '',
          twitter: ''
        });
        setPhotoFile(null);
        e.target.reset();
        onClose();
        onSuccess();
      } else {
        setMessage(result.message || 'Failed to save profile');
      }
    } catch (error) {
      setMessage('Error submitting form: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <button type="button" className="close-button" onClick={onClose}>&times;</button>
      <h2>Add New Profile</h2>

      <div>
        <label>First Name*:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Role*:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>LinkedIn URL:</label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/username"
        />
      </div>

      <div>
        <label>Twitter URL:</label>
        <input
          type="url"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
          placeholder="https://twitter.com/username"
        />
      </div>

      <div className="file-input-container">
        <label>Profile Photo:</label>
        <div className="file-input-wrapper">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="photo-input"
            className="file-input"
          />
          <label htmlFor="photo-input" className="file-input-label">
            Choose File
          </label>
          {photoFile && (
            <span className="file-name">{photoFile.name}</span>
          )}
        </div>
      </div>

      <button type="submit" disabled={loading} style={{ marginTop: '12px' }}>
        {loading ? 'Saving...' : 'Submit'}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default ProfileForm;
