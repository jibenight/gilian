const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// js for menu
const menuMobile = document.getElementById('menu-mobile');
const crossMobile = document.getElementById('cross-mobile');
const navigation = document.querySelector('#menu-list');
const openMenuMobile = () => {
  navigation.style.display = 'block';
  navigation.classList.add('full-menu-mobile');
  menuMobile.style.display = 'none';
  crossMobile.style.display = 'block';
};
menuMobile.addEventListener('click', openMenuMobile);

const closeMenuMobile = () => {
  navigation.style.display = 'none';
  navigation.classList.remove('full-menu-mobile');
  menuMobile.style.display = 'block';
  crossMobile.style.display = 'none';
};
crossMobile.addEventListener('click', closeMenuMobile);

if (window.matchMedia('(max-width: 780px)').matches) {
  navigation.addEventListener('click', closeMenuMobile);
}

//window.addEventListener('resize', displayWindowSize);
