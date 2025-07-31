import React from 'react';
import { Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users size={24} />, number: '10K+', label: 'Happy Customers' },
    { icon: <Award size={24} />, number: '50+', label: 'Awards Won' },
    { icon: <Target size={24} />, number: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="page-container">
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About ThemeApp</h1>
          <p className="about-description">
            We are passionate about creating beautiful, functional, and accessible web experiences 
            that adapt to your preferences through our innovative theme system.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide developers and users with a seamless, customizable experience that 
          adapts to individual preferences while maintaining excellent performance and accessibility.
        </p>
      </section>
    </div>
  );
};

export default AboutPage; 