import {Burger} from './burger';
let burger;

const initBurger = () => {
  burger = new Burger();
  burger.init();
};

export {initBurger, burger};
