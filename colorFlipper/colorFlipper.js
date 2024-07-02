const colors = ['#5DADE2','#48C9B0','#F1948A','#BB8FCE','#BB8FCE',
    '#F7DC6F']

const button = document.getElementById('btn');
const color = document.querySelector('.color-1');

button.addEventListener("click",
    ()=>{
        // here we use the random numbers to pick the random hex code.
        const randomNumber = Math.floor((Math.random() * colors.length))
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    }
)
