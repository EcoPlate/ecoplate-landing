# EcoPlate Landing Page

A modern, responsive landing page for the EcoPlate app built with Next.js, Tailwind CSS, and shadcn/ui.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
- ✅ Beautiful UI components with shadcn/ui
- ✅ Eco-friendly green theme matching the app
- ✅ GitHub and YouTube integration links
- ✅ SEO optimized
- ✅ Fast performance with Next.js

## 🎨 Customization

### Update Links
Edit the links in `app/page.tsx`:
- GitHub repository URL (line ~140)
- YouTube demo video URL (line ~144)

### Update Content
- Modify stats, features, and screenshots sections
- Update metadata in `app/layout.tsx`
- Customize colors in `tailwind.config.ts`

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update `next.config.js`:**
   - Change `basePath` to match your repository name

2. **Build and export:**
```bash
npm run build
npx next export
```

3. **Deploy to GitHub Pages:**
```bash
# Add a .nojekyll file
touch out/.nojekyll

# Push to gh-pages branch
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Type Safety:** TypeScript

## 📄 License

MIT - Feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Feel free to submit PRs or open issues.

---

Made with 💚 for the EcoPlate project
