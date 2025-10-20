document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggler ---
    const toggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';

    toggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleBtn.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });

    // --- Typing Animation ---
    new TypeIt("#typing-name", {
        strings: "Farman.",
        speed: 150,
        loop: true,
        breakLines: false,
    }).go();

    // --- Sticky Header on Scroll ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // --- Mobile Menu (Hamburger) ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Animate Sections on Scroll ---
    const sections = document.querySelectorAll('section.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(sec => observer.observe(sec));

    // --- Dynamic Project Loading from GitHub API ---
    const GITHUB_USERNAME = 'ahmedfarman102';
    // List of repo names you want to feature
    const REPO_NAMES = ['acl-validator', 'yum-recovery', 'rapido-calculator']; 
    const grid = document.getElementById('projectsGrid');

    async function fetchProjects() {
        try {
            // Create an array of fetch promises
            const requests = REPO_NAMES.map(repo => 
                fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`)
                    .then(res => res.json())
            );

            // Wait for all promises to resolve
            const projects = await Promise.all(requests);

            grid.innerHTML = ''; // Clear loader

            projects.forEach(p => {
                if (p.name) { // Check if the repo was found
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    card.innerHTML = `
                        <div class="project-content">
                          <div class="project-header">
                            <h3><i class="fas fa-book"></i> ${p.name}</h3>
                            <span class="language" style="background-color: ${getLanguageColor(p.language)}">${p.language || 'Text'}</span>
                          </div>
                          <p>${p.description || 'No description available.'}</p>
                          <a href="${p.html_url}" target="_blank">View on GitHub <i class="fas fa-arrow-right"></i></a>
                        </div>
                    `;
                    grid.appendChild(card);
                }
            });
        } catch (error) {
            console.error('Failed to fetch projects:', error);
            grid.innerHTML = '<p class="error-message">Could not load projects. Please try again later.</p>';
        }
    }

    // Helper function to get a color for the language tag
    function getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'Shell': '#89e051',
            'Python': '#3572A5',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Node.js': '#68a063'
        };
        return colors[language] || '#cccccc'; // Default color
    }
    
    fetchProjects();
});
