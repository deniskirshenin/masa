const staticImageMap = document.querySelector('.map__static');
const interactiveMap = document.querySelector('.map__interactive');

if (staticImageMap) {
  staticImageMap.classList.remove('map__static--nojs');
}

if (interactiveMap) {
  interactiveMap.classList.add('map__interactive--active');
}

const initMap = () => {
  const map = L.map('map', {scrollWheelZoom: false}).setView([55.028728583914365, 82.92811675804462], 15);

  const pinIconLarge = L.icon({
    iconUrl: './img/pin-desktop.webp',
    iconSize: [50, 70],
  });

  const pinIconMedium = L.icon({
    iconUrl: './img/pin-tablet.webp',
    iconSize: [30, 40],
  });

  const pinIconSmall = L.icon({
    iconUrl: './img/pin-mobile.webp',
    iconSize: [24, 24],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker([55.028728583914365, 82.92811675804462], {icon: pinIconLarge}).addTo(map);

  function updateIconSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
      marker.setIcon(pinIconSmall);
    } else if (screenWidth <= 1199) {
      marker.setIcon(pinIconMedium);
    } else {
      marker.setIcon(pinIconLarge);
    }
  }

  window.addEventListener('resize', updateIconSize);
};

export {initMap};
