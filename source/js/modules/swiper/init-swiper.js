import Swiper from '../../vendor/swiper';

const hero = document.querySelector('.hero__wrapper');
const heroPagination = document.querySelector('.hero__pagination');

const program = document.querySelector('.programs__slider-wrapper');
const programNextButton = document.querySelector('.programs__button-next');
const programPrevButton = document.querySelector('.programs__button-prev');
const programScrollbar = document.querySelector('.programs__scrollbar');

const initHeroSwiper = () => new Swiper(hero, {
  cssMode: true,
  loop: true,
  slidesPerView: 1,
  speed: 300,
  pagination: {
    el: heroPagination,
    clickable: true,
    type: 'bullets',
  },
});

const initProgramSwiper = () => new Swiper(program, {
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: programNextButton,
    prevEl: programPrevButton,
  },
  scrollbar: {
    el: programScrollbar,
    hide: false,
    draggable: false,
    dragSize: 392,
  },
});

export {initHeroSwiper, initProgramSwiper};
