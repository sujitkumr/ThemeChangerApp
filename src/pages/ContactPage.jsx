import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'sujitkumar101@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 764- 123-4567' },
    { icon: <MapPin size={20} />, label: 'Address', value: '123 Theme Street, Design City India' },
  ];

  return (
    <div className="page-container">
      <section className="contact-hero">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h3>{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 