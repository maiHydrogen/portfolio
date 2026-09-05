// handles the "choose a lens" buttons under the hero.
// each button has data-track="pm|civil|sde", and every element that's
// supposed to change between tracks has data-track-content="pm|civil|sde"
// on it somewhere (about text, experience cards, skill rows, project cards...)

const TRACK_ROLES = {
  pm: 'Product Manager · Data & AI',
  civil: 'Civil Engineering Student',
  sde: 'Full-Stack Developer',
};

export function initTrackSwitch() {
  const heroRole = document.getElementById('heroRole');
  const trackBtns = document.querySelectorAll('.track-btn');
  const trackContentEls = document.querySelectorAll('[data-track-content]');

  function applyTrack(track) {
    document.body.dataset.track = track;

    trackContentEls.forEach((el) => {
      el.classList.toggle('track-hidden', el.dataset.trackContent !== track);
    });

    trackBtns.forEach((btn) => {
      const active = btn.dataset.track === track;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    if (heroRole && TRACK_ROLES[track]) {
      heroRole.textContent = TRACK_ROLES[track];
    }

    try {
      localStorage.setItem('himanshu-track', track);
    } catch (e) {
      // private/incognito tabs throw on localStorage, doesn't matter here
    }
  }

  trackBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyTrack(btn.dataset.track));
  });

  // remember whatever tab they had open last time they visited
  let savedTrack = 'pm';
  try {
    const stored = localStorage.getItem('himanshu-track');
    if (stored === 'pm' || stored === 'civil' || stored === 'sde') {
      savedTrack = stored;
    }
  } catch (e) {
    // just fall back to pm
  }

  applyTrack(savedTrack);
}
