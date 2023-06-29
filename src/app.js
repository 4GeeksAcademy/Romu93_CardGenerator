/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let simbol = ["♦", "♥", "♠", "♣"];
  let valorCard = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  let random_simbol = simbol[Math.floor(Math.random() * 4)];
  let random_value = valorCard[Math.floor(Math.random() * 13)];

  let the_header = document.querySelector(".header");
  the_header.innerHTML = random_simbol;

  let the_foother = document.querySelector(".foother");
  the_foother.innerHTML = random_simbol;
  the_foother.style.transform = "scaleY(-1)";

  let value = document.querySelector(".body");
  value.innerHTML = random_value;

  if (random_simbol === "♥" || random_simbol === "♦") {
    the_header.classList.add("text-danger");
    the_foother.classList.add("text-danger");
  } else {
    the_header.classList.remove("text-danger");
    the_foother.classList.remove("text-danger");
  }
};

//Al ejecutar el boton con ID myButton se obtiene una nueva carta
let randomCard = document.querySelector("#myButton");
randomCard.addEventListener("click", function() {
  window.onload();
});

//funcion que hace cambiar la carta automaticamente cada 3 segundos
function timer() {
  window.onload();
  setTimeout(timer, 3000);
}
setTimeout(timer, 5000);

//Al dal valores en los inputs se ajustará el width y el heigth según estos
let buttonwidth = document.querySelector("#widthbutton");
buttonwidth.addEventListener("click", function() {
  let inputwidth = document.querySelector("#thewidth");
  let valuewhidth = inputwidth.value;
  let card = document.querySelector(".card");
  card.style.width = valuewhidth + "px";
});
let buttonheight = document.querySelector("#heightbutton");
buttonheight.addEventListener("click", function() {
  let inputheight = document.querySelector("#theheight");
  let valueheight = inputheight.value;
  let card = document.querySelector(".card");
  card.style.height = valueheight + "px";
});
