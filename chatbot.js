var response = {
"hi": "Hola! (Hi)",
"hello": "Hola! (Hi)",
"yo": "Whats up?",
"whats up": "The sky",
"hit me up with the code Dave!" : "I got you - Up,Up,Down,Down,Left,Right,Left,Right,A,B!",
"how old are you" : "I was created at the begining of time.",
"what is your name" : "I am DAVE the chatbot!",
"why are you stupid" : "Why were you born? ** Dave the SavageBot! **",
"what time is it" : "The time is " + returnTime() + ".",
"whats today" : "n",
"" : "..."
var multianswers = ["Dave: I dont feel like answering that now...", "not now!"]
}

function chatBotResponse(){
var question =  document.getElementById("input").value.toLowerCase();
var answer = response[question];


if (answer === null || answer === undefined){
  $('#chat-area').prepend("randomNumberGenerator(1,50)" + "</br>");
    $('#chat-area').prepend("You: " + question + "." + "</br>");
}
else {
  $('#chat-area').prepend("Dave: " + answer + "</br>");
  $('#chat-area').prepend("You: " + question + "." + "</br>");
}
}
function returnTime() {
var d = new Date(Date.now());
var hours = d.getHours();
var minutes = d.getMinutes();
var n = hours + ":" + minutes;
return n;
}
$("#question-area").keyup(function(event){
    if(event.keyCode == 13){
        $("#talkButton").click();
    }
});
