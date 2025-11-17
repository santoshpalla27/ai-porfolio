# 🚀 DevOps Portfolio

A modern, production-ready DevOps portfolio built with Next.js 14, TypeScript, React Three Fiber, and Framer Motion.

## ✨ Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom theme
- 🎭 **Framer Motion** animations
- 🎮 **React Three Fiber** 3D graphics
- 🌙 **Dark/Light** mode
- 📱 **Fully Responsive**
- ♿ **Accessible**
- 🚀 **Optimized Performance**

## 🛠️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber
- Three.js
- Lucide Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/devops-portfolio.git

# Navigate to project directory
cd devops-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

1. **Personal Information**: Update `src/lib/constants.ts` with your personal information
2. **Projects**: Add your projects in the `PROJECTS` array in `src/lib/constants.ts`
3. **Skills**: Modify the `SKILLS` array in `src/lib/constants.ts`
4. **Experience**: Update the `EXPERIENCE` array in `src/lib/constants.ts`
5. **Colors**: Customize theme in `tailwind.config.ts`
6. **Images**: Add your profile and project images to `public/images/`

## 📂 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── 3d/          # Three.js 3D components
│   ├── animations/  # Framer Motion variants
│   ├── layout/      # Layout components
│   ├── sections/    # Page sections
│   └── ui/          # UI components
├── lib/             # Utilities and constants
├── types/           # TypeScript types
└── styles/          # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Other Platforms
The application is compatible with any platform that supports Next.js 14 (Vercel, Netlify, AWS, Azure, etc.)

## 📝 License

MIT License - feel free to use for your own portfolio!

## 🤝 Contributing

Contributions welcome! Please open an issue first to discuss what you would like to change.

---

Built with ❤️ using Next.js, React Three Fiber & Framer Motion