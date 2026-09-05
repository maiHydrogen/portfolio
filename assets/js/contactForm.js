// no backend for this site - it's just static files sitting on Vercel -
// so "Send Message" opens whatever email app the visitor has, pre-filled.
// works fine for now. if I ever get around to it, swapping this for
// something like Formspree or Web3Forms would let it submit in-page instead

const MY_EMAIL = 'taespadhihary@gmail.com';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  });
}
