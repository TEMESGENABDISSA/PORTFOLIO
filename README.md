# Temesgen's 3D Portfolio

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=40&duration=3000&color=8A2BE2&center=true&vCenter=true&width=600&height=80&lines=✨+Temesgen's+3D+Portfolio+✨" alt="Temesgen's 3D Portfolio">
</p>

<p align="center">
  An immersive 3D portfolio showcasing my work, skills, and experience as a Full Stack Developer.
</p>

<div align="center">
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a>
</div>

## 🚀 Features

- **Interactive 3D Elements** - Built with Three.js and React Three Fiber
- **Modern UI/UX** - Smooth animations with Framer Motion
- **Responsive Design** - Works on all device sizes
- **Project Showcase** - Highlighting my best work
- **Contact Form** - Powered by EmailJS

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion

### 3D Graphics
- Three.js
- React Three Fiber
- Drei

### Other Libraries
- React Router DOM
- React Icons
- EmailJS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (v7 or later) or Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TEMESGENABDISSA/PORTFOLIO.git
   cd temesgen-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📂 Project Structure

```
src/
├── assets/           # Images and 3D models
├── components/       # React components
│   ├── canvas/       # 3D components
│   └── ...           # Other components
├── constants/        # Data and configurations
└── utils/            # Helper functions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - 3D library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
