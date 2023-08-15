const links = document.querySelectorAll('.header__link--has-children');

const initSubMenu = () => {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const sublistId = link.getAttribute('data-sublist');
      const sublist = document.getElementById(sublistId);

      if (sublist.classList.contains('header__sub-list--opened')) {
        sublist.style.display = 'none';
        sublist.classList.remove('header__sub-list--opened');
        link.classList.remove('header__link--current');
      } else {
        sublist.style.display = 'flex';
        sublist.classList.add('header__sub-list--opened');
        link.classList.add('header__link--current');
      }
    });
  });
};

export {initSubMenu};
