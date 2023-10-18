/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  newRandomExcuse();

};



function randomExcuse(who, action, what, when, randomNumber){
  let excuse = "";
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        randomNumber = Math.floor(Math.random() * who.length);
        excuse += who[randomNumber];
        break;

      case 1:
        randomNumber = Math.floor(Math.random() * action.length);
        excuse += action[randomNumber];
        break;

      case 2:
        randomNumber = Math.floor(Math.random() * what.length);
        excuse += what[randomNumber];
        break;

      case 3:
        randomNumber = Math.floor(Math.random() * when.length);
        excuse += when[randomNumber];
        break;
    }
  }
  return excuse  
}

function newRandomExcuse(){

  let who = ["Mi perro ", "Mi gato ", "Mi hermano ", "Mi coche "];
  let action = ["se ha comido ", "ha meado ", "ha roto ", "ha arrollado "];
  let what = ["mis deberes ", "mi mochila "];
  let when = ["hoy por la mañana.", "ayer por la noche.", "ahora mismito."];

  let result = "";
  let randomNumber = 0;


  result = randomExcuse(who, action, what, when, randomNumber);

  document.querySelector("#excuse").innerHTML = result;

}