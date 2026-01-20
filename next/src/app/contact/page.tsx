"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

export default function ContactPage() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionItem = fadeUp(reduceMotion, 8, 0.7);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      const form = document.querySelector(".contact-form") as HTMLElement | null;
      const success = document.getElementById("successMessage");
      if (form) form.style.display = "none";
      if (success) success.style.display = "block";
    }
  }, []);

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
          <p className="loading-text">Loading contact...</p>
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
              <a href="/projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link active">
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
            <span className="zen-label">GET IN TOUCH</span>
            <h1 className="zen-page-title">Let&apos;s Connect</h1>
            <p className="zen-page-subtitle">
              Available for opportunities in quantitative trading, blockchain,
              and cybersecurity
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItem}
      >
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-text">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly hello.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-content">
                    <h3>Email</h3>
                    <a href="mailto:dhruvmenon2005@gmail.com">
                      dhruvmenon2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-item-content">
                    <h3>Phone</h3>
                    <a href="tel:+918660856770">+91 8660856770</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-item-content">
                    <h3>Location</h3>
                    <p>Bangalore, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-item-content">
                    <h3>LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/dhruvmenon2005"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/dhruvmenon2005
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="contact-item-content">
                    <h3>GitHub</h3>
                    <a
                      href="https://github.com/KaikenK"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/KaikenK
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Connect on Social Media</h3>
                <div className="contact-social-icons">
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
                    href="https://linkedin.com/in/dhruvmenon2005"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="mailto:dhruvmenon2005@gmail.com"
                    className="social-icon"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send a Message</h2>

              <form
                action="https://formsubmit.co/dhruvmenon2005@gmail.com"
                method="POST"
                className="contact-form"
              >
                <input type="hidden" name="_subject" value="New contact from portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://KaikenK.github.io/contact/?success=true"
                />

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="zen-btn zen-btn-primary submit-btn">
                  Send Message
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>

              <div
                className="success-message"
                id="successMessage"
                style={{ display: "none" }}
              >
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
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
