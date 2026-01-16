# Personal Portfolio Website

A simple, clean personal website to showcase your projects. Inspired by minimalist design principles.

## Features

- Clean, minimalist design
- Light/dark theme toggle
- Responsive layout
- Simple HTML/CSS with minimal JavaScript
- Easy to customize
- Ready for GitHub Pages hosting

## Customization

Before deploying, update the following:

### In `index.html`:
- Replace `[Your Name]` with your actual name
- Update the about section with your information
- Add your email and GitHub username

### In `projects.html`:
- Add your actual projects
- Update project names, descriptions, and links
- Adjust the technology stacks mentioned

### In both files:
- Update the page titles
- Update footer copyright information

## Hosting on GitHub Pages

1. Create a new repository on GitHub named `yourusername.github.io` (replace `yourusername` with your actual GitHub username)

2. Initialize git in this directory and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Your site will automatically be published at `https://yourusername.github.io`

### Alternative: Project Repository

If you want to host this as a project site instead:

1. Create a new repository with any name (e.g., `portfolio`)

2. Push your code to the repository

3. Go to Settings → Pages → Source and select `main` branch

4. Your site will be available at `https://yourusername.github.io/repository-name`

## File Structure

```
.
├── index.html        # About page (home)
├── projects.html     # Projects listing
├── style.css         # All styling
├── theme.js          # Theme switcher functionality
└── README.md         # This file
```

## Adding New Projects

To add a new project, copy this template in `projects.html`:

```html
<article class="project">
    <h2><a href="#project-name">Project Name</a></h2>
    <p class="project-meta">Year • Tech Stack</p>
    <p>
        Project description goes here.
    </p>
    <p class="project-links">
        <a href="https://github.com/yourusername/project">GitHub</a> •
        <a href="#">Live Demo</a>
    </p>
</article>
```

## License

Feel free to use this template for your own personal website!
