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

    project.innerHTML = `
      <div class="project-media">
        <img src="${item.thumbnail}" alt="${item.title}">
        ${item.duration ? `<span class="project-duration">${item.duration}</span>` : ''}
      </div>
      <div class="project-body">
        <h3>${item.title}</h3>
        <p class="project-copy">${item.description}</p>
        ${tagsMarkup ? `<div class="project-tags">${tagsMarkup}</div>` : ''}
        <a href="${item.link}" target="_blank" rel="noreferrer noopener" class="project-link">
          <span>view project</span>
          <i class="fa-solid fa-arrow-up-right"></i>
        </a>
      </div>
    `;
    projectsContainer.appendChild(project);
  });
}