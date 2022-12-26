import Splide from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import '@splidejs/splide/dist/css/splide.min.css';
import 'animate.css';
import { dataClips } from '../../data';

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
  padding: '8rem',
  width: '75vw',
  breakpoints: {
    1000: {
      width: '100vw',
      padding: '0',
    },
  },
}).mount();

// video slide for clips
new Splide('#video-slides', {
  type: 'fade',
  rewind: true,
  padding: '8rem',
  width: '75vw',
  breakpoints: {
    1000: {
      padding: '0',
      width: '100vw',
    },
  },
  video: {
    loop: true,
  },
}).mount({ Video });

// add class for animate on title h2
const elementsToLoadIn = new Set([
  ...document.querySelectorAll('#event h2'),
  ...document.querySelectorAll('#clips h2'),
  ...document.querySelectorAll('#galerie h2'),
  ...document.querySelectorAll('#presentation h2'),
  ...document.querySelectorAll('#footer h2'),
]);

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

function observerFlipInX(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__flipInX');
    } else {
      entry.target.classList.remove('animate__flipInX');
    }
  });
}
const observer = new IntersectionObserver(observerFlipInX, observerOptions);
if (window.matchMedia('(max-width: 800px)').matches) {
  elementsToLoadIn.forEach(el => observer.observe(el));
}

// add animate fadin for slider
const elementsToLoadIn2 = new Set([...document.querySelectorAll('.fade')]);
function observerFadIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
    } else {
      entry.target.classList.remove('animate__fadeIn');
    }
  });
}
const observer2 = new IntersectionObserver(observerFadIn, observerOptions);

if (window.matchMedia('(max-width: 800px)').matches) {
  elementsToLoadIn2.forEach(el => observer2.observe(el));
}

// hide email
const email = document.getElementById('email-contact');
const part1 = 'contact';
const part2 = Math.pow(2, 6);
const part3 = String.fromCharCode(part2);
const part4 = 'gilian-officiel.com';
const part5 = part1 + String.fromCharCode(part2) + part4;

const emailResult =
  '<a href=' +
  'mai' +
  'lto' +
  ':' +
  part5 +
  '>' +
  part1 +
  part3 +
  part4 +
  '</a>';
email.insertAdjacentHTML('afterbegin', emailResult);

for (const i of Object.entries(dataClips)) {
  console.log(i[0][1]); // affiche 3, 5, 7 dans la console
}
