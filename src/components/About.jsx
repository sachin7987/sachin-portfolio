import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section flex-col">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-content-wrapper">
        <motion.div 
          className="about-text glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pro-summary mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Professional Summary</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Nearly 3 years of experience as a Software Engineer with a strong focus on frontend development.</li>
              <li>Specialized in building responsive and user-friendly interfaces using React.js, and recently exploring Next.js to enhance performance and SEO through server-side rendering (SSR).</li>
              <li>Proficient in designing intuitive UI/UX that ensures seamless user experiences across devices.</li>
              <li>Experienced in integrating RESTful APIs and managing client-side state efficiently.</li>
              <li>Skilled in Microfrontend architecture, promoting modular, scalable, and reusable codebases for large-scale applications.</li>
              <li>Familiar with backend development using Node.js and MongoDB for end-to-end feature delivery.</li>
              <li>Excellent communicator with strong collaboration skills in Agile environments.</li>
            </ul>
          </div>

          <div className="about-details">
            <p>
              I am a Software Engineer specializing in frontend development with React.js, passionate about building high-quality digital products that deliver seamless user experiences.
            </p>
            <p>
              With 2.5+ years of professional experience, I have worked on scalable enterprise applications, interactive dashboards, and data-driven platforms. I focus on writing clean, maintainable, and modular code while following modern development practices.
            </p>
            <p>
              I have experience working in Agile teams, collaborating with designers, backend engineers, and product managers to deliver impactful software solutions.
            </p>
            <p>
              My expertise includes: Modern frontend frameworks (React.js, Next.js), Microfrontend architecture, API integration, state management, responsive UI/UX design, and performance optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
