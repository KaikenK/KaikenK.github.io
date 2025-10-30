// ==================== CUSTOM CURSOR ====================
document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth follow animation for outline
    function animateCursor() {
        const distX = mouseX - outlineX;
        const distY = mouseY - outlineY;
        
        outlineX += distX * 0.15;
        outlineY += distY * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .stat-card, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('cursor-hover');
            cursorOutline.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('cursor-hover');
            cursorOutline.classList.remove('cursor-hover');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
});

// Add cursor styles dynamically
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .cursor-dot,
    .cursor-outline {
        pointer-events: none;
        position: fixed;
        border-radius: 50%;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
    }
    
    .cursor-dot {
        width: 8px;
        height: 8px;
        background: var(--neon-primary);
        box-shadow: 0 0 20px var(--neon-primary);
    }
    
    .cursor-outline {
        width: 40px;
        height: 40px;
        border: 2px solid var(--neon-primary);
        opacity: 0.5;
        transition: all 0.15s ease;
    }
    
    .cursor-dot.cursor-hover {
        width: 4px;
        height: 4px;
        background: var(--neon-secondary);
        box-shadow: 0 0 30px var(--neon-secondary);
    }
    
    .cursor-outline.cursor-hover {
        width: 60px;
        height: 60px;
        border-color: var(--neon-secondary);
        opacity: 0.8;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
    }
    
    @media (max-width: 768px) {
        .cursor-dot,
        .cursor-outline {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyles);