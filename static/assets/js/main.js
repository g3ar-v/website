import project_data from './project-data.js';

// Small helpers for the static site
(function () {
  // Update year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();



const projectsContainer = document.getElementById('project-item');

if (projectsContainer) {
  projectsContainer.innerHTML = ''; // clear placeholder

  Object.values(project_data).forEach(item => {
    const project = document.createElement('article');
    project.classList.add('project-item');

    const tagsMarkup = (item.tags ?? [])
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join('');

    const linkIcon = (label, url) => {
      const text = (label || '').toLowerCase();
      if (text.includes('github')) return 'fa-brands fa-github';
      if (text.includes('demo') || text.includes('live')) return 'fa-solid fa-play';
      if (text.includes('instagram')) return 'fa-brands fa-instagram';
      if (text.includes('twitter')) return 'fa-brands fa-x-twitter';
      if (text.includes('figma')) return 'fa-brands fa-figma';
      if (text.includes('docs')) return 'fa-regular fa-file-lines';
      if ((url || '').includes('linkedin.com')) return 'fa-brands fa-linkedin-in';
      return 'fa-solid fa-arrow-up-right';
    };

    const linksMarkup = (item.links ?? [])
      .map(link => `
        <a href="${link.url}" target="_blank" rel="noreferrer noopener" class="project-link">
          <i class="${linkIcon(link.label, link.url)}" aria-hidden="true"></i>
          <span>${link.label}</span>
        </a>
      `)
      .join('');

    const mediaMarkup = item.thumbnail
      ? `<img src="${item.thumbnail}" alt="${item.title}">`
      : `<div class="project-placeholder" aria-hidden="true">;)</div>`;

    project.innerHTML = `
      <div class="project-media">
        ${mediaMarkup}
        ${item.duration ? `<span class="project-duration">${item.duration}</span>` : ''}
      </div>
      <div class="project-body">
        <h3>${item.title}</h3>
        <p class="project-copy">${item.description}</p>
        ${tagsMarkup ? `<div class="project-tags">${tagsMarkup}</div>` : ''}
        ${linksMarkup ? `<div class="project-links">${linksMarkup}</div>` : ''}
      </div>
    `;
    projectsContainer.appendChild(project);
  });
}
