import React, { useState, useEffect } from 'react';
import './ContactManager.css';  // Import CSS
import ContactForm from './ContactForm';
import axios from 'axios'; // Import axios

const ContactManager = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API
  useEffect(() => {
    axios.get('http://localhost:8000/contacts')  // Replace with your actual API endpoint
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contact list!', error);
      });
  }, []);

  const handleSuccess = () => {
    setSelectedContactId(null);
    setShowForm(false);
    // Optionally refresh the contact list after success
    axios.get('http://localhost:8000/contacts')  // Fetch the contacts again
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error refreshing the contact list!', error);
      });
  };

  const handleEdit = (id) => {
    setSelectedContactId(id);
    setShowForm(true);
  };

  return (
    <div className="contact-manager">
      <h1>Contact Management</h1>
      {showForm ? (
        <ContactForm contactId={selectedContactId} onSuccess={handleSuccess} />
      ) : (
        <div>
          <button onClick={() => { setShowForm(true); setSelectedContactId(null); }}>New Contact</button>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                <span>{contact.name} - {contact.company} - {contact.email} - {contact.phone}</span>
                <button onClick={() => handleEdit(contact.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactManager;
