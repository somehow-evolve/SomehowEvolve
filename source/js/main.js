window.addEventListener('load', () => {
  const button = document.querySelector('.js-burger');
  const navMenu = document.querySelector('.js-nav-menu');
  const headerWr = document.querySelector('.header__wrraper');
  const header = document.querySelector('.header');

  navMenu.classList.remove('is-active');
  button.classList.remove('no-js');
  headerWr.classList.remove('no-js');
  navMenu.classList.remove('no-js');
  header.classList.remove('no-js');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    button.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
});


// Swiper
// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';


const swiper = new Swiper('.swiper__swiper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

swiper.update();


// Navigation,
// закрытие при нажатии на сылку
const magicLink = document.querySelectorAll('.site-list__link');
const checkbox = document.querySelector('.menu__burger-checkbox');

magicLink.forEach((btn) => {
  btn.addEventListener('click', () => {
    checkbox.click();
  });
});
