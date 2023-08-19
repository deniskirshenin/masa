const staticImageMap = document.querySelector('.map__static');
const interactiveMap = document.querySelector('.map__interactive');

staticImageMap.classList.remove('map__static--nojs');
interactiveMap.classList.add('map__interactive--active');

const initMap = () => {
  const map = L.map('map', {scrollWheelZoom: false}).setView([55.82463539574, 37.62663090998426], 13);
  const pinIcon = L.icon({
    iconUrl: './img/mappinblue.webp',
    iconSize: [34, 44],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([55.81662479208488, 37.636934254874106], {icon: pinIcon}).addTo(map);
};

export {initMap};
