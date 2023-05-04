const imgContainer =
 document.getElementById("img_cont");
const loader = document.getElementById("loader");

let photosArray = [];

function displayPhotos() {
 photosArray.forEach((photo) => {
  const eachPhoto = document.createElement("a");
  eachPhoto.setAttribute(
   "href",
   photo.links.html
  );
  eachPhoto.setAttribute("target", "_blank");

  const img = document.createElement("img");
  img.setAttribute("src", photo.urls.regular);
  img.setAttribute("alt", photo.alt_description);
  img.setAttribute(
   "title",
   photo.alt_description
  );

  eachPhoto.appendChild(img);
  imgContainer.appendChild(eachPhoto);
 });
}

const count = 30;
const apiKey =
 "8VzkTGbZE8cvqyJkkV2WDUkT9PPAlPiXOX7AklDxvkA";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
 try {
  const response = await fetch(apiUrl);
  photosArray = await response.json(); // update global variable
  displayPhotos();
 } catch (error) {
  console.log(error);
 }
}

window.addEventListener("scroll", () => {
 if (
  window.innerHeight + window.scrollY >=
  document.body.offsetHeight - 1000
 ) {
  loader.classList.add("show");
  getPhotos();
 }
});

getPhotos();
