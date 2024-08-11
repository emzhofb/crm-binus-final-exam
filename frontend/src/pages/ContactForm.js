import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactForm.css';  // Import CSS

const ContactForm = ({ contactId, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (contactId) {
      // Fetch the contact details if editing
      axios.get(`http://localhost:8000/contacts/${contactId}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the contact details!', error);
        });
    }
  }, [contactId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactId) {
      // Update existing contact
      axios.put(`http://localhost:8000/contacts/${contactId}`, formData)
        .then(() => {
          alert('Contact updated successfully!');
          onSuccess();
        })
        .catch(error => {
          console.error('There was an error updating the contact!', error);
        });
    } else {
      // Create new contact
      axios.post('http://localhost:8000/contacts', formData)
        .then(() => {
          alert('Contact created successfully!');
          onSuccess();
        })
        .catch(error => {
          console.error('There was an error creating the contact!', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Company</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <button type="submit">{contactId ? 'Update' : 'Create'} Contact</button>
    </form>
  );
};

export default ContactForm;
