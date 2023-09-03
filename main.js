import { filterBySuit, filterByType, randomCard } from './data.js';
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
  const arcanoSelected = filterByType(tarot.cards, arcano); //aqui filtramos por tipo de arcano// filter me regresa un array nuevo. 
  showCards(arcanoSelected); //mediante la funcion showcards, mandamos llamar nuestra constante arcanoSelected.
});

// funcionalidad cuando el selector de tipos cambie
const selectTipos = document.getElementById("selectTipos");//se almacena la varibale selectTipos, es un elemento de lista del menu desplegable
selectTipos.addEventListener("change", (e) => {//el evento que se esta escuchando aqui es cuando el usuario selecciona una opcion diferente al elemento select(el evento change ejecuta una funcion anonima que se pasa como segundo argumento a ael)
  tipo = e.target.value;//aqui se obtiene el valor seleecionado en el elemento select, esto almacena la variable tipo
  const tiposSelected = filterBySuit(tarot.cards, tipo)//aqui se filtran el conjunto de cartas segun el tipo selecionado.devuelve un conjunto de cartas que conincidan con el tipo seleccionado y las almacena en la variable tiposSelect
  showCards(tiposSelected);// en esta funcion se pasa TS como argumento y esto se encarga de mostrar las cartas selecionadas.
});

// Aqui se manda llamar todas las cartas con el evento listener cuando se hace click. Se llama showcards y se le pasa todo lo que trae
//el array de cards del objeto json. 
const btnAllCards = document.getElementById("btnAllCards");
btnAllCards.addEventListener("click", () => {
  showCards(tarot.cards); //tarot es el objeto declarado en el archivo tarot.json y cards es la llave que nos regresa el array.
})
function removeChildren(component) {//esta funcion toma el argumento component
  while (component.firstChild) {//el bucle while se ejecutara mientras el elemento component tenga al menos un hijo.
    component.removeChild(component.firstChild); //dentro del bucle se utiliza removechild para eliminar el primer hijo del elemento componet
  }//esto hace se hace repetidamente hasta que ya no queden hijos en component
}
function showCards(cards) { //showcards recibe un array de cartas 
  removeChildren(principalDiv); //removeChildren sirve para que una vez que se carguen mis cartas no se vuelvan a duplicar si le doy click al boton de nuevo. 
  document.getElementById("information").style.display = "none";//display = "none" oculta mi pantalla emergente
  const totalCards = cards.length;
  // for que muestra las cartas del tarot en la pantalla
  for (let i = 0; i < cards.length; i++) {//se inicia con el bucle for que reconoce todas las cartas del arreglo cards
    const cardDetails = document.createElement("div");//se crea un elemento div para mostrar los detalles de la carta
    cardDetails.classList.add("cardDetails")//se agrega una clase css carddetails al elemento div.
    const cardTitle = document.createElement("h4");//se crea un elemento h4 para mostrar el nombre de la carta y se establece su contenido con el nombre de la carta actual
    cardTitle.innerHTML = cards[i].name;
    cardDetails.appendChild(cardTitle);//se añade el elemnto cardtitle como hijo del elemento carddetails
    const containerCarta = document.createElement("div");//se crean dos elementos div adicionales llamados container carta y containerbuttons.
    const containerButtons = document.createElement("div");
    containerButtons.classList.add("containerButtons");//se agrega una clase a containerbuttons al elemento div
    const img = document.createElement("img");//crea un nuevo elemento img y lo almacena en la variable img. se usa para mostrar la imagen de la carta.

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
    img.style.width = "100%"

    containerCarta.classList.add("card");
    containerCarta.classList.add("w3-quarter");
    containerCarta.setAttribute("name", cards[i].name)

    containerButtons.appendChild(buttonLeft);
    containerButtons.appendChild(buttonRight);

    containerCarta.appendChild(img);
    containerCarta.appendChild(cardDetails);
    containerCarta.appendChild(containerButtons);

    principalDiv.id = "principalDiv";
    principalDiv.classList.add("w3-row-padding", "w3-padding-16", "w3-center")
    principalDiv.appendChild(containerCarta);
  }
  // append que manda todas las cartas al html
  document.getElementById("cards").appendChild(principalDiv);

  let cardsOrCard = "card";
  if (totalCards > 1) {
    cardsOrCard = "cards";
  }
  document.getElementById("totalCards").innerHTML = `Total: ${totalCards} ${cardsOrCard}`;
}

const searchInput = document.getElementById("searchInput");

const showErrors = document.getElementById("showErrors");
searchInput.addEventListener("keyup", (e) => {
  const searchResults = tarot.cards.filter((obj) => obj.name.toLowerCase().startsWith(e.target.value.toLowerCase().trim()));
  if (searchResults.length === 0) {
    showErrors.innerHTML;
  }
  showCards(searchResults);
})

span.onclick = function () {
  modal.style.display = "none";
}

//esta funcion se encarga de seleccionar una carta aleatoria del grupo de cartas que estan Tarot.cards
function getRandomCard() {
  const randomIndex = randomCard(tarot.cards)
  return tarot.cards[randomIndex]; 
}//math random genera un numero aleatorio del 0 y 1, math random por tarotcards.length te ada un numero decimal aleatorio entre 0 y la longitud de la lisya de cartas menos 1
//math.floor redondea ese numero decimal hacia abajo para obtener el indice de la lista de cartas
//tarot.cards randomIndex selecciona la carta al indice aleatorio y la devuelve

const randomCardButton = document.getElementById("btnRandomCard");//recibe el elemento del boton con el id BRC
randomCardButton.addEventListener("click", () => {//cuando se hace clic se ejecuta la funcion
  const randomCard = getRandomCard();//se llama para obtener la carta aleatoria
  showCards([randomCard]);//aqui los que se hace es llamar el contenido que quiero que se vea de la carta aleaotria
});



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
