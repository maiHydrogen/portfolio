// thin red bar pinned to the right edge that slides down as you scroll.
// not a real progress bar for anything specific, just felt like a nice
// touch for a "timing tower" themed page

export function initScrollIndicator() {
  const indicator = document.getElementById('scrollIndicator');
  if (!indicator) return;

  function update() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    const trackHeight = window.innerHeight - 110;
    indicator.style.top = `${progress * trackHeight}px`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}
