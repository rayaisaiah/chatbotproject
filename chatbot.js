
var multimemes = [//"<img src='http://i2.mirror.co.uk/incoming/article8075004.ece/ALTERNATES/s615b/Harambe.jpg' height='42' width='42'>",
"<img src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/catffaceheader.jpg' height='42' width='42'>"];

var multianswers = ["Dave: I dont feel like answering that now...", "Not now!","Blah!"];
var response = {
"hi": "Hola! (Hi)",
"hello": "Hola! (Hi)",
"yo": "Whats up?",
"whats up": "The sky",
"hit me up with the code dave" : "I got you - Up,Up,Down,Down,Left,Right,Left,Right,B,A!",
"how old are you" : "I was created at the beggining of time.",
"what is your name" : "I am DAVE the chatbot!",
"why are you stupid" : "Why were you born? ** Dave the SavageBot! **",
"what time is it" : "The time is " + returnTime() + ".",
"whats today" : "n",
"" : "...",
"yooo" : multianswers[Math.floor((Math.random() * multianswers.length))],
"picture" : "<img src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/catffaceheader.jpg' height='42' width='42'>",
"hit me up with a spicy meme" : multimemes[Math.floor((Math.random() * multianswers.length))]

}

function chatBotResponse(){
var question =  document.getElementById("input").value.toLowerCase();
question = question.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
var answer = response[question];


if (answer === null || answer === undefined){
  $('#chat-area').prepend("You: " + question + "</br>");
  $('#chat-area').prepend("<div style='color: yellow'>" + "Dave: I dont feel like answering that now..." + "</br>");

}
else {
  $('#chat-area').prepend("You: " + question + "</br>");
  $('#chat-area').prepend("<div style='color: yellow'>" + "Dave: " + answer + "</br>");

}
}
var questions = ["How are you", "Whats up", "Hows it going"];

function chatBotQuestion() {
var daveQuestion = questions;

$('#chat-area').prepend("<div style='color: yellow'>" + "Dave: " + questions[Math.floor((Math.random() * multianswers.length))] + "?" + "</br>");
}
var responseQ = {
"good" : "Awesome!",
"bad" : "Life has its ups and downs.",
"the sky" : "lol",
"nothing much" : "Nothing is something!",
"" : "...",
"great" : "Awesome!",
"hi" : "Hello again."
}

function chatBotQuestionResponse(){
var qResponse =  document.getElementById("input2").value.toLowerCase();
qResponse = qResponse.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
var daveResponse =  responseQ[qResponse];
if (daveResponse === null || daveResponse === undefined){
  $('#chat-area').prepend("You: " + qResponse + "</br>");
  $('#chat-area').prepend("<div style='color: yellow'>" + "Dave: " + "Error 404(I think)" + "</br>");

}
else {
  $('#chat-area').prepend("You: " + qResponse + "</br>");
  $('#chat-area').prepend("<div style='color: yellow'>" + "Dave: " + daveResponse + "</br>");

}
}

function returnTime() {
var d = new Date(Date.now());
var hours = d.getHours();
var minutes = d.getMinutes();
var n = hours + ":" + minutes;
return n;
}
$("#question-area").keydown(function(event){
    if(event.keyCode == 13){
        $("#talkButton").click();
    }
});
