import tarot from './data/tarot/tarot.json' assert {type: 'json'};

const principalDiv = document.createElement("div");

// variable que tomaran los valores de los selects
let arcano;
let tipo;

// funcionalidad cuando el selector de arcanos cambie
const selectArcanos = document.getElementById("selectArcanos");
selectArcanos.addEventListener("change", (e) => { // e= es el option al que elegi en el menu de opciones.
  arcano = e.target.value;// se le agrega el e.target.value, donde value trae el valor de option que es minor o major.
  const arcanoSelected = tarot.cards.filter((obj) => obj.type === arcano);
  showCards(arcanoSelected);
});

// funcionalidad cuando el selector de tipos cambie
const selectTipos = document.getElementById("selectTipos");
selectTipos.addEventListener("change", (e) => {
  tipo = e.target.value
  const tiposSelected = tarot.cards.filter((obj) => obj.suit === tipo);
  showCards(tiposSelected);
});

// Aqui se manda llamar todas las cartas con el evento listener cuando se hace click. Se llama showcards y se le pasa todo lo que trae
//el array de cards del objeto json. 
const btnAllCards = document.getElementById("btnAllCards");
btnAllCards.addEventListener("click", () => {
  showCards(tarot.cards); //tarot es el objeto declarado en el archivo tarot.json y cards es la llave que nos regresa el array.
})

function showCards(cards) { //showcards recibe un array de cartas 
  removeChildren(principalDiv);
  // for que muestra las cartas del tarot en la pantalla
  for (let i = 0; i < cards.length; i++) {
    const containerCarta = document.createElement("div");
    const containerButtons = document.createElement("div");
    const img = document.createElement("img");

    const buttonLeft = document.createElement("button");
    buttonLeft.innerText = "Izquierdo";
    const buttonRight = document.createElement("button");
    buttonRight.innerText = "Derecho";
    
    img.classList.add("imgClass");

    img.src = cards[i].img;

    containerCarta.classList.add("card");
    containerCarta.setAttribute("name", cards[i].name)

    containerButtons.appendChild(buttonLeft);
    containerButtons.appendChild(buttonRight);

    containerCarta.appendChild(img);
    containerCarta.appendChild(containerButtons);
    principalDiv.id = "principalDiv";
    principalDiv.appendChild(containerCarta);

  }
  // append que manda todas las cartas al html
  document.getElementById("cards").appendChild(principalDiv);
}

function removeChildren(component){
  while(component.firstChild){
    component.removeChild(component.firstChild);
}
}
