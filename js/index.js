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

// slider with Splide for carrousel
new Splide('#main-carousel', {
  type: 'fade',
  rewind: true,
  padding: '3rem',
  width: '80vw',
  breakpoints: {
    800: {
      width: '100vw',
      padding: '0',
    },
  },
}).mount();

// video slide for clips
new Splide('#video-slides', {
  type: 'fade',
  rewind: true,
  padding: '3rem',
  width: '80vw',
  breakpoints: {
    800: {
      padding: '0',
      width: '100vw',
    },
  },
  video: {
    loop: true,
  },
}).mount(window.splide.Extensions);
