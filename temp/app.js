const menuButton = document.querySelector('.menu-toggle');
const moreLinks = document.querySelector('.more-links');

function closeMenu() {
  moreLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

menuButton.addEventListener('click', () => {
  const open = moreLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});

document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', event => {
  if (!event.target.closest('.navigation')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && moreLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

const navLinks = document.querySelectorAll('.navigation a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));

const figureDialog = document.querySelector('.figure-dialog');
const figureImage = figureDialog.querySelector('.figure-image');
const figureCaption = figureDialog.querySelector('.figure-caption');

document.querySelectorAll('[data-figure]').forEach(button => {
  button.addEventListener('click', () => {
    figureImage.src = button.dataset.figure;
    figureImage.alt = button.dataset.caption;
    figureCaption.textContent = button.dataset.caption;
    figureDialog.showModal();
  });
});

figureDialog.querySelector('.close-figure').addEventListener('click', () => figureDialog.close());
figureDialog.addEventListener('click', event => {
  if (event.target === figureDialog) figureDialog.close();
});
