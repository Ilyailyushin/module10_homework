const btn = document.querySelector('.j-btn-test');
const widthScreen = window.innerWidth;
const heightScreen = window.innerHeight;
btn.addEventListener('click', () => {
    alert(`ширина экрана ${widthScreen}, высота экрана ${heightScreen}`);
});