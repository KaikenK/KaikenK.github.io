// ==================== PRELOADER ====================
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
        progress += Math.random() * 30 + 20; // Much faster increments
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide preloader quickly after completion
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300); // Faster fade out
            }, 100); // Minimal delay
        }
        
        loadingProgress.style.width = progress + '%';
        
        // Update loading message
        const messageIndex = Math.floor((progress / 100) * (messages.length - 1));
        loadingText.textContent = messages[messageIndex];
        
    }, 80); // Faster interval (was 200ms, now 80ms)
});