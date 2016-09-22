var response = {
"Hi": "Hola!",
"Yo": "Whats up!",
"Hit me up with the code Dave!" : "I got you- Up,Up,Down,Down,Left,Right,A,B!"

}

function chatBotResponse(){
var question =  document.getElementById("input").value;
var answer = "Dave: " + response[question];

document.getElementById("chat-area").textContent = answer;

}
