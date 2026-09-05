// the bars under each skill sit full width by default, but "reload"
// (drop to 0% and re-fill) whenever you hover the row. purely decorative,
// but it was fun to get working - the trick is forcing a reflow with
// offsetWidth in between resetting the width and setting it back, otherwise
// the browser just batches both style changes and skips the animation

export function initSkillBars() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  document.querySelectorAll('.skill-row').forEach((row) => {
    const fill = row.querySelector('.skill-fill');
    if (!fill) return;

    row.addEventListener('mouseenter', () => {
      fill.style.transition = 'none';
      fill.style.width = '0%';
      fill.offsetWidth; // eslint-disable-line no-unused-expressions -- forces the reflow, don't remove
      fill.style.transition = '';
      fill.style.width = 'var(--pct)';
    });
  });
}
