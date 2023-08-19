import Swiper from '../../vendor/swiper';

const hero = document.querySelector('.hero__wrapper');
const heroPagination = document.querySelector('.hero__pagination');

const program = document.querySelector('.programs__slider-wrapper');
const programNextButton = document.querySelector('.programs__button-next');
const programPrevButton = document.querySelector('.programs__button-prev');
const programScrollbar = document.querySelector('.programs__scrollbar');

const news = document.querySelector('.news__slider-wrapper');
const newsNextButton = document.querySelector('.news__button-next');
const newsPrevButton = document.querySelector('.news__button-prev');
const newsPagination = document.querySelector('.news__pagination');

const review = document.querySelector('.reviews__slider-wrapper');
const reviewNextButton = document.querySelector('.reviews__button-next');
const reviewPrevButton = document.querySelector('.reviews__button-prev');
const reviewScrollbar = document.querySelector('.reviews__scrollbar');

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

const initNewsSwiper = () => new Swiper(news, {
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: newsNextButton,
    prevEl: newsPrevButton,
  },
  pagination: {
    el: newsPagination,
    clickable: true,
    renderBullet(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

const initReviewSwiper = () => new Swiper(review, {
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
    nextEl: reviewNextButton,
    prevEl: reviewPrevButton,
  },
  scrollbar: {
    el: reviewScrollbar,
    hide: false,
    draggable: false,
    dragSize: 392,
  },
});

export {initHeroSwiper, initProgramSwiper, initNewsSwiper, initReviewSwiper};
