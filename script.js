// Skill category filter
const filterBtns = document.querySelectorAll('.filter-btn');
const skillRows = document.querySelectorAll('.skill-row');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;
    skillRows.forEach((row) => {
      const show = filter === 'all' || row.dataset.cat === filter;
      row.style.display = show ? '' : 'none';
    });
  });
});

// Right-edge scroll progress indicator
const indicator = document.getElementById('scrollIndicator');
function updateScrollIndicator() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
  const trackHeight = window.innerHeight - 110;
  indicator.style.top = `${progress * trackHeight}px`;
}
window.addEventListener('scroll', updateScrollIndicator, { passive: true });
window.addEventListener('resize', updateScrollIndicator);
updateScrollIndicator();

// Contact form -> mailto fallback (no backend on a static host)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:taespadhihary@gmail.com?subject=${subject}&body=${body}`;
});
