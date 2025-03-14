# Muhammad Haikal Rahman Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Fast and optimized performance
- 🎨 Modern UI with smooth animations
- 📊 Interactive project showcases
- 📝 Dynamic content from data files
- 🔍 SEO optimized

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- Framer Motion
- React Icons
- React Type Animation
- React Scroll

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
portfolio-website/
├── public/               # Static files
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── data/             # Data files
│   ├── pages/            # Page components
│   ├── context/          # Context providers
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # Global styles
│   ├── App.js            # Main App component
│   └── index.js          # Entry point
├── package.json          # Dependencies and scripts
└── tailwind.config.js    # Tailwind CSS configuration
```

## Customization

To customize the content of the website, edit the data files located in `src/data/`:

- `resumeData.js` - Personal information, education, experience, skills, certifications
- `projectsData.js` - Project details and screenshots

To customize the styling, edit the Tailwind configuration in `tailwind.config.js` and global styles in `src/styles/globals.css`.

## Deployment

The website can be easily deployed to platforms like Netlify, Vercel, or GitHub Pages.

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Log in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Set build command to `npm run build`
6. Set publish directory to `build`
7. Click "Deploy site"

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
