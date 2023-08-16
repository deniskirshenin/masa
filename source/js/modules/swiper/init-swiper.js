import Swiper from '../../vendor/swiper';

const hero = document.querySelector('.hero__wrapper');
const heroPagination = document.querySelector('.hero__pagination');

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

export {initHeroSwiper};
