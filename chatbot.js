var response = {
"Hi": "Hola!",
"Yo": "Whats up!",
"Hit me up with the code Dave!" : "I got you- Up,Up,Down,Down,Left,Right,A,B!",
"How old are you?" : "I was created at the begining of time.",
"What is your name?" : "I am DAVE the chatbot!",
"What time is it?" : "My creator has not programmed that yet!",
"Whats today?" : "n"
}

function chatBotResponse(){
var question =  document.getElementById("input").value;
var answer = "Dave: " + response[question];

document.getElementById("chat-area").textContent = answer;

}

var d = new Date();
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getUTCDay()];
obj[n] = n;
