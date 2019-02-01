console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const anchor = document.querySelector('#dog-breeds')
const dropDownAnchor = document.querySelector('#breed-dropdown')

const getDoggosPics = () => {
    
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(jso => {
        showDoggos(jso.message)            
    });
};

const showDoggos = (doggos) => {
    doggoContainer = document.querySelector('#dog-image-container')
    
    doggos.forEach(doggo => {
        let doggoTag = document.createElement('img')
        doggoTag.setAttribute('src', doggo);
        // debugger
        doggoContainer.append(doggoTag);
    });
};

const getBreeds = () => {
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(jso => showBreeds(jso.message))
};

const showBreeds =  (breeds) => {
    const breedContainer = document.querySelector('#dog-breeds')
    
    for (const breed in breeds) {
        // debugger
        
        let doggoTag = document.createElement('li')
        doggoTag.innerText = breed;
        breedContainer.append(doggoTag);
        
    };
};

const changeColor = (mouseClick) => {
    mouseClick.srcElement.setAttribute('style', 'color:red')
}

const getBreedsFromDropDown = (mouseClick) => {
    const letter = mouseClick.target.value
    const breeds = [...document.querySelector('#dog-breeds').children]


    // debugger
    if (letter !== "") {

        breeds.forEach((breed) => {
            breed.removeAttribute('hidden')
            
            if (!(breed.innerText[0] === letter)) {
                breed.toggleAttribute('hidden')
            }
        })
    } else {
        breeds.forEach((breed) => {
            breed.removeAttribute('hidden')
        })
    }
        
    
    
}

anchor.addEventListener('click', changeColor)
// dropDownAnchor.addEventListener('DOMContentLoaded', () => {
// }, )
dropDownAnchor.addEventListener("change", getBreedsFromDropDown, false)
getDoggosPics()
getBreeds()


