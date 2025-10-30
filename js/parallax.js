// ==================== PARALLAX SCROLLING ====================
document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrolled * speed);
            
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Throttle scroll event for performance
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial call
    updateParallax();
});

// Parallax for mouse movement (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const glowOrbs = document.querySelectorAll('.glow-orb');
    
    if (!hero || glowOrbs.length === 0) return;
    
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        glowOrbs.forEach((orb, index) => {
            const speed = (index + 1) * 10;
            const x = xPercent * speed;
            const y = yPercent * speed;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});