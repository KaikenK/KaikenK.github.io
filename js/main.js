// ==================== MAIN JAVASCRIPT ====================

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const hamburger = document.getElementById('hamburger');
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    // Active navigation link based on scroll position
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==================== MOBILE MENU TOGGLE ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// ==================== TYPING EFFECT ====================
const typedTextElement = document.querySelector('.typed-text');

if (typedTextElement) {
    const textArray = [
        'Digital Experiences',
        'Innovative Solutions',
        'Modern Interfaces',
        'Scalable Applications',
        'Creative Designs'
    ];
    
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function type() {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    setTimeout(type, 1000);
}

// ==================== SCROLL REVEAL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// Add CSS for AOS animations dynamically
const aosStyles = document.createElement('style');
aosStyles.textContent = `
    [data-aos] {
        opacity: 0;
        transition: all 0.8s ease;
    }
    
    [data-aos="fade-up"] {
        transform: translateY(50px);
    }
    
    [data-aos="fade-down"] {
        transform: translateY(-50px);
    }
    
    [data-aos="fade-left"] {
        transform: translateX(-50px);
    }
    
    [data-aos="fade-right"] {
        transform: translateX(50px);
    }
    
    [data-aos="zoom-in"] {
        transform: scale(0.8);
    }
    
    [data-aos].aos-animate {
        opacity: 1;
        transform: translate(0) scale(1);
    }
`;
document.head.appendChild(aosStyles);

// ==================== GLITCH EFFECT ON HOVER ====================
const glitchElements = document.querySelectorAll('.glitch');

glitchElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('glitching');
        setTimeout(() => {
            element.classList.remove('glitching');
        }, 500);
    });
});

// ==================== FORM VALIDATION (for contact page) ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const subject = document.getElementById('subject')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Success
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', { name, email, subject, message });
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? 'var(--gradient-neon)' : 'var(--gradient-pink)'};
        color: var(--bg-dark);
        border-radius: var(--border-radius);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease forwards;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-family: var(--font-body);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// Notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ==================== LAZY LOADING IMAGES ====================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ==================== PAGE LOAD ANIMATIONS ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 Welcome to My Portfolio! ', 
    'background: linear-gradient(135deg, #00ff88 0%, #00ffff 100%); color: #0a0a0f; font-size: 20px; padding: 10px 20px; border-radius: 8px; font-weight: bold;');
console.log('%c💻 Built with HTML, CSS, and JavaScript ', 
    'color: #00ff88; font-size: 14px; font-weight: bold;');
console.log('%c🔗 GitHub: https://github.com/KaikenK ', 
    'color: #00ffff; font-size: 14px;');
console.log('%c📧 Interested in working together? Let\'s connect! ', 
    'color: #ff0080; font-size: 14px; font-weight: bold;');