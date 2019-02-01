console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function loadImage() {

  fetch(imgUrl).then(function (response) { return response.json() }).then(dogs => putImageOnPage(dogs))


}

function putImageOnPage(dogs) {

  dogImages = dogs.message
  let x = 0
  while (x < dogImages.length) {
    document.querySelector("#dog-image-container").innerHTML += `<img src=${dogImages[x]}>`
    x++
  }
}


function loadDogs() {
  fetch(breedUrl).then(function (response) { return response.json() }).then(dogs => putDogsOnPage(dogs))
}

function putDogsOnPage(dogs) {
  let dogList = dogs.message
  x = 0
  console.log(dogList)
  for (dog in dogList) {
    if (dogList[dog].length > 0) {
      subBreed = dogList[dog]
      document.querySelector("#dog-breeds").innerHTML += `<li id=${dog}>${dog}<ul></ul></li>`
      x = 0
      while (x < subBreed.length) {
        //console.log(subBreed[x])
        document.querySelector(`#${dog} ul`).innerHTML += `<li>${subBreed[x]}</li>`
        x++
      }
      //document.querySelector("#dog-breeds").innerHTML += `</ul></li>`
    } else {
      document.querySelector("#dog-breeds").innerHTML += `<li>${dog}</li>`
    }
  }
  addListener()
  addDropDownListener()

}

function addListener() {
  listItems = document.querySelectorAll("li")
  x = 0
  while (x < listItems.length) {
    listItems[x].addEventListener('click', changeColor)
    x++
  }
}


function addDropDownListener() {
  dropDown = document.querySelector('#breed-dropdown')
  // dropDown.onchange = () => filterItem(dropDown)
  dropDown.addEventListener('change', () => filterItem(dropDown))
}


function changeColor() {

  this.style.color = "purple";
}

function filterItem(select) {
  option = select.value

  listItems = document.querySelectorAll("li")
  x = 0
  while (x < listItems.length) {
    //debugger
    if (listItems[x].innerText.startsWith(option) === false) {
      listItems[x].style.display = "none"
    } else {
      listItems[x].style.display = "list-item"
    }
    x++
  }
}

loadImage()
loadDogs()


