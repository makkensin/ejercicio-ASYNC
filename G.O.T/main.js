



const fetchAndPopulateSelect = () => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => {
        populateSelect(data);
        addChangeEvent(data);
      })
      .catch((error) => {
        console.error("Ha ocurrido un error:", error);
      });
  };
  
  const populateSelect = (characters) => {
    const select = document.querySelector("#character-list");
    for (const character of characters) {
      select.innerHTML += `<option value="${character.firstName} ${character.lastName}">${character.firstName} ${character.lastName}</option>`;
    }
  };
  
  const addChangeEvent = (characters) => {
    const select = document.querySelector("#character-list");
    select.addEventListener("change", (e) => {
      updateCharacterImage(e.target.value, characters);
    });
  };
  
  const updateCharacterImage = (selectedName, characters) => {
    const selectedCharacter = characters.find(
      (character) =>
        `${character.firstName} ${character.lastName}` === selectedName
    );
    if (selectedCharacter) {
      const image = document.querySelector(".character-image");
      image.src = selectedCharacter.imageUrl;
      image.alt = selectedName;
    }
  };
  
  fetchAndPopulateSelect();





// fetch("https://thronesapi.com/api/v2/Characters")
//     .then((res) => res.json())
//     .then((data) => {
        
//         const characters = data;
//         console.log(characters);
//         printSelect(characters)
       
       
//     })
//     .catch((error) => {
//         console.error('Ha ocurrido un error:', error);
//     });

// const printSelect = (arr) => {
//     const select = document.querySelector('#character-list')
//     select.addEventListener('change',(e) =>{
//         printImg(e.target.value, character)
//     })
//     for (const character of arr) {
//             select.innerHTML +=`
//             <option value="${character.firstName} ${character.lastName}">
//             ${character.firstName} ${character.lastName}</option>
//             `
//         }

// }


// const printImg = (nameSelected, character) =>{

//  const valor = e.target.value;
//  console.log(valor);

// }

































    // const selectPerson = (arr) =>{
    // const select = document.querySelector('#character-list')
    // for (const character of arr) {
    //     select.innerHTML +=`
    //     <option value="${character.firstName} ${character.lastName}">
    //     ${character.firstName} ${character.lastName}</option>
    //     `
    // }
    // }

    // const createName = (arr) =>{
    //     const listName = document.createElement('div');
    //      arr.forEach((elem) =>{
    //       const nombre = document.createElement('li');
    //       nombre.innerHTML = elem.firstName;
    //       listName.appendChild(nombre)
    //     });
        
    //     document.body.appendChild(listName)

    // }

    // const showImage = (arr) =>{
    //     const div = document.createElement('div');

    //     arr.forEach((elem)=>{
    //     const list = document.createElement('li');
    //     const imagen = document.createElement('img');
    //     imagen.src = elem.imageUrl;
    //     list.appendChild(imagen);
    //     div.appendChild(list);
    // })
    // document.body.appendChild(div)
    // }























