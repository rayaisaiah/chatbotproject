var response = {
"Hi": "Dave: Hola!",
"Yo": "Dave: Whats up!"
"Whats todays date?": 
}

function chatBotResponse(){
var question =  document.getElementById("input").value;
var answer = response[question];

document.getElementById("chat-area").textContent = answer;

}
