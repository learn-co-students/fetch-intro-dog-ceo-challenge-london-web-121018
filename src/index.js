// console.log('%c HI', 'color: firebrick')

const dogImageContainer = document.querySelector('body div#dog-image-container.dog-image-container');
const dogBreedList = document.querySelector('#dog-breeds')

// Get array of dogs

const dogsData = () => {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(putImageOnPage)
}

function createImage(url){
  const dogImage = document.createElement('img');
  dogImage.src = url
  // dogImage.height = "100px"
  dogImageContainer.append(dogImage);
}

const putImageOnPage = obj => obj["message"].forEach(createImage)



// Get all dog breeds
let counter = 0;


const dogBreeds = () => {
   fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(addDogItemToPage)
}

const createItem = breed => {
  const dogBreed = document.createElement('li');
  dogBreed.className = `dog-main-breed ${counter}`
  dogBreed.innerText = breed;
  dogBreedList.append(dogBreed);
  ++counter
}

const createItemAndSubItem = (breeds, breed) => {
  const dogBreed = document.createElement('li');
  dogBreed.className = `dog-main-breed ${counter}`
  dogBreed.innerText = breed;
  dogBreedList.append(dogBreed);

  const subDogBreedList = document.createElement('ul');
  dogBreed.append(subDogBreedList)
  ++counter

  let counter2 = 0;
  // Now create the sub-list of that breed
  for (const subbreed of breeds[breed]) {
    const subDogBreed = document.createElement('li');
    subDogBreed.className = `dog-sub-breed ${counter}-${counter2}`
    subDogBreed.innerText = subbreed;
    subDogBreedList.append(subDogBreed);
    ++counter2;
  }
}

function addDogItemToPage(obj) {
  const breeds = obj["message"];
  for (const breed in breeds) {
    if(breeds[breed].length === 0){
      createItem(breed);
    } else {
      createItemAndSubItem(breeds, breed);
    }
  }
}

// Change colour of select breed

document.addEventListener('click', event => {
  if (event.target.classList.contains('dog-main-breed')){
    const targetText = event.target
    targetText.classList.toggle("change-font-color");
  }
})

// Event listener for drop down menu

const dropdownMenu = document.querySelector('#breed-dropdown');

dropdownMenu.addEventListener('change', event => {
  event.preventDefault
  const targetLetter = event.target.value
  const breeds = document.querySelectorAll('.dog-main-breed')
  breeds.forEach( el => checkFirstLetter(el, targetLetter) )
})

const checkFirstLetter = (el, char) => {
  if (el.innerText[0] !== char){
    el.classList.add('hide');
  } else {
    el.classList.remove('hide');
  }
}

// Event listener to call all functions when page has loaded

document.addEventListener('DOMContentLoaded', event => {
  dogsData();
  dogBreeds();
})
