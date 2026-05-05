# 📱 Contact QR Code Generator




## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qr-contact-generator.git
   cd qr-contact-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 5.x
- **Styling:** Tailwind CSS 3.x
- **Icons:** Lucide React
- **QR Generation:** QR Server API

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📖 How to Use

### For Users

1. **Enter Contact Information**
   - Add your WhatsApp number with country code (e.g., +94771234567)
   - Add your email address (e.g., contact@example.com)

2. **Generate QR Code**
   - Click "Generate QR Code" button
   - QR code appears instantly

3. **Test Links**
   - Click "Open WhatsApp" to test WhatsApp link
   - Choose email option:
     - Default Email App (opens your installed app)
     - Gmail (opens in browser)
     - Outlook (opens in browser)

4. **Download & Share**
   - Click "Download QR Code" to save as PNG
   - Print on business cards, flyers, or share digitally

### For Developers

```javascript
// The app generates a vCard format QR code
const vcard = `
BEGIN:VCARD
VERSION:3.0
EMAIL:contact@example.com
TEL;TYPE=CELL:+94771234567
URL:https://wa.me/94771234567
END:VCARD
`;

// QR code is generated via API
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(vcard)}`;
```

## 🎨 Customization

### Change Color Scheme

Edit `src/App.jsx` and modify Tailwind classes:

```jsx
// Current: Green to Blue gradient
className="bg-gradient-to-r from-green-600 to-blue-600"

// Change to: Purple to Pink gradient
className="bg-gradient-to-r from-purple-600 to-pink-600"
```

### Modify QR Code Size

```javascript
// In generateQR function
const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(vcard)}`;
// Change 400x400 to your desired size (e.g., 600x600)
```

### Add More Contact Fields

```javascript
// In generateQR function, add to vcard:
vcard += `FN:Your Name\n`;
vcard += `ORG:Your Company\n`;
vcard += `TITLE:Your Job Title\n`;
```

## 📱 vCard Format

The app generates QR codes using the vCard 3.0 standard:

```
BEGIN:VCARD
VERSION:3.0
EMAIL:user@example.com
TEL;TYPE=CELL:+1234567890
URL:https://wa.me/1234567890
END:VCARD
```

**Supported Fields:**
- ✅ Email address
- ✅ Phone number
- ✅ WhatsApp URL
- 🔄 Can be extended with name, company, address, etc.



## 📂 Project Structure

```
qr-contact-app/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

## 🚀 Deployment

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/qr-contact-generator/'
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```


### QR Code Not Generating

- ✅ Check internet connection (API requires connection)
- ✅ Verify WhatsApp number format (+countrycode + number)
- ✅ Check browser console for errors



### Port Already in Use

```bash
# Change port in vite.config.js
export default {
  server: {
    port: 3000
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [QR Server API](https://goqr.me/api/) for QR code generation
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for blazing fast development





