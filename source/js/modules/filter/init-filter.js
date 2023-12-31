const initFilter = (slidesContainer, slides, swiper, tabButtons) => {
  if (slidesContainer && slides && swiper && tabButtons) {
    tabButtons.forEach((tabButton) => {
      tabButton.addEventListener('click', () => {
        const filter = tabButton.getAttribute('data-filter');
        tabButtons.forEach((btn) => {
          btn.classList.remove('btn--tabs-current');
        });

        tabButton.classList.add('btn--tabs-current');

        slidesContainer.innerHTML = '';

        if (filter === 'all') {
          slides.forEach(function (slide) {
            slidesContainer.appendChild(slide);
          });
        } else {
          slides.forEach(function (slide) {
            const category = slide.getAttribute('data-category');
            if (category === filter) {
              slidesContainer.appendChild(slide);
            }
          });
        }

        if (swiper) {
          swiper.updateSlides();
          swiper.update();
          swiper.updateSize();
        }
      });
    });
  }
};

export {initFilter};
