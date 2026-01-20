"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function ProjectsPage() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionItem = fadeUp(reduceMotion, 8, 0.7);

  return (
    <>
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
          <p className="loading-text">Loading projects...</p>
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
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects" className="nav-link active">
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
        {/* Subtle in-view fade for header */}
        <div className="container">
          <div className="zen-header-content">
            <span className="zen-label">PORTFOLIO</span>
            <h1 className="zen-page-title">Selected Works</h1>
            <p className="zen-page-subtitle">
              Quantitative finance, machine learning systems, and algorithmic
              trading platforms
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="projects-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="projects-grid-full">
            <div className="project-card-full" data-category="web opensource">
              <div className="project-image-full">
                <img
                  src="https://via.placeholder.com/800x600/000000/ffffff?text=Arbitrage+Bot"
                  alt="Crypto Arbitrage Bot"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>Quantitative Cryptocurrency Arbitrage Bot</h3>
                    <p>
                      Machine learning-driven high-frequency trading system
                      implementing statistical arbitrage models with pattern
                      recognition algorithms, mean reversion strategies, and
                      ML-based volatility forecasting. Leverages quantitative
                      finance techniques for alpha generation across multiple
                      exchanges.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK/Arbitrage-bot"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>Quantitative Arbitrage Bot</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2025
                    </span>
                    <span className="meta-item">
                      <i className="far fa-star"></i> Featured
                    </span>
                  </div>
                </div>
                <p>
                  ML-powered algorithmic trading system with statistical models
                  for price prediction, portfolio optimization, and risk
                  management in crypto markets.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Quantitative Finance</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">Statistical Models</span>
                </div>
              </div>
            </div>

            <div className="project-card-full" data-category="web">
              <div className="project-image-full">
                <img
                  src="https://via.placeholder.com/800x600/000000/cccccc?text=AI+Lecture+Summarizer"
                  alt="AI Lecture Summarizer"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>NLP-Powered Lecture Summarization</h3>
                    <p>
                      Advanced natural language processing system using
                      transformer models (LLaMA 3.1) and
                      retrieval-augmented generation. Features semantic search
                      with ChromaDB vector database and MiniLM embeddings for
                      intelligent content extraction and summarization.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>AI Lecture Summarizer</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2025
                    </span>
                  </div>
                </div>
                <p>
                  Deep learning NLP system with transformer architecture
                  achieving 89% similarity accuracy in semantic summarization
                  tasks.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Deep Learning</span>
                  <span className="tech-tag">LLaMA 3.1</span>
                  <span className="tech-tag">Vector Embeddings</span>
                  <span className="tech-tag">RAG</span>
                </div>
              </div>
            </div>

            <div className="project-card-full" data-category="web mobile">
              <div className="project-image-full">
                <img
                  src="/assets/images/poebot.jpeg"
                  alt="PoeBot.ai"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>Machine Learning Content Generation Platform</h3>
                    <p>
                      NLP-based content generation system leveraging transformer
                      models for automated text synthesis. Implements
                      context-aware language models with tone analysis, semantic
                      coherence scoring, and sentiment-driven generation
                      algorithms.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>PoeBot.ai</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2023
                    </span>
                  </div>
                </div>
                <p>
                  ML-powered content platform with transformer-based text
                  generation, sentiment analysis, and contextual relevance
                  optimization.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Transformers</span>
                  <span className="tech-tag">Sentiment Analysis</span>
                  <span className="tech-tag">React.js</span>
                </div>
              </div>
            </div>

            <div className="project-card-full" data-category="web">
              <div className="project-image-full">
                <img
                  src="https://via.placeholder.com/800x600/000000/ffffff?text=Resume+AI"
                  alt="Resume Optimization AI"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>AI Resume Optimization System</h3>
                    <p>
                      Intelligent resume enhancement platform using GPT-4 for
                      ATS optimization. Features real-time keyword analysis,
                      industry-specific tailoring, and machine learning-based
                      scoring for job application success.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>Resume AI Optimizer</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2024
                    </span>
                  </div>
                </div>
                <p>
                  AI-powered resume optimization tool with ATS compatibility
                  scoring and automated enhancement suggestions.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">GPT-4</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Web App</span>
                  <span className="tech-tag">AI/ML</span>
                </div>
              </div>
            </div>

            <div className="project-card-full" data-category="web">
              <div className="project-image-full">
                <img
                  src="https://via.placeholder.com/800x600/000000/ffffff?text=Trading+Dashboard"
                  alt="Trading Analytics Dashboard"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>Trading Analytics Dashboard</h3>
                    <p>
                      Real-time analytics dashboard for trading performance and
                      risk metrics. Features interactive visualizations,
                      backtesting tools, and portfolio optimization insights for
                      quantitative traders.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>Trading Dashboard</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2024
                    </span>
                  </div>
                </div>
                <p>
                  Interactive analytics platform for quantitative trading
                  performance and portfolio insights.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">D3.js</span>
                  <span className="tech-tag">Quant Analytics</span>
                  <span className="tech-tag">Dashboard</span>
                </div>
              </div>
            </div>

            <div className="project-card-full" data-category="web">
              <div className="project-image-full">
                <img
                  src="https://via.placeholder.com/800x600/000000/ffffff?text=Cyber+Intel"
                  alt="Cyber Intelligence Platform"
                  loading="lazy"
                />
                <div className="project-overlay-full">
                  <div className="overlay-content-full">
                    <h3>Cyber Intelligence Platform</h3>
                    <p>
                      Threat intelligence aggregation platform integrating OSINT
                      feeds and ML-based threat scoring. Provides real-time
                      security alerts, automated incident response workflows,
                      and predictive risk modeling for enterprises.
                    </p>
                    <div className="project-links-full">
                      <a
                        href="https://github.com/KaikenK"
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn zen-btn-primary"
                      >
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info-full">
                <div className="project-header-full">
                  <h3>Cyber Intel Platform</h3>
                  <div className="project-meta">
                    <span className="meta-item">
                      <i className="far fa-calendar"></i> 2023
                    </span>
                  </div>
                </div>
                <p>
                  ML-powered cybersecurity platform with real-time threat
                  intelligence and automated response systems.
                </p>
                <div className="tech-stack-full">
                  <span className="tech-tag">Cybersecurity</span>
                  <span className="tech-tag">OSINT</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">SIEM</span>
                </div>
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
            <h2 className="zen-cta-title">Interested in Collaboration?</h2>
            <p className="zen-cta-text">
              Open to opportunities in quantitative finance, machine learning,
              and algorithmic trading systems
            </p>
            <div className="zen-cta-buttons">
              <a
                href="mailto:dhruvmenon2005@gmail.com"
                className="zen-btn zen-btn-primary"
              >
                Contact Me
              </a>
              <a
                href="/assets/resume.pdf"
                className="zen-btn zen-btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
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
