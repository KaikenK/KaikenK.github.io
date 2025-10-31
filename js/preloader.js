// ==================== PRELOADER ====================
// Show preloader immediately when page starts loading
const preloader = document.getElementById('preloader');
if (preloader) {
    preloader.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    
    if (!preloader) return;
    
    let progress = 0;
    const messages = [
        'Loading...',
        'Ready!'
    ];
    
    // Fast loading progress
    const interval = setInterval(() => {
        progress += Math.random() * 30 + 20; // Balanced increments for 0.5-1s total
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide preloader quickly after completion
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300); // Fade out time
            }, 100); // Small delay
        }
        
        loadingProgress.style.width = progress + '%';
        
        // Update loading message
        const messageIndex = Math.floor((progress / 100) * (messages.length - 1));
        loadingText.textContent = messages[messageIndex];
        
    }, 80); // Balanced interval for 0.5-1s total time
});

// Also hide preloader on window load as fallback
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 100);
    }
});