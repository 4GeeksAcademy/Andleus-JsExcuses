/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["Mi perro ", "Mi gato ", "Mi hermano ", "Mi coche "];
  let action = ["se ha comido ", "ha meado ", "ha roto ", "ha arrollado "];
  let what = ["mis deberes ", "mi mochila "];
  let when = ["hoy por la mañana.", "ayer por la noche.", "ahora mismito."];

  let result = "";
  let rand = 0;
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        rand = Math.floor(Math.random() * who.length);
        result += who[rand];
        break;

      case 1:
        rand = Math.floor(Math.random() * action.length);
        result += action[rand];
        break;

      case 2:
        rand = Math.floor(Math.random() * what.length);
        result += what[rand];
        break;

      case 3:
        rand = Math.floor(Math.random() * when.length);
        result += when[rand];
        break;
    }
  }

  document.querySelector("#excuse").innerHTML = result;
};