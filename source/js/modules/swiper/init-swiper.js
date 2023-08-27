import Swiper from '../../vendor/swiper';
import {initFilter} from '../filter/init-filter';

const hero = document.querySelector('.hero__wrapper');
const heroPagination = document.querySelector('.hero__pagination');
let heroSwiper;

const program = document.querySelector('.programs__slider-wrapper');
const programNextButton = document.querySelector('.programs__button-next');
const programPrevButton = document.querySelector('.programs__button-prev');
const programScrollbar = document.querySelector('.programs__scrollbar');

const news = document.querySelector('.news__slider-wrapper');
const newsNextButton = document.querySelector('.news__button-next');
const newsPrevButton = document.querySelector('.news__button-prev');
const newsPagination = document.querySelector('.news__pagination');
const slides = document.querySelectorAll('.news-card');
const tabButtons = document.querySelectorAll('.news__tabs-button');
let newsSwiper;

const review = document.querySelector('.reviews__slider-wrapper');
const reviewNextButton = document.querySelector('.reviews__button-next');
const reviewPrevButton = document.querySelector('.reviews__button-prev');
const reviewScrollbar = document.querySelector('.reviews__scrollbar');

const setContentHeightAndPosition = (swiper) => {
  const activeSlide = swiper.slides[swiper.activeIndex];
  if (activeSlide) {
    const headerElement = activeSlide.querySelector('h2');
    const textElement = activeSlide.querySelector('p');
    const buttonElement = activeSlide.querySelector('.hero__btn-wrapper');

    if (headerElement && textElement && buttonElement && heroPagination) {
      const textHeight = textElement.offsetHeight;
      const buttonHeight = buttonElement.offsetHeight;
      let contentHeight;

      if (window.innerWidth <= 767) {
        contentHeight = headerElement.offsetHeight + textHeight + buttonHeight + 14;
      } else if (window.innerWidth <= 1199) {
        contentHeight = headerElement.offsetHeight + textHeight + 57;
      } else {
        contentHeight = headerElement.offsetHeight + textHeight + 55;
      }

      heroPagination.style.bottom = contentHeight + 'px';
    }
  }
};

const initHeroSwiper = () => {
  heroSwiper = new Swiper(hero, {
    initialSlide: 2,
    // autoplay: {
    //   delay: 3000,
    // },
    loop: true,
    slidesPerView: 1,
    speed: 300,
    pagination: {
      el: heroPagination,
      clickable: true,
      type: 'bullets',
    },
  });

  setContentHeightAndPosition(heroSwiper);

  heroSwiper.on('slideChange', () => {
    setContentHeightAndPosition(heroSwiper);
  });
};

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
  },
});

const initNewsSwiper = () => {
  newsSwiper = new Swiper(news, {
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
          fill: 'row',
        },
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row',
        },
        slidesPerGroup: 1,
        slidesPerColumn: 2,
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

  if (news && slides && newsSwiper && tabButtons) {
    const newsSlidesContainer = news.querySelector('.swiper-wrapper');
    initFilter(newsSlidesContainer, slides, newsSwiper, tabButtons);
  }

};

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
  },
});

export {initHeroSwiper, initProgramSwiper, initNewsSwiper, initReviewSwiper};
