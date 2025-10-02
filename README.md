# LoopFi - Turn Expenses into Income

A modern React application that helps users turn their monthly expenses into passive income through DeFi yield strategies.

## 🚀 Features

- **Interactive Calculator**: Real-time cash back calculations with animated charts
- **Modern UI**: Clean light blue and white theme with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Component Architecture**: Modular, maintainable React components

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing with HashRouter for GitHub Pages compatibility
- **Framer Motion**: Smooth animations and transitions
- **CSS3**: Custom styling with gradients and modern effects
- **Font Awesome**: Icons throughout the application

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Calculator.js    # Interactive cash back calculator
│   ├── Footer.js        # Site footer with links
│   └── Navbar.js        # Navigation with scroll effects
├── pages/               # Page components
│   ├── About.js         # About page
│   ├── Contact.js       # Contact form
│   ├── Home.js          # Homepage with hero section
│   ├── HowItWorks.js    # How it works page
│   └── Pricing.js       # Pricing plans
├── App.js               # Main app component with routing
├── index.js             # React app entry point
└── styles.css           # Global styles and component styles
```

## 🎯 Key Components

### Calculator Component
- Real-time calculations based on monthly expenses and time period
- Clean dropdown selector (6-60 months)
- Animated SVG chart showing exponential growth
- Smooth number input with currency formatting

### Navigation
- Fixed navbar with scroll effects
- Active page highlighting
- Smooth hover animations
- HashRouter for GitHub Pages compatibility

### Pages
- **Home**: Hero section with calculator and feature highlights
- **About**: Mission statement and company stats
- **How It Works**: Step-by-step process explanation
- **Pricing**: Interactive pricing cards with annual/monthly toggle
- **Contact**: Contact form with validation

## 🎨 Design Features

- **Light Blue Theme**: Professional blue and white color scheme
- **Smooth Animations**: Hover effects, page transitions, and micro-interactions
- **Modern Typography**: Inter and Proxima Nova fonts
- **Card-based Layout**: Clean, organized content sections
- **Gradient Backgrounds**: Subtle gradients throughout the design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/cdhimo/defi-yield-manager.git
   cd defi-yield-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 GitHub Pages Deployment

The app is configured for GitHub Pages deployment:

1. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

2. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Choose "/ (root)" folder

3. **Live URL**: https://cdhimo.github.io/defi-yield-manager

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🎭 Animations

- **Page Transitions**: Smooth fade-in effects
- **Hover Effects**: Cards lift and glow on hover
- **Chart Animation**: Path drawing animation in calculator
- **Button Interactions**: Scale and lift effects
- **Staggered Animations**: Elements appear in sequence

## 🔧 Customization

The application is built with modularity in mind:
- Components are reusable and self-contained
- Styles are organized by component
- Easy to add new pages or modify existing ones
- Calculator logic is separated and easily adjustable

## 📄 License

© 2024 LoopFi. All rights reserved.
