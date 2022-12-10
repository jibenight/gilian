// js for menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// solve anchor issue height
const navigationHeight = document.querySelector('.navbar').offsetHeight;
document.documentElement.style.setProperty(
  '--scroll-padding',
  navigationHeight - 1 + 'px'
);

// slider 1
const items = document.querySelectorAll('.slider-item.slider-1');
const nbSlide = items.length;
const nextSlide = document.querySelector('.button-next.slider-1');
const prevSlide = document.querySelector('.button-prev.slider-1');
let count = 0;

const nextSlider = () => {
  items[count].classList.remove('active');
  count < nbSlide - 1 ? count++ : (count = 0);
  items[count].classList.add('active');
};

const prevSlider = () => {
  items[count].classList.remove('active');
  count > 0 ? count-- : (count = nbSlide - 1);
  items[count].classList.add('active');
};

nextSlide.addEventListener('click', nextSlider);
prevSlide.addEventListener('click', prevSlider);

// slider 2
const items2 = document.querySelectorAll('.slider-item.slider-2');
const nbSlide2 = items2.length;
const nextSlide2 = document.querySelector('.button-next.slider-2');
const prevSlide2 = document.querySelector('.button-prev.slider-2');
let count2 = 0;

const nextSlider2 = () => {
  items2[count2].classList.remove('active');
  count2 < nbSlide2 - 1 ? count2++ : (count2 = 0);
  items2[count2].classList.add('active');
};

const prevSlider2 = () => {
  items2[count2].classList.remove('active');
  count2 > 0 ? count2-- : (count2 = nbSlide2 - 1);
  items2[count2].classList.add('active');
};

nextSlide2.addEventListener('click', nextSlider2);
prevSlide2.addEventListener('click', prevSlider2);

// slider with Splide
new Splide('.splide', {
  type: 'fade',
  rewind: true,
  padding: '10rem',
  width: '80vw',
}).mount();
