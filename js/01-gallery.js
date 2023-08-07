import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");

const allItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class ='gallery__item '>
            <a class="gallery__link" href = '${original}' >
                <img class = 'gallery__image' src='${preview}' data-source='${original}' alt='${description} '  />
            </a > 
         </li>`
  )
  .join("");

galleryList.insertAdjacentHTML('beforeend', allItems)
    


const onClickImage = (e) => {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    }

    // basicLightbox.create(`<img  src='${e.target.dataset.source}'>`).show();
 const modalContent = `<img src="${e.target.dataset.source}" alt="" />`;
 const instance = basicLightbox.create(modalContent, {
   onShow: () => document.addEventListener("keydown", onKeyDown),

   onClose: () => document.removeEventListener("keydown", onKeyDown),
 });
 instance.show();

 function onKeyDown(e) {
   if (e.key === "Escape") {
     instance.close();
   }
 }
}




galleryList.addEventListener("click", onClickImage);