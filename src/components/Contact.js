import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Helmet } from 'react-helmet';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/972552777169?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.contactPage}>

    <div className={styles.contactContainer}>
    <Helmet>
      <title>Contact Us - Lahav Group | Let's Connect</title>
      <meta name="description" content="Get in touch with Lahav Group, your trusted partner in real estate. Contact us today to discuss your needs and learn how we can help you achieve your real estate goals in Israel." />
    </Helmet>


      <h2 className={styles.h1}>Contact Us</h2>
      <h2 className={styles.h2}>אנחנו זמינים עבורך</h2>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
    </div>

  );
}

export default Contact;
