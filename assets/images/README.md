# Profile Photo Instructions

## How to Add Your Profile Photo

1. **Prepare your photo**:
   - Take or choose a professional headshot
   - Recommended size: 1000x1000 pixels (square)
   - Format: JPG or PNG
   - File size: Keep under 500KB for fast loading

2. **Place the photo**:
   - Save your photo as `profile.jpg` or `profile.png`
   - Place it in this folder: `assets/images/`
   - The image path in HTML is already set to: `assets/images/profile.jpg`

3. **Photo styling**:
   - The photo will be displayed in grayscale by default
   - On hover, it will show in full color
   - Border effects will highlight on hover
   - Square shape with subtle borders

## Temporary Placeholder

Until you add your photo, you can use one of these options:

### Option 1: Use a placeholder service
Replace the image src in `index.html` with:
```html
<img src="https://via.placeholder.com/400x400/000000/888888?text=DM" alt="Dhruv Menon" />
```

### Option 2: Use a professional photo service
- Upload your photo to [Imgur](https://imgur.com/) or similar
- Get the direct link
- Update the src in `index.html`

### Option 3: Keep it minimal
If you prefer no photo for now, you can replace the entire `.zen-profile-photo` section with:
```html
<div class="zen-minimal-avatar">
    <span class="zen-initials">DM</span>
</div>
```

Then add this CSS to `zen.css`:
```css
.zen-minimal-avatar {
    width: 350px;
    height: 350px;
    border: 2px solid var(--zen-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-card);
}

.zen-initials {
    font-size: 6rem;
    font-family: var(--font-display);
    font-weight: 200;
    color: var(--zen-light);
    letter-spacing: 10px;
}
```

## Tips for Best Results

- **Background**: Use a simple, solid background (preferably dark for the zen theme)
- **Lighting**: Even, professional lighting
- **Expression**: Neutral or slight smile
- **Framing**: Head and shoulders, centered
- **Attire**: Professional or smart casual

Place your final photo here and refresh the page!
