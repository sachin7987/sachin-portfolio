import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaWrench, FaCheckSquare } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      items: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      items: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 75 },
        { name: "Microfrontend Arch.", level: 80 },
        { name: "Redux", level: 85 },
        { name: "React Router", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaWrench />,
      items: [
        { name: "Git & Version Control", level: 90 },
        { name: "Webpack & Babel", level: 80 },
        { name: "NPM", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Jest / Testing Library", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            className="skill-category glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="category-title">
              <span className="cat-icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="skills-list">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
