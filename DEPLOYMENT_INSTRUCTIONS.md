# 🚀 EcoPlate Landing Page - Deployment Instructions

## Important: Update Your Links First! ⚠️

Before deploying, update these placeholder links in `app/page.tsx`:
1. Replace `YOUR_VIDEO_ID` with your actual YouTube video ID (appears 5 times)
2. Update GitHub repo links if needed

## Option 1: Deploy to Vercel (Easiest - Recommended) ✨

1. **Create GitHub Repository:**
   ```bash
   cd ecoplate-landing
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ecoplate-landing.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `ecoplate-landing` repository
   - Click "Deploy" - that's it!
   - Your site will be live at `https://your-project.vercel.app`

## Option 2: Deploy to GitHub Pages 📄

1. **Update Configuration:**
   Edit `next.config.js` and change the `basePath`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/ecoplate-landing' : '',
   ```
   Replace `/ecoplate-landing` with your repository name.

2. **Create Repository:**
   ```bash
   cd ecoplate-landing
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ecoplate-landing.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (will be created automatically)
   - Click Save

4. **Deploy:**
   The GitHub Actions workflow will automatically deploy when you push to main.
   
   Or manually deploy:
   ```bash
   npm run build
   git add .
   git commit -m "Deploy"
   git push
   ```

   Your site will be at: `https://YOUR_USERNAME.github.io/ecoplate-landing`

## Option 3: Deploy to Netlify 🚢

1. **Build & Deploy:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `out` folder to the deployment area
   - Your site is instantly live!

## Local Development 💻

To run locally:
```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

## Customization Tips 🎨

### Change Colors
Edit `app/globals.css` to modify the eco theme colors.

### Update Content
- Stats: Line ~37 in `app/page.tsx`
- Features: Line ~47 in `app/page.tsx`
- Screenshots: Line ~76 in `app/page.tsx`

### Add Real Screenshots
Replace the placeholder mockups with actual app screenshots:
1. Add images to `public/` folder
2. Import and use them in the component

## Need Help? 🤝

- The landing page is responsive and works on all devices
- All animations are smooth and performant
- SEO is optimized with proper meta tags
- The design matches your EcoPlate app's green theme

---

**Remember:** Update the YouTube video ID and verify all links before deploying! 🎯
