let pets = [
  {
    name: "Rubby",
    type: "Dog",
    breed: "Corgi",
    bestTrick: "Tug of war",
    image: "images/rubby.jpg",
  },
  {
    name: "Howdy",
    type: "Dog",
    breed: "Mixed Breed",
    bestTrick: "Go find it!",
    image: "images/howdy.jpg",
  },
  {
    name: "KitKit",
    type: "Cat",
    breed: "American Shorthair",
    bestTrick: "Commanding his owner to feed him",
    image: "images/kitkit.jpg",
  },
  {
    name: "Lil' Miss",
    type: "Cat",
    breed: "Tabby",
    bestTrick: "Looking aloof",
    image: "images/lilmiss.jpg",
  },
  {
    name: "Happy",
    type: "Dog",
    breed: "Golden Retriever",
    bestTrick: "Refusing to retrieve!",
    image: "images/happy.jpg",
  },
  {
    name: "Piper",
    type: "Dog",
    breed: "Beagle",
    bestTrick: "Find it!  Dropped food edition!",
    image: "images/piper.jpg",
  },
  {
    name: "Spooky",
    type: "Cat",
    breed: "Mixed",
    bestTrick: "Gymnastics!",
    image: "images/spooky.jpg",
  },
];

window.onload = function() {
    let petList = document.querySelector("#petList");
    let petImageCard = document.querySelector("#petImageCard");
    let petNameHeading = document.querySelector("#petNameHeading");
    let petTypeP = document.querySelector("#petTypeP");
    let petBreedP = document.querySelector("#petBreedP");
    let petbestTrickP = document.querySelector("#petLpetbestTrickPist");


    function petListing() {
        for (const pet of pets) {
            let petNameOption = new Option("option");
            petNameOption.value = pet.name;
            petNameOption.innerText = pet.name;


            petList.appendChild(petNameOption)
        }
    }

    function shopPetDetail() {
        for (const pet of pets) {
            if(pet.name == petList.value) {
                let petImg = document.createElement("img");
                petImg.src = pet.image;
                petImg.alt = pet.name;

                petImageCard.appendChild(petImg)

                petNameHeading.innerText = pet.name;
                petTypeP.innerText = pet.type;
                petBreedP.innerText = pet.breed;
                petbestTrickP.innerText = pet.bestTrick



            }
            
        }
    }

    petList.onchange = shopPetDetail;

    petListing();

}


