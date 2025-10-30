// ==================== PRELOADER ====================
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    
    if (!preloader) return;
    
    let progress = 0;
    const messages = [
        'Loading assets...',
        'Initializing components...',
        'Establishing connection...',
        'Almost there...',
        'Ready!'
    ];
    
    // Simulate loading progress
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide preloader after completion
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }, 500);
        }
        
        loadingProgress.style.width = progress + '%';
        
        // Update loading message
        const messageIndex = Math.floor((progress / 100) * (messages.length - 1));
        loadingText.textContent = messages[messageIndex];
        
    }, 200);
});