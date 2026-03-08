import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartBar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Lumenore – AI Driven Chat-Based BI Platform",
      role: "Frontend Engineer",
      duration: "Dec 2024 – Present",
      tech: ["React.js", "Next.js", "Redux", "JavaScript", "Webpack", "Ant Design"],
      description: "A chat-based Business Intelligence platform allowing advanced data interaction. I developed high-performance and responsive user interfaces using React, Redux, and Ant Design components.",
      bullets: [
        "Collaborated closely with backend and design teams to build features.",
        "Improved application performance using code-splitting, lazy loading, and optimized state management.",
        "Mentored junior developers on React best practices, modular architecture, and performance optimization."
      ]
    },
    {
      title: "Ask Me – Conversational Querying Interface (Lumenore)",
      role: "Frontend Engineer",
      duration: "Mar 2025 – Jun 2026",
      tech: ["React.js", "Redux", "JavaScript"],
      description: "An advanced feature within Lumenore enabling users to type business questions in plain English and retrieve intelligent insights.",
      bullets: [
        "Developed interactive dashboards allowing users to explore business metrics through visualized charts.",
        "Integrated intelligent suggestions to surface context-aware insights and trending queries.",
        "Enabled search-based navigation for faster decision-making.",
        "Worked with product teams to implement scenario modeling and voice-to-text input search."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Enterprise Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            className="project-card glass-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-meta mb-4">
                <span className="role-tag block text-accent">{project.role}</span>
                <span className="duration-tag text-sm text-gray-400">{project.duration}</span>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <ul className="project-bullets mb-6">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              
              <div className="project-tech mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
