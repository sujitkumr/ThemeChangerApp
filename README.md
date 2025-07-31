# 🎨 ThemeApp - Dynamic Theme Switching React Application

<div align="center">

![ThemeApp Logo](https://img.shields.io/badge/ThemeApp-Dynamic%20Themes-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**Experience the power of dynamic theme switching with our innovative React application!**

[🚀 Live Demo](#) • [📖 Documentation](#features) • [🛠️ Installation](#installation)

</div>

---

## ✨ Overview

ThemeApp is a modern, responsive React application that demonstrates advanced theme switching capabilities with three distinct visual themes. Built with cutting-edge technologies, it showcases professional UI/UX design principles, smooth animations, and seamless user experience.

### 🎯 Key Highlights

- **🎨 Dynamic Theme Switching**: Seamlessly switch between Light, Dark Sidebar, and Colorful Cards themes
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast loading with image preloading and lazy loading
- **🎭 Beautiful Animations**: Smooth transitions and hover effects
- **🛠️ Modern Tech Stack**: React 18, Vite, Tailwind CSS, Lucide React
- **📊 Real API Integration**: Fetches products from FakeStore API
- **🎨 Custom CSS**: Advanced styling with gradients, shadows, and modern design

---

## 🚀 Features

### 🎨 Theme System
- **Light Theme**: Clean, professional design with blue accents
- **Dark Sidebar Theme**: Elegant dark interface with sidebar navigation
- **Colorful Cards Theme**: Vibrant orange/yellow design with cursive fonts

### 📱 Navigation & Routing
- **React Router DOM**: Client-side routing with active link states
- **Sidebar Navigation**: Collapsible sidebar for dark theme
- **Mobile Responsive**: Touch-friendly navigation on all devices

### 🛍️ Product Management
- **Product Cards**: Beautiful product display with images, ratings, and prices
- **Add to Cart**: Interactive buttons with theme-specific styling
- **Image Optimization**: Preloading and fallback images for better UX
- **Category Badges**: Visual category indicators

### 🎭 UI/UX Features
- **Smooth Animations**: CSS transitions and hover effects
- **Loading States**: Skeleton loaders and loading spinners
- **Form Validation**: Newsletter signup with email validation
- **Social Media Integration**: Footer with social links
- **Contact Information**: Professional contact details

### 📊 Pages
- **Home Page**: Hero section, features, and product grid
- **About Page**: Company information and statistics
- **Contact Page**: Contact form and information
- **Footer**: Newsletter signup, links, and social media

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | Frontend framework |
| **Vite** | 5.0.0 | Build tool and dev server |
| **React Router DOM** | 6.8.0 | Client-side routing |
| **Lucide React** | 0.263.1 | Icon library |
| **Tailwind CSS** | 3.3.0 | Utility-first CSS framework |
| **FakeStore API** | - | Product data source |

### 🎨 Design Technologies
- **CSS3**: Advanced styling with gradients, shadows, and animations
- **Google Fonts**: Dancing Script, Playfair Display for typography
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Dynamic theming system

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/themeapp.git
   cd themeapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Theme System Architecture

### Theme Structure
```javascript
const themes = [
  { id: 'light', name: 'Light Theme' },
  { id: 'dark-sidebar', name: 'Dark Sidebar Theme' },
  { id: 'colorful-cards', name: 'Colorful Cards Theme' }
];
```

### CSS Architecture
- **Base Styles**: Common components and utilities
- **Theme Overrides**: Theme-specific color schemes and layouts
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animation System**: Smooth transitions and hover effects

### Component Structure
```
src/
├── components/
│   ├── features/
│   │   └── ProductCard.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── common/
│   │   └── Loading.jsx
│   └── ui/
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── hooks/
│   └── useProducts.jsx
└── App.jsx
```

---

## 🎯 Key Features Explained

### 1. Dynamic Theme Switching
- **Real-time Updates**: Instant theme changes without page reload
- **Persistent State**: Theme selection maintained across sessions
- **Smooth Transitions**: CSS transitions for seamless theme switching

### 2. Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint System**: Responsive layouts for all screen sizes
- **Touch-Friendly**: Optimized for touch interactions

### 3. Performance Optimization
- **Image Preloading**: Faster image loading with preload strategy
- **Lazy Loading**: Efficient resource loading
- **Code Splitting**: Optimized bundle sizes

### 4. User Experience
- **Intuitive Navigation**: Clear navigation with active states
- **Loading Feedback**: Skeleton loaders and spinners
- **Error Handling**: Graceful error states and fallbacks

---

## 📱 Responsive Design

| Device | Layout | Features |
|--------|--------|----------|
| **Desktop** | Full-width layout | Sidebar navigation, hover effects |
| **Tablet** | Adaptive grid | Touch-optimized interactions |
| **Mobile** | Single column | Collapsible sidebar, mobile menu |

---

## 🎨 Theme Showcase

### Light Theme
- Clean, professional design
- Blue gradient accents
- High contrast for readability
- Modern card-based layout

### Dark Sidebar Theme
- Elegant dark interface
- Collapsible sidebar navigation
- Purple gradient accents
- Sophisticated typography

### Colorful Cards Theme
- Vibrant orange/yellow design
- Cursive fonts (Dancing Script, Playfair Display)
- Card-based layout with shadows
- Warm, inviting color palette

---

## 🚀 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with code splitting

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```
themeProviderReact/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom React hooks
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
├── styles/          # Theme-specific styles
└── package.json     # Dependencies and scripts
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b main`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin main`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test across different themes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sujit Kumar**
- Email: sujitkymar101@gmail.com
- Location: India


### Connect with me
- [LinkedIn](https://www.linkedin.com/in/3233sujit-kumar-67b13321b)
- [GitHub](https://github.com/sujitkumr)
- [Portfolio](#)

---

## 🙏 Acknowledgments

- **FakeStore API** for providing product data
- **Lucide React** for beautiful icons
- **Google Fonts** for typography
- **React Community** for excellent documentation

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Sujit Kumar](mailto:sujitkymar101@gmail.com)

[⬆ Back to top](#-themeapp---dynamic-theme-switching-react-application)

</div>
