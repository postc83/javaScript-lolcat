var time = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime = 21;
var napTime = 15;
var lunchTime = 13;
var wakeUp = 6;
var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");


var updateClock = function(){

var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var catImg = document.getElementById("lolcat");
var timeEventJS = document.getElementById("timeEvent");

if (time == wakeUp){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  messageText = "Time to get up sleepy head";
} else if(time == partyTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText = "lets PARTY";
} else if(time == lunchTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  messageText = "MMM Lets eat";
} else if(time == napTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  messageText = "zzzzzzzzz";
} else if (time < noon) {
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  messageText = "Good morning!";
} else if (time > evening){
    messageText = "Good evening!";
} 
else{
    messageText = "Good afternoon!";
}

catImg.src = image;
timeEventJS.innerText = messageText;
showCurrentTime();
  
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

 	
updateClock(); 
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

var partyEvent = function(){
   if (isPartyTime === true) 
   {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "Party Over"
     partyButton.innerText = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
     partyButton.style.background = "#0A8DAB";
   }
   else
   {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "PARTY TIME!"
     partyButton.innerText = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
     partyButton.style.background = "#222";
   }
};

var wakeUpEvent = function(){
  wakeUp = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function(){
 lunchTime = lunchTimeSelector.value; 
};

var napTimeEvent = function(){
  napTime = napTimeSelector.value;
};

partyButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napTimeEvent);