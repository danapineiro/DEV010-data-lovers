import tarot from './data/tarot/tarot.json' assert {type: 'json'};

const principalDiv = document.createElement("div");

for (let i = 0; i < tarot.cards.length; i ++){

  const containerCarta = document.createElement("div");

  const containerButtons = document.createElement("div");

  const img = document.createElement("img");

  const buttonLeft = document.createElement("button");

  buttonLeft.innerText = "Izquierdo";

  const buttonRight = document.createElement("button");

  img.style.borderRadius = "15px";

  containerCarta.style.margin = "10px";

  buttonRight.innerText = "Derecho";

  containerButtons.style.display = "flex";

  containerButtons.style.justifyContent = "space-between"

  img.src = tarot.cards[i].img;

  containerCarta.style.display = "inline-block";

  img.style.maxHeight = "250px";

  img.style.width = "auto";

  containerCarta.classList.add("card");

  containerButtons.appendChild(buttonLeft);
  containerButtons.appendChild(buttonRight);

  containerCarta.appendChild(img);
  containerCarta.appendChild(containerButtons);

  principalDiv.appendChild(containerCarta);
}
document.getElementById("cards").appendChild(principalDiv);

