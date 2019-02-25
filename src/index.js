document.addEventListener("DOMContentLoaded", function(){
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const imgContainer = document.querySelector('#dog-image-container');
const breedSelector = document.querySelector('#breed-dropdown');

function fetchData(url){
  return fetch(url)
    .then(resp => resp.json());
};

function displayImages(urls) {
  urls.forEach(url => {
    imgContainer.innerHTML += `<img src=\"${url}\"></url>`
  });
};

function showBreeds(breeds) {
  breedSelector.addEventListener('change', e => {
    document.querySelector('#dog-breeds').innerHTML = '';
    breedNames = Object.keys(breeds.message);
    breedNames = breedNames.filter(breed => breed.toLowerCase().slice(0,1) === breedSelector.value);
    breedNames.forEach(breed => {
      document.querySelector('#dog-breeds').innerHTML += `<li>${breed}</li>`;
    });
  });
};

fetchData(imgUrl).then(urls => displayImages(urls.message));

fetchData(breedUrl).then(breeds => showBreeds(breeds));
});
