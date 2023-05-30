import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const renderGallery = galleryItems =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
        <a class = "gallery__link" 
        href = "${original}">
        <img class = "gallery__image" 
        src = "${preview}" 
        alt = "${description}"/>
        </a>
        </li>`
    )
    .join('');

const insertGallery = cardGallery => {
  galleryEl.insertAdjacentHTML('beforeend', cardGallery);
};

insertGallery(renderGallery(galleryItems));

const gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
