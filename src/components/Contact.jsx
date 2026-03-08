import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sachinrai911190@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Portfolio Message from ${formData.name}`,
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Let's build something amazing together.
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get In Touch</h3>
          <p className="contact-desc">
            If you're looking for a React developer or full-stack web developer to build scalable and modern applications, feel free to reach out.
          </p>

          <div className="info-items">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:sachinrai911190@gmail.com">sachinrai911190@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <span>+91 7987208509</span>
              </div>
            </div>
          </div>

          <div className="contact-socials mt-6">
            <a href="https://github.com/sachin7987" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/sachin-rai-8b94b0231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="How can I help you?"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary form-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p style={{ color: '#4ade80', marginTop: '15px', textAlign: 'center', fontWeight: '500' }}>
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#f87171', marginTop: '15px', textAlign: 'center', fontWeight: '500' }}>
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sachin Rai. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
};

export default Contact;
