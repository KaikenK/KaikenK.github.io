"use client";

import Script from "next/script";
import { motion, useReducedMotion } from "framer-motion";
import {
  breatheOpacity,
  fadeScale,
  fadeUp,
  staggerContainer,
} from "../lib/motion";

export default function Home() {
  const reduceMotion = Boolean(useReducedMotion());
  const heroStagger = staggerContainer(reduceMotion, 0.1);
  const heroItem = fadeUp(reduceMotion, 6, 0.7);
  const sectionItem = fadeUp(reduceMotion, 8, 0.7);
  const profileItem = fadeScale(reduceMotion, 0.98, 0.7);

  return (
    <>
      {/* Preloader (unchanged structure, required by existing JS) */}
      <div id="preloader">
        <div className="preloader-content">
          <div className="cyber-loader">
            <div className="cyber-circle"></div>
            <div className="cyber-circle"></div>
            <div className="cyber-circle"></div>
          </div>
          <h2 className="neon-text glitch" data-text="INITIALIZING">
            INITIALIZING
          </h2>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-text">Loading Experience...</p>
        </div>
      </div>

      {/* Navigation (no visual changes; existing CSS handles hover/active transitions) */}
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
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
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

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg-effects">
          <div className="cyber-grid"></div>
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>

        <div className="container hero-container">
          <motion.div
            className="hero-content"
            data-parallax="0.2"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Gentle fade + stagger for hero text block */}
            <motion.div variants={heroItem}>
              <motion.div
                className="hero-label"
                variants={breatheOpacity(reduceMotion)}
                initial="initial"
                animate="animate"
              >
                <span className="status-dot"></span>
                <span>Available for opportunities</span>
              </motion.div>
            </motion.div>

            <motion.h1 className="hero-title" variants={heroItem}>
              <span className="greeting">Hello, I&apos;m</span>
              <span className="name zen-text">DHRUV MENON</span>
            </motion.h1>

            <motion.div className="hero-subtitle" variants={heroItem}>
              <span className="zen-accent">
                Computer Science &amp; Finance Engineer
              </span>
            </motion.div>

            <motion.p className="hero-description" variants={heroItem}>
              Quantitative Finance • Machine Learning • Algorithmic Trading
              <br />
              Building intelligent, data-driven financial systems
            </motion.p>

            <motion.div className="hero-buttons" variants={heroItem}>
              {/* Subtle CTA lift + fade */}
              <motion.a
                href="/projects"
                className="btn btn-primary zen-btn zen-btn-primary"
                whileHover={{ opacity: 0.95, transition: { ease: "easeOut" } }}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </motion.a>
              <motion.a
                href="/contact"
                className="btn btn-secondary zen-btn zen-btn-primary"
                whileHover={{ opacity: 0.95, transition: { ease: "easeOut" } }}
              >
                <span>Get In Touch</span>
                <i className="fas fa-paper-plane"></i>
              </motion.a>
            </motion.div>

            <motion.div className="hero-social" variants={heroItem}>
              <a
                href="https://github.com/KaikenK"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/dhruv-menon-"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="tel:+918660856770" className="social-icon" aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="mailto:dhruvmenon2005@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            data-parallax="0.3"
            variants={profileItem}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: reduceMotion ? 1 : 1.01 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            {/* Subtle profile fade/scale for depth */}
            <div className="zen-container">
              <div className="zen-profile-photo">
                <img src="/assets/images/profile.jpeg" alt="Dhruv Menon" />
                <div className="zen-photo-border"></div>
              </div>

              <div className="zen-text-stack">
                <span className="zen-subtitle">Building the Future</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="zen-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        {/* Gentle in-view fade for scroll sections */}
        <div className="container">
          <div className="zen-stats-grid">
            <div className="zen-stat">
              <span className="zen-stat-number">3+</span>
              <span className="zen-stat-label">Years Experience</span>
            </div>
            <div className="zen-divider"></div>
            <div className="zen-stat">
              <span className="zen-stat-number">6+</span>
              <span className="zen-stat-label">Major Projects</span>
            </div>
            <div className="zen-divider"></div>
            <div className="zen-stat">
              <span className="zen-stat-number">8.87</span>
              <span className="zen-stat-label">CGPA</span>
            </div>
            <div className="zen-divider"></div>
            <div className="zen-stat">
              <span className="zen-stat-number">PES</span>
              <span className="zen-stat-label">University</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-section-header">
            <span className="zen-label">EXPERIENCE</span>
            <h2 className="zen-title">Work History</h2>
          </div>

          <div className="zen-timeline">
            <div className="zen-timeline-item">
              <div className="zen-timeline-marker"></div>
              <div className="zen-timeline-content">
                <div className="zen-timeline-date">August 2025 - Present</div>
                <h3 className="zen-timeline-title">Back-End Engineer Intern</h3>
                <div className="zen-timeline-company">GoQuant</div>
                <p className="zen-timeline-desc">
                  Building scalable trading infrastructure and algorithmic
                  systems. Working with modern tech stacks for high-frequency
                  trading operations.
                </p>
              </div>
            </div>

            <div className="zen-timeline-item">
              <div className="zen-timeline-marker"></div>
              <div className="zen-timeline-content">
                <div className="zen-timeline-date">June 2025 - July 2025</div>
                <h3 className="zen-timeline-title">Research Intern</h3>
                <div className="zen-timeline-company">ISFCR Research Lab</div>
                <p className="zen-timeline-desc">
                  Conducting research in intrusion detection systems. Published
                  work in advanced cybersecurity methodologies.
                </p>
              </div>
            </div>

            <div className="zen-timeline-item">
              <div className="zen-timeline-marker"></div>
              <div className="zen-timeline-content">
                <div className="zen-timeline-date">July 2024 - August 2024</div>
                <h3 className="zen-timeline-title">Security Operations Intern</h3>
                <div className="zen-timeline-company">Tecplix</div>
                <p className="zen-timeline-desc">
                  Hands-on experience with Google Chronicle SIEM. Security
                  monitoring and threat analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-section-header">
            <span className="zen-label">EXPERTISE</span>
            <h2 className="zen-title">Technical Skills</h2>
          </div>

          <div className="zen-skills-grid">
            <div className="zen-skill-category">
              <h3 className="zen-skill-category-title">Languages</h3>
              <div className="zen-skill-tags">
                <span className="zen-skill-tag">Python</span>
                <span className="zen-skill-tag">JavaScript</span>
                <span className="zen-skill-tag">C++</span>
                <span className="zen-skill-tag">Rust</span>
                <span className="zen-skill-tag">SQL</span>
                <span className="zen-skill-tag">TypeScript</span>
              </div>
            </div>

            <div className="zen-skill-category">
              <h3 className="zen-skill-category-title">Frameworks</h3>
              <div className="zen-skill-tags">
                <span className="zen-skill-tag">FastAPI</span>
                <span className="zen-skill-tag">React</span>
                <span className="zen-skill-tag">Node.js</span>
                <span className="zen-skill-tag">Flutter</span>
                <span className="zen-skill-tag">Express</span>
              </div>
            </div>

            <div className="zen-skill-category">
              <h3 className="zen-skill-category-title">Tools &amp; Technologies</h3>
              <div className="zen-skill-tags">
                <span className="zen-skill-tag">Git</span>
                <span className="zen-skill-tag">Docker</span>
                <span className="zen-skill-tag">PostgreSQL</span>
                <span className="zen-skill-tag">MongoDB</span>
                <span className="zen-skill-tag">ChromaDB</span>
                <span className="zen-skill-tag">Redis</span>
              </div>
            </div>

            <div className="zen-skill-category">
              <h3 className="zen-skill-category-title">Specializations</h3>
              <div className="zen-skill-tags">
                <span className="zen-skill-tag">Quantitative Trading</span>
                <span className="zen-skill-tag">Machine Learning</span>
                <span className="zen-skill-tag">Blockchain</span>
                <span className="zen-skill-tag">Cybersecurity</span>
                <span className="zen-skill-tag">SIEM</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="zen-projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="zen-section-header">
            <span className="zen-label">PORTFOLIO</span>
            <h2 className="zen-title">Selected Projects</h2>
          </div>

          <div className="zen-projects-grid">
            <article className="zen-project-card">
              <div className="zen-project-number">01</div>
              <h3 className="zen-project-title">
                Quantitative Crypto Arbitrage Bot
              </h3>
              <p className="zen-project-desc">
                High-frequency trading bot with statistical arbitrage models and
                REST API integrations for CeFi/DeFi exchanges
              </p>
              <div className="zen-tech-stack">
                <span>Python</span>
                <span>ML</span>
                <span>Quant Finance</span>
              </div>
              <a href="/projects" className="zen-project-link">
                View Project →
              </a>
            </article>

            <article className="zen-project-card">
              <div className="zen-project-number">02</div>
              <h3 className="zen-project-title">AI Lecture Summarizer</h3>
              <p className="zen-project-desc">
                NLP-driven summarization with transformer models and semantic
                search systems
              </p>
              <div className="zen-tech-stack">
                <span>NLP</span>
                <span>RAG</span>
                <span>MiniLM</span>
              </div>
              <a href="/projects" className="zen-project-link">
                View Project →
              </a>
            </article>

            <article className="zen-project-card">
              <div className="zen-project-number">03</div>
              <h3 className="zen-project-title">PoeBot.ai Content Platform</h3>
              <p className="zen-project-desc">
                AI-driven content generation tool for automated emails and
                social media with NLP integration
              </p>
              <div className="zen-tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Flutter</span>
              </div>
              <a href="/projects" className="zen-project-link">
                View Project →
              </a>
            </article>
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
                href="https://www.linkedin.com/in/dhruv-menon-/"
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

      <div id="resumeModal" className="resume-modal">
        <div className="resume-modal-content">
          <button className="resume-modal-close" id="closeResumeBtn">
            <i className="fas fa-times"></i>
          </button>
          <div className="resume-modal-header">
            <h2>Resume</h2>
            <a
              href="/assets/resume.pdf"
              id="downloadResumeBtn"
              className="zen-btn zen-btn-primary"
              download="Dhruv_Menon_Resume.pdf"
            >
              <i className="fas fa-download"></i>
              <span>Download PDF</span>
            </a>
          </div>
          <div className="resume-viewer">
            <object
              id="resumePDF"
              data="/assets/resume.pdf"
              type="application/pdf"
            >
              <embed src="/assets/resume.pdf" type="application/pdf" />
            </object>
          </div>
        </div>
      </div>

      <Script src="/js/stats.js" strategy="afterInteractive" />
      <Script src="/js/resume-modal.js" strategy="afterInteractive" />
    </>
  );
}
