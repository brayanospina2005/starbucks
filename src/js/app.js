
function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background= color;
}

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
  }