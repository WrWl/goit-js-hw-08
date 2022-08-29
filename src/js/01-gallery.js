import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(".gallery");


const addGalleryItems = galleryItems.map((item) => `
    <div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
            <img 
                class="gallery__image" 
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>
    </div>
    `).join("");

gallery.insertAdjacentHTML("afterbegin", addGalleryItems)  

const selectImg = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', { showCounter: false, captions: true, captionsData: 'alt', captionDelay: 250});

}




 gallery.addEventListener("click", selectImg)
// Описан в документации
