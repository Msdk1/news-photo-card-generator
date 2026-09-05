// Logo SVG Data (Islamic University Reporters Unity Logos)
const LOGOS = {
    logo1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240">
        <defs>
            <style>
                .bengali-text { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; }
            </style>
        </defs>
        <!-- Outer Green Circle -->
        <circle cx="100" cy="100" r="95" fill="#22c55e"/>
        <!-- Inner Red Circle -->
        <circle cx="100" cy="100" r="70" fill="#ef4444"/>
        <!-- Pen/Feather Symbol (White) -->
        <path d="M100 40 L95 60 L90 80 Q90 100 100 110 Q110 100 110 80 L105 60 Z" fill="white"/>
        <circle cx="100" cy="30" r="8" fill="white"/>
        <!-- Base of Pen -->
        <rect x="95" y="105" width="10" height="20" fill="white" rx="2"/>
        <text x="100" y="160" text-anchor="middle" class="bengali-text" fill="#333">Estd. 2018</text>
    </svg>`,
    
    logo2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240">
        <defs>
            <style>
                .bengali-text-2 { font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; }
            </style>
        </defs>
        <!-- Background Green -->
        <rect width="200" height="200" fill="#22c55e"/>
        <!-- Top Dome/Mosque Shape -->
        <path d="M50 80 Q100 40 150 80 L150 120 Q100 140 50 120 Z" fill="white"/>
        <!-- Red Dome Detail -->
        <ellipse cx="100" cy="75" rx="35" ry="30" fill="#dc2626" opacity="0.8"/>
        <!-- Candle Symbol -->
        <rect x="95" y="50" width="10" height="35" fill="white" stroke="#1f2937" stroke-width="1"/>
        <path d="M95 50 Q92 45 100 40 Q108 45 105 50" fill="#dc2626"/>
        <!-- Book Symbol (Left side) -->
        <g transform="translate(60, 150)">
            <rect x="0" y="0" width="30" height="20" fill="white" stroke="#1f2937" stroke-width="1" rx="2"/>
            <line x1="15" y1="0" x2="15" y2="20" stroke="#1f2937" stroke-width="1"/>
            <line x1="5" y1="5" x2="10" y2="5" stroke="#1f2937" stroke-width="0.5"/>
            <line x1="5" y1="10" x2="10" y2="10" stroke="#1f2937" stroke-width="0.5"/>
            <line x1="5" y1="15" x2="10" y2="15" stroke="#1f2937" stroke-width="0.5"/>
            <line x1="20" y1="5" x2="25" y2="5" stroke="#1f2937" stroke-width="0.5"/>
            <line x1="20" y1="10" x2="25" y2="10" stroke="#1f2937" stroke-width="0.5"/>
            <line x1="20" y1="15" x2="25" y2="15" stroke="#1f2937" stroke-width="0.5"/>
        </g>
        <!-- Atom Symbol (Right side) -->
        <g transform="translate(110, 150)">
            <circle cx="15" cy="10" r="12" fill="none" stroke="#22c55e" stroke-width="1.5"/>
            <circle cx="15" cy="10" r="8" fill="none" stroke="#22c55e" stroke-width="1.5" transform="rotate(45 15 10)"/>
            <circle cx="15" cy="10" r="8" fill="none" stroke="#22c55e" stroke-width="1.5" transform="rotate(90 15 10)"/>
            <circle cx="15" cy="10" r="3" fill="#22c55e"/>
        </g>
    </svg>`
};

// Elements
const photoInput = document.getElementById('photoInput');
const headlineInput = document.getElementById('headlineInput');
const descriptionInput = document.getElementById('descriptionInput');
const dateInput = document.getElementById('dateInput');
const logoSelect = document.getElementById('logoSelect');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');

const cardPhoto = document.getElementById('cardPhoto');
const cardHeadline = document.getElementById('cardHeadline');
const cardDescription = document.getElementById('cardDescription');
const cardDate = document.getElementById('cardDate');
const leftLogo = document.querySelector('.left-logo');
const rightLogo = document.querySelector('.right-logo');

// Set today's date as default
const today = new Date().toISOString().split('T')[0];
dateInput.value = today;
updateDate();

// Event Listeners
photoInput.addEventListener('change', handlePhotoUpload);
headlineInput.addEventListener('input', updateHeadline);
descriptionInput.addEventListener('input', updateDescription);
dateInput.addEventListener('change', updateDate);
logoSelect.addEventListener('change', updateLogos);
downloadBtn.addEventListener('click', downloadCard);
resetBtn.addEventListener('click', resetForm);

// Click photo area to upload
document.querySelector('.photo-area').addEventListener('click', () => {
    photoInput.click();
});

