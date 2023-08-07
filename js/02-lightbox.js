import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const allItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class ='gallery__item '>
            <a class="gallery__link" href = '${original}' >
                <img class = 'gallery__image' src='${preview}' alt='${description} '  />
            </a > 
         </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", allItems);

function onClick(e) {
    e.preventDefault();
    const galleryImage = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        navText: ["<", ">"],
    });
}

galleryList.addEventListener("click", onClick);