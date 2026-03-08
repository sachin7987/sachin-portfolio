import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer (React Developer)",
      company: "Netlink Software Pvt Ltd",
      date: "Mar 2024 – Present | Bhopal, MP",
      points: [
        "Developing enterprise-level web applications using React.js, Redux, and modern JavaScript frameworks.",
        "Implemented interactive data visualizations using Highcharts, Plotly, and D3.js for complex data representation.",
        "Collaborated with cross-functional teams to build responsive and user-friendly interfaces.",
        "Improved user experience by integrating modern UI components using Ant Design and SCSS.",
        "Worked on scalable architecture and performance optimization for enterprise dashboards."
      ]
    },
    {
      role: "React Developer Intern",
      company: "Netlink Software Pvt Ltd",
      date: "Oct 2023 - Jan 2024 | Bhopal, MP",
      points: [
        "Collaborated on React.js and Next.js projects, ensuring responsiveness and user-friendliness.",
        "Implemented data visualizations using D3.js, Plotly, and HighChart for clear and interactive presentation of complex information.",
        "Enhanced user experience by integrating React DND for efficient content management.",
        "Participated in daily stand-ups, code reviews, and sprint planning, conducting performance optimization for improved application responsiveness."
      ]
    },
    {
      role: "Java Developer Intern",
      company: "Ramaasoft",
      date: "Nov 2022 - Jan 2023 | Bhopal, MP",
      points: [
        "Full-stack developer - Built the web application."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-container-single">
        <div className="experience-timeline">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                className="timeline-item glass-card"
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="role">{exp.role}</h4>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="date">{exp.date}</span>
                  </div>
                  <ul>
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
