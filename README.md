# Zayaad Wajid Portfolio

A modern personal portfolio built with React, Vite, and Tailwind CSS to showcase AI, machine learning, full stack, and automation projects.

The site includes a responsive layout, dark/light/system theme switching, project highlights, services, a moving tools and tech section, and a professional delivery approach section.

## Features

- Responsive portfolio design for desktop and mobile
- Light, dark, and system theme modes
- Hero section with profile image and contact links
- Services section for AI, ML, NLP, full stack, and automation work
- Project showcase with stack tags
- Moving Tools and Tech carousel with hover pause
- Delivery Approach section for professional workflow context
- Contact area with email, GitHub, and LinkedIn links

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx        Main portfolio content and sections
  main.jsx       React entry point
  styles.css     Global styles and custom UI styling
  assets/        Local portfolio assets
public/
  images/        Optional public image assets
```

## Customization

Most portfolio content is managed in `src/App.jsx`:

- `profile` updates name, title, location, email, GitHub, and LinkedIn.
- `services` updates the service cards.
- `projects` updates project titles, descriptions, status labels, and stack tags.
- `tools` updates the Tools and Tech carousel.
- `deliveryApproach` updates the workflow section.

Main visual styling lives in `src/styles.css`.

## Deployment

This project can be deployed on Vercel, Netlify, or GitHub Pages.

For Vercel or Netlify, connect the GitHub repository and use:

```text
Build command: npm run build
Output directory: dist
```

## Author

**Zayaad Wajid**

- GitHub: [Zayaad-Wajid](https://github.com/Zayaad-Wajid)
- LinkedIn: [zayaadwajid10](https://www.linkedin.com/in/zayaadwajid10/)
- Email: [zayaadw@gmail.com](mailto:zayaadw@gmail.com)
