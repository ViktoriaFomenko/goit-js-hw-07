import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryContainer.addEventListener('click', clickOnGalerryContainer);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
             <div class="gallery__item">
                 <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                     <img
                         class="gallery__image"
                         src="${preview}"
                         data-source="${original}"
                         alt="${description}"
                     />
                 </a>
</div>`;
    })
    .join('');
}
function clickOnGalerryContainer(event) {
  console.log(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
       <img src="${event.target.dataset.source}"
       />
  `);

  instance.show();
  document.addEventListener('keydown', escClick);
}

function escClick(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', escClick);
  }
}
