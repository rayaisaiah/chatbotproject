
var multimemes = ["<img src='http://i2.mirror.co.uk/incoming/article8075004.ece/ALTERNATES/s615b/Harambe.jpg' height='42' width='42'>",
"<img src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/catffaceheader.jpg' height='42' width='42'>",
"<img src='https://i.imgflip.com/8h0c8.jpg' height='42' width='42'>"];
var multianswers = ["Dave: I dont feel like answering that now...", "not now!","blah!"];
var response = {
"hi": "Hola! (Hi)",
"hello": "Hola! (Hi)",
"yo": "Whats up?",
"whats up": "The sky",
"hit me up with the code dave!" : "I got you - Up,Up,Down,Down,Left,Right,Left,Right,B,A!",
"how old are you" : "I was created at the beggining of time.",
"what is your name" : "I am DAVE the chatbot!",
"why are you stupid" : "Why were you born? ** Dave the SavageBot! **",
"what time is it" : "The time is " + returnTime() + ".",
"whats today" : "n",
"" : "...",
"yooo" : multianswers[Math.floor((Math.random() * multianswers.length))],
"picture" : "<img src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/catffaceheader.jpg' height='42' width='42'>",
"hit me up with a spicy meme" : multimemes[Math.floor((Math.random() * multianswers.length))],
"play me some jams" : "not not m8... not now."
}

function chatBotResponse(){
var question =  document.getElementById("input").value.toLowerCase();
var answer = response[question];


if (answer === null || answer === undefined){
  $('#chat-area').prepend("Dave: I dont feel like answering that now..." + "</br>");
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
