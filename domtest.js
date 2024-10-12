const clock = document.getElementById("clock");
setInterval(function (){
let progClock = new Date();
const newLocal = progClock.toLocaleTimeString();
clock.innerHTML= newLocal 
}
,1000);






