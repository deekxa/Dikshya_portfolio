# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js 14, React, and Tailwind CSS.

## 🚀 Features

- ✅ Modern, responsive design
- ✅ Dark mode support (via Tailwind)
- ✅ Smooth scroll animations
- ✅ SEO optimized with metadata
- ✅ Project showcase with dynamic routes
- ✅ Contact form
- ✅ Skills and experience sections
- ✅ Fully customizable

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects listing & detail pages
│   │   ├── contact/           # Contact page
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   └── ...
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, MobileMenu
│   │   ├── sections/          # Hero, About, Skills, etc.
│   │   ├── ui/                # Reusable UI components
│   │   └── animations/        # Scroll animations
│   ├── data/                  # Static data (projects, skills, experience)
│   ├── lib/                   # Utility functions
│   ├── config/                # Site configuration
│   └── styles/                # Custom CSS animations
└── public/                    # Static assets

```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** JavaScript (JSX)
- **Deployment:** Ready for Vercel, Netlify, or any hosting platform

## 📝 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## ✏️ Customization Guide

### 1. Personal Information

Update the following files with your information:

- **`src/config/site.js`** - Site metadata, name, description, social links
- **`src/lib/constants.js`** - Site-wide constants
- **`src/data/projects.js`** - Your projects
- **`src/data/skills.js`** - Your skills
- **`src/data/experience.js`** - Your work experience

### 2. Images

Add your images to the `public/images/` directory:

- `public/images/profile.jpg` - Your profile photo
- `public/images/projects/` - Project screenshots
- Update image paths in the data files

### 3. Resume

- Add your resume PDF as `public/resume.pdf`
- Link to it from the contact page or navbar

### 4. Colors & Styling

- Edit `tailwind.config.js` to customize colors
- Modify `src/styles/animations.css` for custom animations
- Update `src/app/globals.css` for global styles

### 5. Navbar & Footer

- **Navbar:** Edit `src/components/layout/Navbar.jsx`
- **Footer:** Edit `src/components/layout/Footer.jsx`
- Update social links in both components

### 6. Contact Form

The contact form in `src/components/sections/Contact.jsx` is a placeholder. 

To make it functional, integrate with:
- **Formspree:** https://formspree.io/
- **EmailJS:** https://www.emailjs.com/
- **Netlify Forms:** (if deploying to Netlify)
- Your own backend API

## 🎨 Sections Overview

- **Hero** - Landing section with CTA buttons
- **About** - Personal introduction with profile image
- **Skills** - Technology stack grouped by category
- **Projects** - Featured projects with links
- **Experience** - Work history timeline
- **Contact** - Contact form and information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Support

If you need help customizing your portfolio:
1. Check the comments in each file
2. Review the data files in `src/data/`
3. Consult the [Next.js documentation](https://nextjs.org/docs)

## 📄 License

This project is open source and available for personal use.

---

**Good luck with your portfolio! 🎉**
