console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const dogBreedUrl = 'https://dog.ceo/api/breeds/list/all'
let container = document.querySelector('#dog-image-container')
let breedContainer = document.querySelector('#dog-breeds')

const putImgOnPage = obj => {
  obj['message'].forEach(link => {
    let imgTag = document.createElement('img')
    imgTag.src = link
    container.appendChild(imgTag)
  })
}

const putBreedOnPage = obj => {
  let i = 1
  Object.keys(obj['message']).forEach(breed => {
    if (obj['message'][breed] !== []) {
      obj['message'][breed].forEach(breed1 => {
        let liTag = document.createElement('li')
        liTag.innerText = breed1
        liTag.className = 'light'
        liTag.id = `card-${i}`
        breedContainer.appendChild(liTag)
        i++
      })
    }
    let liTag = document.createElement('li')
    liTag.innerText = breed
    liTag.className = 'light'
    liTag.id = `card-${i}`
    breedContainer.appendChild(liTag)
    i++
  })
}

function ligthUp (id) {
  if (id) {
    let breed = document.querySelector(`#${id}`)
    breed.classList.toggle('light')
  }
}

const getDogsOnScreen = fetch(imgUrl)
  .then(resp => resp.json())
  .then(putImgOnPage)

const getBreedsOnScreen = fetch(dogBreedUrl)
  .then(resp => resp.json())
  .then(putBreedOnPage)

document.body.addEventListener('mouseover', event => {
  // console.log(event.target.id)
  ligthUp(event.target.id)
})

document.body.addEventListener('mouseout', event => {
  // console.log(event.target.id)
  ligthUp(event.target.id)
})

let breedDropdown = document.querySelector('#breed-dropdown')

breedDropdown.addEventListener('change', (event) => {
  let liList = document.querySelectorAll('.light')
//   console.log(liList[0].innerText[0])
    event.preventDefault;
    debugger
  
  let letter = event.target.value 
//   console.log(letter)
  liList.forEach((b) => {
      if (b.innerText[0] !== letter) {
            b.className += ' dissapear'
      } else {
          b.classList.remove('dissapear')
      }
  }) 
  
})
