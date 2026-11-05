// Techify - Interactive Client App

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  highlightActiveNav();
  initContactForm();
  updateFooterYear();
});

// Theme switcher (dark / light)
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('techify-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonLabel(toggleBtn, savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('techify-theme', nextTheme);
      updateThemeButtonLabel(toggleBtn, nextTheme);
    });
  }
}

function updateThemeButtonLabel(btn, theme) {
  if (!btn) return;
  btn.textContent = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Highlight current active navigation item
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Interactive contact form submission demo
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-alert');

  if (form && alertBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alertBox.textContent = `Thank you, ${name}! Your message has been received.`;
      alertBox.style.display = 'block';
      form.reset();

      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 5000);
    });
  }
}

// Set dynamic year in footer
function updateFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
