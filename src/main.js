import { filterBySuit, filterByType } from './data.js';
import tarot from './data/tarot/tarot.js';

const principalDiv = document.createElement("div"); //Este es el div que contiene todas mis cartas. 
const modal = document.getElementById("myModal"); //Este es la pantalla emergente que muesra la informacion de las cartas.
const span = document.getElementsByClassName("close")[0]; //En esta constante cerramos nuestro modal. 

// variable que tomaran los valores de los selects
let arcano;
let tipo;

// funcionalidad cuando el selector de arcanos cambie
const selectArcanos = document.getElementById("selectArcanos");
selectArcanos.addEventListener("change", (e) => { // e= es el option al que elegi en el menu de opciones.
  arcano = e.target.value;// se le agrega el e.target.value, donde value trae el valor de option que es minor o major.
  const arcanoSelected = filterByType(tarot.cards, arcano); //aqui filtramos por tipo de carcano// filter me regresa un array nuevo. 
  showCards(arcanoSelected); //mediante la funcion showcards, mandamos llamar nuestra constante arcanoSelected.
});

// funcionalidad cuando el selector de tipos cambie
const selectTipos = document.getElementById("selectTipos");
selectTipos.addEventListener("change", (e) => {
  tipo = e.target.value;
  const tiposSelected = filterBySuit(tarot.cards, tipo)
  showCards(tiposSelected);
});

// Aqui se manda llamar todas las cartas con el evento listener cuando se hace click. Se llama showcards y se le pasa todo lo que trae
//el array de cards del objeto json. 
const btnAllCards = document.getElementById("btnAllCards");
btnAllCards.addEventListener("click", () => {
  showCards(tarot.cards); //tarot es el objeto declarado en el archivo tarot.json y cards es la llave que nos regresa el array.
})
function removeChildren(component) {
  while (component.firstChild) {
    component.removeChild(component.firstChild);
  }
}
function showCards(cards) { //showcards recibe un array de cartas 
  removeChildren(principalDiv);
  document.getElementById("information").style.display = "none";
  const totalCards = cards.length;
  // for que muestra las cartas del tarot en la pantalla
  for (let i = 0; i < cards.length; i++) { 
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("cardDetails")
    const cardTitle = document.createElement("h4");
    cardTitle.innerHTML = cards[i].name;
    cardDetails.appendChild(cardTitle);
    const containerCarta = document.createElement("div");
    const containerButtons = document.createElement("div");
    containerButtons.classList.add("containerButtons");
    const img = document.createElement("img");

    const buttonLeft = document.createElement("button"); // en esta funcion tengo mi boton
    buttonLeft.setAttribute("name", cards[i].name_short); //le agrego iteracion 
    buttonLeft.innerText = "Reverse"; //imprimo mi boton en el html
    buttonLeft.classList.add("btnLeft");//aqui le agregue una lista a mi boton
    buttonLeft.addEventListener("click", (e) => { //aqui comienza mi funcion con el evento listener
      const cardMeaning = document.getElementById("cardMeaning");
      const card = tarot.cards.find((obj) => obj.name_short === e.target.name);
      cardMeaning.innerHTML = card.meaning_rev;
      modal.style.display = "block"; //esta es mi pantalla emergente donde imprimo mi informacion de mi carta
    });
    const buttonRight = document.createElement("button");
    buttonRight.setAttribute("name", cards[i].name_short);
    buttonRight.classList.add("btnRight");
    buttonRight.innerText = "Up Right";
    buttonRight.addEventListener("click", (e) => {
      const cardMeaning = document.getElementById("cardMeaning");
      const card = tarot.cards.find((obj) => obj.name_short === e.target.name);
      cardMeaning.innerHTML = card.meaning_up;
      modal.style.display = "block";
    });

    img.classList.add("imgClass");

    img.src = cards[i].img;

    containerCarta.classList.add("card");
    containerCarta.setAttribute("name", cards[i].name)

    containerButtons.appendChild(buttonLeft);
    containerButtons.appendChild(buttonRight);

    containerCarta.appendChild(img);
    containerCarta.appendChild(cardDetails);
    containerCarta.appendChild(containerButtons);
    
    principalDiv.id = "principalDiv";
    principalDiv.appendChild(containerCarta);
  }
  // append que manda todas las cartas al html
  document.getElementById("cards").appendChild(principalDiv);

  let cardsOrCard = "card";
  if (totalCards > 1){
    cardsOrCard = "cards";
  }
  document.getElementById("totalCards").innerHTML = `Total: ${totalCards } ${cardsOrCard}`;
}

const searchInput = document.getElementById("searchInput");

const showErrors = document.getElementById("showErrors");
searchInput.addEventListener("keyup", (e) => {
  const searchResults = tarot.cards.filter((obj) => obj.name.toLowerCase().startsWith(e.target.value));
  if (searchResults.length === 0){
    showErrors.innerHTML;
  }
  showCards(searchResults);
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

//esta funcion se encarga de seleccionar una carta aleatoria del grupo de cartas que estan Tarot.cards
function getRandomCard(){
  const randomIndex = Math.floor(Math.random() * tarot.cards.length); //math random genera un numero aleatorio del 0 y 1, math random por tarotcards.length te ada un numero decimal aleatorio entre 0 y la longitud de la lisya de cartas menos 1
  return tarot.cards[randomIndex]; //math.floor redondea ese numero decimal hacia abajo para obtener el indice de la lista de cartas
}//tarot.cards randomIndex selecciona la carta al indice aleatorio y la devuelve
const randomCardButton = document.getElementById("btnRandomCard");//recibe el elemento del boton con el id BRC
//const randomCardInfo = document.getElementById("randomCardInfo");//recibe el elemento del parrafo con el id RCI
randomCardButton.addEventListener("click", () => {//cuando se hace clic se ejecuta la funcion
  const randomCard = getRandomCard();//se llama para obtener la carta aleatoria
  showCards([randomCard]);
  //randomCardInfo.textContent = `Card: ${randomCard.name}, Arcana: ${randomCard.type}, Meaning Up: ${randomCard.meaning_up}, Meaning Rev: ${randomCard.meaning_rev}`;
});//aqui los que se hace es llamar el contenido que quiero que se vea de la carta aleaotria
//las blackticks se usan para definir el inicio y el final de la cadena de texto
//${} para incrustar valores de variables dentro de la cadena de texto

/*function contarCartasArcanos(cartas) {
  let arcanosMayores = 0;
  let arcanosMenores = 0;

  cartas.forEach(carta => {
    if (carta.type === 'major') {
      arcanosMayores++;
    } else if (carta.type === 'minor') {
      arcanosMenores++;
    }
    return {
      arcanosMayores,
      arcanosMenores
    };
  })
}*/
