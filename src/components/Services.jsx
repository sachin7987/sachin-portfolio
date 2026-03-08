import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaRocket } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Business websites, Landing pages, SaaS dashboards, and Portfolios tailored to your needs."
    },
    {
      icon: <FaServer />,
      title: "Full Stack Web Apps",
      desc: "End-to-end development with React.js/Next.js, Node.js APIs, MongoDB, and Authentication."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Development",
      desc: "Pixel-perfect, responsive design implementation from Figma with interactive charts."
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      desc: "Code splitting, lazy loading, Next.js SEO optimization, and application improvements."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="services-section">
        <motion.h3 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          My Services
        </motion.h3>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
