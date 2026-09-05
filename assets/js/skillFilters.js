// the filter buttons above the skill grid (All Skills / Programming / etc).
// each track has its own row of these, so a click only touches the rows +
// buttons that belong to that same track (scoped by data-track-content) -
// otherwise clicking "Data Science" in the PM tab would mess with the
// button states in the other two tabs too

export function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn:not(.track-btn)');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const track = btn.dataset.trackContent;
      const siblingBtns = document.querySelectorAll(`.filter-btn[data-track-content="${track}"]`);
      const rows = document.querySelectorAll(`.skill-row[data-track-content="${track}"]`);

      siblingBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      rows.forEach((row) => {
        row.style.display = (filter === 'all' || row.dataset.cat === filter) ? '' : 'none';
      });
    });
  });
}
