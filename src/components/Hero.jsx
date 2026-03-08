import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Hi, I'm Sachin Rai
          </motion.p>

          <motion.h1
            className="name-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Frontend Developer | React.js Specialist
          </motion.h1>

          <motion.h2
            className="role-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Building scalable, high-performance web applications with modern technologies.
          </motion.h2>

          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <p>
              I'm a React.js Developer with 2.5+ years of experience in building modern, responsive, and scalable web applications. I specialize in creating high-performance user interfaces using React.js, Next.js, and modern JavaScript frameworks.
            </p>
            <p>
              From UI/UX development to API integration and full application delivery, I ensure reliable, scalable, and user-friendly digital solutions.
            </p>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Hire Me</a>
            <a href="/Sachin_s_Resume25.pdf" download="Sachin_s_Resume25" className="btn-secondary download-btn">
              <FaFileDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <a href="https://github.com/sachin7987" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/sachin-rai-8b94b0231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:sachinrai911190@gmail.com"><FaEnvelope /></a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="hero-image-container">
            <img
              src="/potfolioImg.png"
              alt="Sachin Rai Profile"
              className="hero-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                // Fallback image just in case user hasn't added their exact file yet
              }}
            />
            <div className="hero-image-backdrop"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-shapes"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
