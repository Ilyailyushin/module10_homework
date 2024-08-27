const btn = document.querySelector('.j-btn-test');
svg1 = document.querySelector('.bi-arrow-clockwise');
svg2 = document.querySelector('.srtaight-arrow');

btn.addEventListener('click', () => {
  svg1.classList.toggle('icon-display');
  svg1.classList.toggle('icon-hidden');
  svg2.classList.toggle('icon-hidden');
  svg2.classList.toggle('icon-display');
 
});