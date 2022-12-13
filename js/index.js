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
  width: '75vw',
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
  width: '75vw',
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

let datas = {
  images: [
    ['phoenix-1-w1200.jpg', 'alt à renseigner'],
    ['phoenix-2-w1200.jpg', 'alt à renseigner'],
    ['phoenix-3-w1200.jpg', 'alt à renseigner'],
    ['phoenix-4-w1200.jpg', 'alt à renseigner'],
    ['phoenix-5-w1200.jpg', 'alt à renseigner'],
  ],
  video: [
    ['url-video', 'url-cover'],
    ['url-video', 'url-cover'],
  ],
};

const insertDatas = document.getElementById('insert-datas');

console.log(insertDatas);

for (var prop in datas.images) {
  console.log(datas.images[prop]);
  insertDatas.insertAdjacentHTML(
    'afterbegin',
    `<li class="splide__slide">
  <img src="./images/${datas.images[prop][1]}" alt="" />
</li>`
  );
}