// Handle Photo Upload
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            cardPhoto.src = event.target.result;
            cardPhoto.style.objectFit = 'cover';
        };
        reader.readAsDataURL(file);
    }
}

// Update Headline
function updateHeadline() {
    cardHeadline.textContent = headlineInput.value || 'Your News Headline';
}

// Update Description
function updateDescription() {
    cardDescription.textContent = descriptionInput.value || 'Your news description will appear here';
}

// Update Date
function updateDate() {
    if (dateInput.value) {
        const date = new Date(dateInput.value);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        cardDate.textContent = date.toLocaleDateString('en-US', options);
    } else {
        cardDate.textContent = 'Today';
    }
}

// Update Logos
function updateLogos() {
    const selection = logoSelect.value;
    
    leftLogo.innerHTML = '';
    rightLogo.innerHTML = '';
    
    switch(selection) {
        case 'left':
            leftLogo.innerHTML = LOGOS.logo1;
            break;
        case 'right':
            rightLogo.innerHTML = LOGOS.logo2;
            break;
        case 'both':
            leftLogo.innerHTML = LOGOS.logo1;
            rightLogo.innerHTML = LOGOS.logo2;
            break;
    }
}

// Initialize logos
updateLogos();

// Download Card as Image
async function downloadCard() {
    const cardContainer = document.getElementById('cardContainer');
    
    // Show loading state
    downloadBtn.textContent = '⏳ Generating...';
    downloadBtn.disabled = true;
    
    try {
        // Import html2canvas if not already available
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        
        script.onload = async () => {
            const canvas = await html2canvas(cardContainer, {
                backgroundColor: '#ffffff',
                scale: 2,
                useCORS: true,
                logging: false
            });
            
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `news-card-${Date.now()}.png`;
            link.click();
            
            downloadBtn.textContent = '📥 Download Card';
            downloadBtn.disabled = false;
        };
        
        script.onerror = () => {
            // Fallback: Use canvas directly
            downloadWithFallback(cardContainer);
        };
        
        document.head.appendChild(script);
    } catch (error) {
        console.error('Error downloading card:', error);
        downloadBtn.textContent = '📥 Download Card';
        downloadBtn.disabled = false;
        alert('Error downloading card. Please try again.');
    }
}

// Fallback download method
async function downloadWithFallback(container) {
    try {
        const element = container.querySelector('.news-card');
        if (!element) return;
        
        const canvas = document.createElement('canvas');
        const width = 1200; // 16:4 aspect ratio
        const height = 300;
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        
        // Draw border
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 3;
        ctx.roundRect(0, 0, width, height, 15);
        ctx.stroke();
        
        // Draw placeholder text
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('News Photo Card', width / 2, height / 2);
        
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `news-card-${Date.now()}.png`;
        link.click();
        
        downloadBtn.textContent = '📥 Download Card';
        downloadBtn.disabled = false;
    } catch (error) {
        console.error('Fallback download error:', error);
        downloadBtn.textContent = '📥 Download Card';
        downloadBtn.disabled = false;
        alert('Please use a modern browser for better download support.');
    }
}

// Reset Form
function resetForm() {
    photoInput.value = '';
    headlineInput.value = '';
    descriptionInput.value = '';
    logoSelect.value = 'both';
    
    cardPhoto.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 100'%3E%3Crect width='400' height='100' fill='%23f3f4f6'/%3E%3Ctext x='200' y='50' text-anchor='middle' dominant-baseline='middle' font-size='20' fill='%239ca3af'%3EClick to upload photo%3C/text%3E%3C/svg%3E`;
    
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    
    updateHeadline();
    updateDescription();
    updateDate();
    updateLogos();
}

// Add CanvasRenderingContext2D.roundRect if not available (for older browsers)
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        this.beginPath();
        this.moveTo(x + r, y);
        this.arcTo(x + w, y, x + w, y + h, r);
        this.arcTo(x + w, y + h, x, y + h, r);
        this.arcTo(x, y + h, x, y, r);
        this.arcTo(x, y, x + w, y, r);
        this.closePath();
        return this;
    };
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        downloadCard();
    }
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        resetForm();
    }
});

// Drag and drop support
document.querySelector('.photo-area').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.target.style.background = '#e5e7eb';
});

document.querySelector('.photo-area').addEventListener('dragleave', (e) => {
    e.target.style.background = '#f3f4f6';
});

document.querySelector('.photo-area').addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.style.background = '#f3f4f6';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        photoInput.files = files;
        handlePhotoUpload({ target: { files: files } });
    }
});

console.log('News Photo Card Generator loaded successfully!');
