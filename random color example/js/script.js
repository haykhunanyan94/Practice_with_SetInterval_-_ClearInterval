"use strict";

const box = document.querySelector("#box");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#pause");
let timerID;
const colors =["red","blue","orange","green","black","purple"];

function startGame(){
    timerID = setInterval(() =>{
       box.style.background = colors[Math.floor(Math.random() * 1 * colors.length)]; 
    },100);
}
startGame();

playBtn.addEventListener("click", () => {
    startGame();
    playBtn.setAttribute("disabled", "");    
});
stopBtn.addEventListener("click", () => {
   clearInterval(timerID);
   playBtn.removeAttribute("disabled")
});