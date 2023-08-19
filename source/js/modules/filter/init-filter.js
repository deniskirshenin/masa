const allTab = document.querySelector('.news__tabs-button--all');
const volunteerTab = document.querySelector('.news__tabs-button--volunteer');
const trainingTab = document.querySelector('.news__tabs-button--training');
const careerTab = document.querySelector('.news__tabs-button--career');
const travellingTab = document.querySelector('.news__tabs-button--travelling');

const newsCards = document.querySelectorAll('.news-card');

const newsCardsArray = Array.from(newsCards);

const initFilter = () => {
  allTab.addEventListener('click', () => {
    newsCardsArray.forEach((newsCard) => {
      newsCard.classList.remove('news-card--remove');
      newsCard.classList.add('news-card--show');
    });
  });

  volunteerTab.addEventListener('click', () => {
    newsCardsArray.forEach((newsCard) => {
      newsCard.classList.remove('news-card--remove');

      if (!newsCard.dataset.volunteer) {
        newsCard.classList.add('news-card--remove');
      }
    });
  });

  trainingTab.addEventListener('click', () => {
    newsCardsArray.forEach((newsCard) => {
      newsCard.classList.remove('news-card--remove');

      if (!newsCard.dataset.training) {
        newsCard.classList.add('news-card--remove');
      }
    });
  });

  careerTab.addEventListener('click', () => {
    newsCardsArray.forEach((newsCard) => {
      newsCard.classList.remove('news-card--remove');

      if (!newsCard.dataset.career) {
        newsCard.classList.add('news-card--remove');
      }
    });
  });

  travellingTab.addEventListener('click', () => {
    newsCardsArray.forEach((newsCard) => {
      newsCard.classList.remove('news-card--remove');

      if (!newsCard.dataset.travelling) {
        newsCard.classList.add('news-card--remove');
      }
    });
  });
};

export {initFilter};
