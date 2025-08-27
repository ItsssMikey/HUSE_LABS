const html = document.documentElement;
const body = document.body;
const btn = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
const firstNavLink = nav ? nav.querySelector('a') : null;

// Mobile nav toggle + scroll lock + a11y focus
if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = html.classList.toggle('nav-open');
    html.classList.toggle('nav-locked', isOpen);
    body.classList.toggle('nav-locked', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) firstNavLink?.focus();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && html.classList.contains('nav-open')) {
      html.classList.remove('nav-open', 'nav-locked');
      body.classList.remove('nav-locked');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  // Close after tapping a link (mobile)
  nav.addEventListener('click', (e) => {
    const t = e.target;
    if (t instanceof HTMLElement && t.tagName === 'A' && html.classList.contains('nav-open')) {
      html.classList.remove('nav-open', 'nav-locked');
      body.classList.remove('nav-locked');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
