
function DigitalClock(){

 const Element = document.getElementById("block")

const Time = new Date();

const Hour = String(Time.getHours()).padStart(2, '0');
const Minute = String(Time.getMinutes()).padStart(2, '0');
const Seconds = String(Time.getSeconds()).padStart(2, '0');

const current = `${Hour} : ${Minute} : ${Seconds}`; 

Element.textContent = current;

}

DigitalClock();

setInterval(DigitalClock,1000);

