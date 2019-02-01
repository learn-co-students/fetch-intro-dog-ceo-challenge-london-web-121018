const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let container = document.getElementById('dog-image-container');
let ul = document.getElementById('dog-breeds');
let filtered = false;
let lis = [];
let doggies = [];
let breeds = {};
  

   // challenge 2

    let showDoggies = function(item){
    let img = document.createElement('img');
    img.style.display = "inline-block";
    img.src = item;
    container.appendChild(img);
  } 

  doggies.forEach(d => showDoggies(d));


     // challenge 3  

      let colorTextChange = function(li) {
        colors = ["red", "blue", "green"];
        li.target.style.color = colors[Math.floor(Math.random() * 3)];  
}

  
    let showBreeds = function(breedz, lis) {
      for (const key in breedz) {
      let li = document.createElement('li');
      li.style.textDecoration = "none";
      li.innerText = key;
      li.style.cursor = "pointer";
      li.addEventListener("click", colorTextChange);
      lis.push(li);
       }
       appendLis();
    }

    // challenge 4  

     function appendLis(){
       lis.slice().forEach( l => {
       ul.appendChild(l);    
    });
    }
   
  
    let filterBreeds = function(selection) {
    appendLis();
    let funstuff = selection.options[selection.selectedIndex].text;
    lis.slice().forEach( l => {
      if( l.innerText.slice(0, 1) != funstuff) {
        l.remove();
      }
    });
    }

document.addEventListener("DOMContentLoaded", function() {
 
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    return doggies = [...myJson.message];
  });

   fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    breeds = {...myJson.message};
    showBreeds(breeds, lis);
  });



});
