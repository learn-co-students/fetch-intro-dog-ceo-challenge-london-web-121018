
console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="select-breed"]').onchange=hide;
},false);

const imageContainer = document.querySelector('#dog-image-container')

const dogBreedUl = document.querySelector('#dog-breeds')

const dropDown = document.querySelectorAll("option")

const getDogs = () => {
	return fetch("https://dog.ceo/api/breeds/image/random/4")
		.then(resp => resp.json())
		.then(resp => resp.message)
}

const addDog = dog => {
  const imageTag = document.createElement('img')
  imageTag.src = dog
  imageContainer.appendChild(imageTag)
}

const addDogs = dogs => {
	for (const dog of dogs) {
		addDog(dog)
	}
}

const getDogBreeds = () => {
	return fetch("https://dog.ceo/api/breeds/list/all")
		.then(resp => resp.json())
		.then(resp => (resp.message))
		.then(resp => Object.keys(resp))
}

const addDogBreed = dog => {
  const li = document.createElement('li')
	li.className = 'dog-breed'
  li.innerText = dog
  dogLi = dogBreedUl.appendChild(li)
}

const addDogBreeds = dogs => {
	for (const dog of dogs) {
		addDogBreed(dog)
	}
}

const challengeThree = () => {
	const elLi = document.querySelectorAll('li')
	elLi.forEach(function(e){
		e.addEventListener('click', function(){
			this.style.color = "red"
		})
	})
}

function hide(event) {
	dogBreeds = document.querySelectorAll('li')
	dogBreeds.forEach(function(dog){
		if (dog.innerText[0] != event.target.value){
			dog.style.display = "none"
		}else{
			dog.style.display ="block"
		}
	})
}


getDogs()
.then(addDogs)
.then(getDogBreeds)
.then(addDogBreeds)
.then(challengeThree)
