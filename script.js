// Toggle dark/light theme and remember preference
const toggleBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

toggleBtn.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Animate sections on scroll
const sections = document.querySelectorAll('section.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// Dynamic project loading
const projects = [
  {
    title: 'ACL Validator',
    description: 'Automated script to audit and report Linux ACL discrepancies.',
    url: 'https://github.com/ahmedfarman102/acl-validator'
  },
  {
    title: 'Offline YUM Repo Recovery',
    description: 'Bash toolkit to rebuild and serve offline RPM repos with logging.',
    url: 'https://github.com/ahmedfarman102/yum-recovery'
  },
  {
    title: 'Rapido Earnings Calculator',
    description: 'Node.js CLI that parses ride data and projects monthly earnings.',
    url: 'https://github.com/ahmedfarman102/rapido-calculator'
  }
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-content">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.url}" target="_blank">View on GitHub →</a>
    </div>
  `;
  grid.appendChild(card);
});
