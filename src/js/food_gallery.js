import itemsTemplate from '../templates/food_gallery.hbs';
import food from '../menu.json';

const markup = itemsTemplate(food);
const galleryRef = document.querySelector('ul.menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
