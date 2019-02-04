console.log('%c HI', 'color: firebrick')

const imageContainer = document.getElementById("dog-image-container");
const breedContainer = document.getElementById("dog-breeds");
const breedDrop = document.getElementById('breed-dropdown')


let dogImages;
function displayImages(images){ 
    for (const image of images){
        let img = document.createElement('img');
        img.setAttribute('src', image);
        imageContainer.appendChild(img);
    }
}

let dogBreeds;
function dogBreedList(list){
    breedContainer.innerHTML = '';
    for(const breed in list){
            let li = document.createElement('li');
            li.innerText = breed;
            if (list[breed].length !== 0){
                for (const name of list[breed]){
                    li.innerText += `, ${name} `
                    breedContainer.appendChild(li);
                }
            }else{
                breedContainer.appendChild(li);
            }
            
    }
}
function filterDogs(value){
    let filteredDogs = {};
    for (const breed in dogBreeds){
        if(breed.startsWith(value)){
            filteredDogs[breed] = dogBreeds[breed]
        }
    }
    dogBreedList(filteredDogs);
}

//eventlisteners
function colourChangerDogs(){
    breedContainer.addEventListener('click', function(e){
        if (e.target && e.target.matches('li')){
            e.target.style.color = "magenta";
        }
    });
}
function dropDownListener(){
    breedDrop.addEventListener('change', function(event){
        if (event.target.value !== 'all'){
            filterDogs(event.target.value);
        }else{
            dogBreedList(dogBreeds);
        }
    })
}


function initialize(){
    getDogImages()
    .then(dogs => {dogImages = dogs.message; 
        displayImages(dogImages);});
    //--------------------
    getDogBreeds()
    .then(dogs => {dogBreeds = dogs.message;
       dogBreedList(dogBreeds);});
    
    dropDownListener()
    colourChangerDogs()
}

//server stuff
function getDogImages(){
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json());
}

function getDogBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json());
}


initialize()