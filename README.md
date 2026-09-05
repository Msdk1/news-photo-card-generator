## 📸 News Photo Card Generator

A professional, responsive web application for creating beautiful news photo cards with customizable branding, logos, and text. Perfect for news organizations, reporters, and content creators.

### ✨ Features

- **16:4 Aspect Ratio Card Design** - Professional widescreen format optimized for social media and presentations
- **Dual Logo Support** - Integrate two organizational logos (Islamic University Reporters Unity themed)
- **Color Theme** - Beautiful green, red, white, and black gradient design
- **Photo Upload** - Drag-and-drop or click-to-upload support for your event/news photos
- **Dynamic Text Fields** - Customizable headline, description, and date
- **Live Preview** - Real-time preview of your news card
- **Download as Image** - Export your card as a high-quality PNG file
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts**:
  - `Ctrl+S` - Download card
  - `Ctrl+R` - Reset form

---

## 🎨 Design Specifications

### Color Palette
- **Primary Green**: `#22c55e`
- **Primary Red**: `#ef4444`
- **Primary White**: `#ffffff`
- **Dark Black**: `#1f2937`
- **Border Black**: `#374151`

### Card Dimensions
- **Aspect Ratio**: 16:4 (Widescreen)
- **Recommended Resolution**: 1200x300px or higher for best quality
- **Layout**: Logo | Photo Area | Logo

### Logo Positions
- Left Logo: Green background with red border (Islamic University Reporters Unity - Estd. 2018)
- Center: Photo upload area
- Right Logo: Green background with red border (Islamic University Logo)

---

## 🚀 Getting Started

### Option 1: Use Online
Simply open `index.html` in your web browser. No installation needed!

