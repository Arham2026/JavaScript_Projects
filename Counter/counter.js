const btn1 = document.getElementById('Decrease');
const btn2 = document.getElementById('Reset');
const btn3 = document.getElementById('Increase');
const display = document.getElementById('number');
let count = 0;
// to decrease a number or to inc we can introduce a variable in dom

btn1.addEventListener("click",()=>{
    count--;
    display.textContent =count;
})

btn2.addEventListener("click",()=>{
    count = 0;
    display.textContent =count;
})

btn3.addEventListener("click",()=>{
    count++;
    display.textContent =count;
})