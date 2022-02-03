// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const container = document.querySelector(".gallery");
const cardGallery = createGallery(galleryItems);

container.insertAdjacentHTML('beforeend', cardGallery);

function createGallery (images) {
    return images.map(({ preview, original, description }) => {
        return `
          <a class="gallery__item" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
               
            />
           </a>
         `;
    })
    .join('');  
}

    const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt'});

    // container.addEventListener("click", gallery.next());


