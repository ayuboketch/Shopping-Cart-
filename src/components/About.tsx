// import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About ShopHub</h1>
          <p>Your trusted destination for quality products since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At ShopHub, we believe in making quality products accessible to everyone.
          Our mission is to provide an exceptional shopping experience through
          innovative technology and outstanding customer service.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <Users className="icon" />
          <h3>1M+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <Globe className="icon" />
          <h3>50+</h3>
          <p>Countries Served</p>
        </div>
        <div className="stat-item">
          <Award className="icon" />
          <h3>100K+</h3>
          <p>Products</p>
        </div>
        <div className="stat-item">
          <TrendingUp className="icon" />
          <h3>99%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          {[
            { name: 'John Doe', role: 'CEO', image: 'ceo' },
            { name: 'Jane Smith', role: 'CTO', image: 'cto' },
            { name: 'Mike Johnson', role: 'COO', image: 'coo' },
            { name: 'Sarah Williams', role: 'CMO', image: 'cmo' }
          ].map(member => (
            <div key={member.name} className="team-member">
              <div className="member-image"></div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;