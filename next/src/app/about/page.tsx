"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function AboutPage() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionItem = fadeUp(reduceMotion, 8, 0.7);

  return (
    <>
      {/* Preloader (structure preserved for existing JS) */}
      <div id="preloader">
        <div className="preloader-content">
          <div className="cyber-loader">
            <div className="cyber-circle"></div>
            <div className="cyber-circle"></div>
            <div className="cyber-circle"></div>
          </div>
          <h2 className="neon-text glitch" data-text="LOADING">
            LOADING
          </h2>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-text">Loading profile...</p>
        </div>
      </div>

      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="/" className="zen-logo">
            <img
              src="/assets/images/logo.png"
              alt="Dhruv Menon Logo"
              className="zen-logo-img"
            />
          </a>

          <ul className="nav-menu" id="navMenu">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link active">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/assets/resume.pdf"
                className="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="nav-right">
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Toggle theme"
            >
              <i className="fas fa-sun sun-icon"></i>
              <i className="fas fa-moon moon-icon"></i>
            </button>

            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      <motion.section
        className="zen-page-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionItem}
      >
        {/* Subtle in-view fade for editorial header */}
        <div className="container">
          <div className="zen-header-content">
            <span className="zen-label">ABOUT ME</span>
            <h1 className="zen-page-title">Building the Future of Finance</h1>
            <p className="zen-page-subtitle">
              Quantitative finance aspirant leveraging machine learning and
              backend engineering for intelligent trading systems
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-about-grid">
            <div className="zen-about-image">
              <div className="zen-profile-photo">
                <img src="/assets/images/profile.jpeg" alt="Dhruv Menon" />
                <div className="zen-photo-border"></div>
              </div>
            </div>

            <div className="zen-about-content">
              <h2 className="zen-section-title">Who I Am</h2>
              <div className="zen-about-text">
                <p>
                  I&apos;m a <strong>Computer Science and Finance Engineering student</strong> at
                  PES University, Bangalore, with a passion for quantitative
                  finance and algorithmic trading. My journey combines rigorous
                  academic excellence (CGPA: 8.87) with hands-on experience in
                  building high-performance trading systems.
                </p>
                <p>
                  As a <strong>quantitative finance aspirant</strong>, I&apos;m deeply focused on
                  developing mathematical models and statistical algorithms that
                  drive alpha generation in financial markets. My work bridges
                  the gap between theoretical finance and practical
                  implementation through robust backend systems.
                </p>
                <p>
                  I specialize in <strong>backend engineering</strong> for financial applications,
                  with expertise in building low-latency trading infrastructure,
                  real-time market data systems, and scalable API architectures.
                  Currently interning at <strong>GoQuant</strong>, I work on backend trading
                  systems achieving low latency times with multi-threaded data
                  streaming.
                </p>
                <p>
                  My strong inclination towards <strong>machine learning</strong> drives my
                  approach to quantitative finance. I leverage ML for price
                  prediction, pattern recognition, volatility forecasting, and
                  portfolio optimization. I&apos;ve built NLP systems using
                  transformer models (LLaMA 3.1), implemented RAG architectures
                  with vector embeddings, and developed deep learning models for
                  time-series analysis.
                </p>
                <p>
                  With <strong>former cybersecurity experience</strong> at Tecplir and ISFCR
                  Research Lab, I bring a unique perspective on secure system
                  design. My background in intrusion detection systems, SIEM
                  integration, and security operations informs my approach to
                  building resilient financial infrastructure that prioritizes
                  data integrity and system security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-expertise-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-section-header">
            <span className="zen-label">EXPERTISE</span>
            <h2 className="zen-title">What I Do</h2>
          </div>

          <div className="zen-expertise-grid">
            <div className="zen-expertise-card">
              <div className="zen-expertise-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Quantitative Finance</h3>
              <p>
                Developing statistical arbitrage models, implementing
                algorithmic trading strategies, and building quantitative
                systems for alpha generation. Focus on mean reversion, momentum
                strategies, and portfolio optimization using advanced
                mathematical frameworks.
              </p>
            </div>

            <div className="zen-expertise-card">
              <div className="zen-expertise-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Engineering</h3>
              <p>
                Building high-performance trading infrastructure with Python,
                FastAPI, C++, and Rust. Expertise in low-latency systems,
                WebSocket implementations, REST APIs, and multi-threaded data
                streaming for real-time market data processing.
              </p>
            </div>

            <div className="zen-expertise-card">
              <div className="zen-expertise-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Machine Learning</h3>
              <p>
                Applying deep learning and NLP to financial problems. Experience
                with transformer models, time-series forecasting, sentiment
                analysis, and reinforcement learning for trading strategies.
                Proficient in PyTorch, TensorFlow, and vector database systems.
              </p>
            </div>

            <div className="zen-expertise-card">
              <div className="zen-expertise-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure Systems</h3>
              <p>
                Former cybersecurity experience in intrusion detection, SIEM
                integration, and security operations. Apply security-first
                principles to financial system design, ensuring data integrity,
                threat mitigation, and secure API architectures.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-journey-section"
        style={{ marginTop: "8rem" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-section-header">
            <span className="zen-label">JOURNEY</span>
            <h2 className="zen-title">Professional Path</h2>
          </div>

          <div className="zen-journey-content">
            <div className="zen-journey-item">
              <div className="zen-journey-year">2025 - Present</div>
              <div className="zen-journey-details">
                <h3>Backend Engineer Intern</h3>
                <p className="zen-journey-company">GoQuant</p>
                <p>
                  Building scalable trading infrastructure and algorithmic
                  systems. Developing low-latency backends for CeFi and DeFi
                  exchanges with sub-500ms latency. Working with FastAPI, C++,
                  and Rust to create robust order entry and market data systems.
                </p>
              </div>
            </div>

            <div className="zen-journey-item">
              <div className="zen-journey-year">2025</div>
              <div className="zen-journey-details">
                <h3>Research Intern</h3>
                <p className="zen-journey-company">ISFCR Research Lab</p>
                <p>
                  Conducted research in AI applications for cybersecurity,
                  focusing on intrusion detection systems and machine
                  learning-based threat analysis. Published work in advanced
                  cybersecurity methodologies and NLP-based security automation.
                </p>
              </div>
            </div>

            <div className="zen-journey-item">
              <div className="zen-journey-year">2024</div>
              <div className="zen-journey-details">
                <h3>Security Operations Intern</h3>
                <p className="zen-journey-company">Tecplir</p>
                <p>
                  Gained hands-on experience with Google Chronicle SIEM, security
                  monitoring, and threat analysis in SOC environment. Developed
                  risk mitigation strategies and real-time threat response
                  protocols.
                </p>
              </div>
            </div>

            <div className="zen-journey-item">
              <div className="zen-journey-year">2023 - Present</div>
              <div className="zen-journey-details">
                <h3>BTech, Computer Science &amp; Finance Engineering</h3>
                <p className="zen-journey-company">PES University, Bangalore</p>
                <p>
                  CGPA: 8.87 | Focus on quantitative finance, algorithmic
                  trading, machine learning, and financial modeling. Active in
                  competitive programming and quantitative research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-cta-content">
            <h2 className="zen-cta-title">Let&apos;s Build Something Together</h2>
            <p className="zen-cta-text">
              Open to opportunities in quantitative finance, machine learning,
              and algorithmic trading systems
            </p>
            <div className="zen-cta-buttons">
              <a
                href="mailto:dhruvmenon2005@gmail.com"
                className="zen-btn zen-btn-primary"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
              <a href="/projects" className="zen-btn zen-btn-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="zen-footer">
        <div className="container">
          <div className="zen-footer-content">
            <div className="zen-footer-left">
              <div className="zen-footer-logo">Dhruv Menon</div>
              <p className="zen-footer-tagline">
                Computer Science &amp; Finance Engineer
              </p>
            </div>

            <div className="zen-footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </div>

            <div className="zen-footer-social">
              <a
                href="https://github.com/KaikenK"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/dhruvmenon2005"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:dhruvmenon2005@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="zen-footer-bottom">
            <p>© 2025 Dhruv Menon · Bangalore, India</p>
          </div>
        </div>
      </footer>
    </>
  );
}
