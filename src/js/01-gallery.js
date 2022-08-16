// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

const galleryContainer = document.querySelector('.gallery');


galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsItems(galleryItems))


function createGalleryCardsItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
   return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join('');
}

let lightbox = new SimpleLightbox(".gallery a", {
 captionsData: "alt",
 captionDelay: 250,
});
