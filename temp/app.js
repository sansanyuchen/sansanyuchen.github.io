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
