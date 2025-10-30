# 🚀 Dhruv's Futuristic Portfolio

A premium, neon-themed personal portfolio website with advanced animations, parallax effects, and interactive elements. Built with modern web technologies and optimized for GitHub Pages.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design
- **Futuristic Neon Theme** - Cyberpunk-inspired with glowing accents
- **Auto Theme Detection** - Detects system preference (Dark/Light) with manual toggle
- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Neon Glow Animations** - Pulsing, glowing borders and text

### 🎭 Animations & Interactions
- **Custom Animated Cursor** - Interactive cursor with trailing effects
- **Preloader Animation** - 3-second cyberpunk loading sequence
- **Parallax Scrolling** - Depth-based scroll effects
- **Animated Statistics** - Real-time counting numbers
- **Scroll Reveal Animations** - Elements fade and slide into view
- **Hover Effects** - Glowing buttons, cards, and interactive elements

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Smooth breakpoint transitions

### 🚀 Performance
- Lazy loading images
- Optimized animations (60fps)
- Minimal dependencies
- Fast load times

## 📂 Project Structure

```
KaikenK.github.io/
├── index.html              # Home page / Landing
├── about.html              # About page
├── projects.html           # Projects showcase
├── contact.html            # Contact page
├── css/
│   ├── main.css           # Core styles & variables
│   ├── animations.css     # Animation definitions
│   ├── responsive.css     # Media queries
│   └── themes.css         # Light/Dark theme styles
├── js/
│   ├── main.js            # Core functionality
│   ├── cursor.js          # Custom cursor logic
│   ├── preloader.js       # Loading screen
│   ├── parallax.js        # Parallax effects
│   ├── stats.js           # Animated counters
│   └── theme-toggle.js    # Theme switcher
├── assets/
│   ├── images/            # Photos, logos, project screenshots
│   ├── icons/             # SVG icons
│   └── fonts/             # Custom fonts (if any)
└── README.md              # This file
```

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/KaikenK/KaikenK.github.io.git
cd KaikenK.github.io
```

### 2. Customize Your Content

#### Update Personal Information
Edit `index.html`, `about.html`, `projects.html`, and `contact.html`:

**Hero Section (index.html):**
```html
<h1>Your Name</h1>
<p class="tagline">Your Role / Tagline</p>
```

**About Section (about.html):**
- Update bio text
- Change profile image path
- Modify skills and experience

**Projects (projects.html):**
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Description</p>
    <a href="https://github.com/yourusername/repo">GitHub</a>
    <a href="https://demo.com">Live Demo</a>
</div>
```

**Contact (contact.html):**
- Update email address
- Add your social media links
- Configure contact form endpoint (see below)

#### Update Statistics (in about.html)
```html
<div class="stat-item" data-target="100">0</div>
```
Change `data-target` to your desired number.

#### Change Colors & Theme
Edit `css/main.css`:
```css
:root {
    /* Neon Colors */
    --neon-primary: #00ff88;    /* Primary neon green */
    --neon-secondary: #0ff;     /* Cyan accent */
    --neon-pink: #ff0080;       /* Hot pink */
    --neon-purple: #b026ff;     /* Purple glow */
    
    /* Backgrounds */
    --bg-dark: #0a0a0f;
    --bg-darker: #050508;
}
```

### 3. Add Your Content

#### Images
Place your images in `assets/images/`:
- `profile.jpg` - Your profile photo
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `bg-hero.jpg` - Hero background (optional)

Update image paths in HTML:
```html
<img src="assets/images/profile.jpg" alt="Your Name">
```

#### Projects
Add project data in `projects.html`:
```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <img src="assets/images/project1.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="https://github.com/user/repo" class="project-link">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://demo.com" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Brief description of the project</p>
        <div class="tech-stack">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
    </div>
</div>
```

### 4. Configure Contact Form

The contact form requires a backend service. Options:

#### Option A: FormSubmit (Easiest - No Signup)
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
    <!-- form fields -->
</form>
```

#### Option B: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `contact.html`

#### Option C: EmailJS (Client-side)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update `js/main.js` with your credentials

### 5. Run Locally

#### Simple HTTP Server (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Using Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🚀 Deploy to GitHub Pages

### Method 1: GitHub Web Interface
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Visit `https://KaikenK.github.io` (wait 2-3 minutes)

### Method 2: Command Line
```bash
# Make sure all files are committed
git add .
git commit -m "Initial portfolio commit"
git push origin main

# Enable GitHub Pages via gh CLI (optional)
gh repo edit --enable-pages
```

### Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. Add `CNAME` file to root with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS records:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   CNAME: www → yourusername.github.io
   ```

## 🎨 Customization Guide

### Change Animation Speed
Edit `css/animations.css`:
```css
:root {
    --animation-duration: 0.8s; /* Adjust timing */
    --animation-delay: 0.2s;    /* Stagger delay */
}
```

### Disable Features

#### Disable Custom Cursor
Comment out in `index.html`:
```html
<!-- <script src="js/cursor.js"></script> -->
```

#### Disable Preloader
Remove from all HTML files:
```html
<!-- <div id="preloader">...</div> -->
<!-- <script src="js/preloader.js"></script> -->
```

#### Disable Parallax
Comment out in HTML:
```html
<!-- <script src="js/parallax.js"></script> -->
```

### Add New Pages
1. Copy `about.html` as template
2. Update navigation links in all files
3. Add new styles if needed
4. Update sitemap (optional)

## 🎯 SEO Optimization

### Update Meta Tags
In each HTML file `<head>`:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="web developer, portfolio, your skills">
<meta name="author" content="Your Name">

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/preview.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Portfolio">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/preview.jpg">
```

### Add Google Analytics (Optional)
Before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Site not loading on GitHub Pages
- Check if `index.html` is in root directory
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for error messages
- Ensure repository is public

### Animations not working
- Check browser console for JavaScript errors
- Ensure all JS files are linked correctly
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Theme toggle not working
- Check `js/theme-toggle.js` is loaded
- Verify localStorage is enabled in browser
- Check browser console for errors

### Images not loading
- Verify image paths are correct (case-sensitive)
- Check if images exist in `assets/images/`
- Use relative paths: `assets/images/photo.jpg`
- Compress large images (use TinyPNG)

## 📦 Dependencies

This project uses minimal external dependencies:

- **Font Awesome 6.4.0** - Icons (CDN)
- **Google Fonts** - Orbitron, Rajdhani (Futuristic fonts)

All other functionality is vanilla JavaScript - no frameworks required!

## 🔧 Browser Support

- Chrome/Edge (latest 2 versions) ✅
- Firefox (latest 2 versions) ✅
- Safari (latest 2 versions) ✅
- Mobile browsers ✅

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

- **Design & Development:** Dhruv (KaikenK)
- **Icons:** Font Awesome
- **Fonts:** Google Fonts

## 📞 Contact

- **GitHub:** [@KaikenK](https://github.com/KaikenK)
- **Email:** your.email@example.com
- **Portfolio:** https://KaikenK.github.io

---

**Built with 💚 using HTML, CSS, and JavaScript**

*Last Updated: October 30, 2025*
```