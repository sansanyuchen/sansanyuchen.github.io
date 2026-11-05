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

const navigationLinks = [...document.querySelectorAll('.navigation a')];
const navigationSections = navigationLinks.map(link => document.querySelector(link.hash));
let scrollPending = false;

function updateNavigation() {
  const anchorLine = document.querySelector('.site-header').offsetHeight + 48;
  let current = 0;
  navigationSections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= anchorLine) current = index;
  });
  navigationLinks.forEach((link, index) => {
    if (index === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}

window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    window.requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('load', updateNavigation);
