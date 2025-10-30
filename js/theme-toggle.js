// ==================== THEME TOGGLE ====================
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    // Apply the theme on load
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'light') {
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0deg)';
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-90deg)';
        } else {
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(90deg)';
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0deg)';
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
});