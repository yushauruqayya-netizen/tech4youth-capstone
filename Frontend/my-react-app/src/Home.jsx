import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Laptop, BookOpen, Heart, Rocket } from 'lucide-react';
import heroImg from './assets/hero-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Column: Text Content */}
          <div className="hero-content">
            <div className="badge">
              <span>📌 Free for every young learner</span>
            </div>

            <h1 className="hero-title">
              Empowering the Next Generation of <span>Software Developers</span>
            </h1>

            <p className="hero-description">
              Learn to code by building real things. Five core courses, thousands of
              students and a community that has your back — from your first HTML tag
              to full-stack apps.
            </p>

            <div className="hero-buttons">
              <Link to="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
                <BookOpen size={18} /> Explore Courses
              </Link>
              <Link to="/register" className="btn-secondary" style={{ textDecoration: 'none' }}>
                Join Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Badge */}
          <div className="hero-image-wrapper">
            <img src={heroImg} alt="Coding Workspace" className="hero-img" />
            
            <div className="floating-card">
              <div className="icon-box">
                <Code size={20} color="#6366f1" />
              </div>
              <div className="floating-card-text">
                <h4>Learn by Doing</h4>
                <p>Build real-world projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="section-badge">WHY CHOOSE US</div>
        <h2>Why Tech for Youth?</h2>
        <p className="section-subtitle">
          Built by developers who started exactly where you are — curious,
          ambitious and ready to build.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon blue-icon">
              <Laptop size={22} />
            </div>
            <h3>Project-based learning</h3>
            <p>
              Every track ships with real projects you build, break and fix —
              no passive theory marathons, just code you can show off!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-icon">
              <BookOpen size={22} />
            </div>
            <h3>Free video tracks</h3>
            <p>
              Curated, full-length video courses for every step of your journey
              — completely free, forever, on every device.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green-icon">
              <Heart size={22} />
            </div>
            <h3>Local community support</h3>
            <p>
              Join study groups, hackathons and mentor sessions with young
              developers in your area who cheer you on.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-icon">
            <Rocket size={24} color="#ffffff" />
          </div>
          <h2>Your coding journey starts today</h2>
          <p>
            Create a free account, pick your track and start building — your
            first project is one click away.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn-primary" style={{ textDecoration: 'none' }}>
              Join Now <ArrowRight size={18} />
            </Link>
            <Link to="/courses" className="btn-outline" style={{ textDecoration: 'none' }}>
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Tech for Youth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;