### Option 2: Local Setup
```bash
# Clone the repository
git clone https://github.com/Msdk1/news-photo-card-generator.git

# Navigate to the project
cd news-photo-card-generator

# Open in your browser
# Double-click index.html or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 📝 How to Use

### Step 1: Upload Photo
- Click the center photo area or drag-and-drop an image
- Recommended size: 1200x300px (16:4 ratio)
- Supported formats: JPG, PNG, GIF, WebP

### Step 2: Add Headline
- Enter your news headline (up to 100 characters)
- Updates in real-time on the preview

### Step 3: Add Description
- Enter news description or details (up to 200 characters)
- Use line breaks for better readability

### Step 4: Set Date
- Select the date for your news
- Defaults to today's date

### Step 5: Choose Logo Configuration
- **Left Logo**: Only left Islamic University Reporters Unity logo
- **Right Logo**: Only right Islamic University logo
- **Both Logos**: Both logos on left and right sides

### Step 6: Download
- Click "📥 Download Card" button
- Card exports as high-quality PNG image
- File saved to your downloads folder

### Reset
- Click "🔄 Reset" to clear all fields and start over

---

## 📱 Responsive Breakpoints

| Screen Size | Adjustments |
|-------------|------------|
| Desktop (1200px+) | Full 16:4 aspect ratio display |
| Tablet (768px-1199px) | Responsive scaling, optimized layout |
| Mobile (480px-767px) | Stacked view, touch-friendly controls |
| Small Mobile (<480px) | Compact controls, single column |

---

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - No dependencies required
- **Canvas API** - Image rendering and download
- **SVG** - Scalable logo graphics

---

## 📦 File Structure

```
news-photo-card-generator/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and themes
├── script.js           # Functionality and interactivity
└── README.md           # Documentation (this file)
```

---

## 🎯 Use Cases

1. **News Organizations** - Create branded news coverage cards
2. **Event Coverage** - Document events with professional cards
3. **Social Media** - Generate shareable news graphics
4. **Press Releases** - Attach professional cards to announcements
5. **Education** - Campus news and announcements
6. **Reports & Documentation** - Professional visual documentation

---

## ⚙️ Advanced Features

### Drag and Drop
- Drag image files directly onto the photo area
- Automatic upload and preview

### Keyboard Navigation
- Tab through all input fields
- Enter to submit date
- Space/Enter to trigger buttons

### Logo Customization
The logos are embedded as SVG. To customize:

1. Open `script.js`
2. Find the `LOGOS` object
3. Edit the SVG data for `logo1` or `logo2`
4. Save and refresh

### Export Quality
- Default: 2x scale (600x150px for 300x75px display)
- Uses html2canvas for maximum compatibility
- Falls back to Canvas API if needed

---

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | 60+ |
| Firefox | ✅ Full | 55+ |
| Safari | ✅ Full | 12+ |
| Edge | ✅ Full | 79+ |
| Opera | ✅ Full | 47+ |
| Internet Explorer | ❌ Not Supported | - |

---

## 🔒 Privacy & Security

- **No Server Upload** - All processing happens locally in your browser
- **No Data Collection** - Your images and information stay on your device
- **Offline Support** - Works completely offline
- **No Cookies** - No tracking or cookies used

---

## 🐛 Troubleshooting

### Photo not showing?
- Check file format (JPG, PNG, GIF, WebP)
- Ensure file size isn't too large (recommended: < 10MB)
- Try dragging instead of clicking

### Download not working?
- Check browser console for errors (F12 → Console)
- Ensure pop-ups aren't blocked
- Try a different browser
- Check available disk space

### Logos not displaying?
- Clear browser cache (Ctrl+Shift+Delete)
- Reload the page
- Try a different browser

### Aspect ratio looks wrong?
- This is normal on mobile - resize your browser window
- On desktop, should display 16:4 perfectly
- Downloaded image will always be correct ratio

---

## 🎓 Customization Guide

### Change Logo Colors
In `styles.css`, modify `.logo-section`:
```css
.logo-section {
    background: var(--primary-green); /* Change color here */
}
```

### Change Theme Colors
In `styles.css`, modify `:root`:
```css
:root {
    --primary-green: #22c55e;  /* Modify */
    --primary-red: #ef4444;    /* Modify */
    --primary-white: #ffffff;  /* Modify */
    /* ... etc */
}
```

### Adjust Card Size
In `styles.css`, modify `.news-card`:
```css
.news-card {
    aspect-ratio: 16 / 4; /* Change aspect ratio */
    padding: 15px;        /* Adjust padding */
}
```

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📧 Support

For issues, questions, or suggestions:
1. Check the **Troubleshooting** section above
2. Review the code comments in files
3. Create an issue on GitHub
4. Contact the repository owner

---

## 🎉 Credits

- **Designed for**: Islamic University Reporters Unity
- **Built with**: HTML5, CSS3, Vanilla JavaScript
- **Theme**: Green, Red, White, and Black
- **Inspiration**: Professional news media and event coverage

---

## 📈 Version History

### v1.0.0 (Initial Release)
- ✅ Core photo card generator
- ✅ Dual logo support
- ✅ Theme customization
- ✅ Download functionality
- ✅ Responsive design
- ✅ Keyboard shortcuts

---

## 🚀 Future Enhancements

- [ ] Multiple template designs
- [ ] Font customization
- [ ] Text shadow/stroke options
- [ ] Filter effects for photos
- [ ] Share directly to social media
- [ ] Batch processing
- [ ] Animation presets
- [ ] Cloud storage integration

---

## 📞 Quick Links

- **Repository**: [GitHub Link](https://github.com/Msdk1/news-photo-card-generator)
- **Live Demo**: Open `index.html` in browser
- **Issues**: Report on GitHub Issues
- **Discussions**: Use GitHub Discussions

---

**Made with ❤️ for News Creators and Journalists**

---

## 💡 Tips & Tricks

1. **Best Results**: Use high-quality photos (1200x300px or larger)
2. **Logo Space**: Reserve 15% space on left and right for logos
3. **Text Length**: Shorter headlines work better (30-60 characters)
4. **Mobile First**: Test on mobile devices before sharing
5. **Consistency**: Use same logos for brand recognition
6. **Social Media**: Resize for Instagram (1080x270px), Twitter (1024x512px)

---

**Happy Creating! 🎊**
