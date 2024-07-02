// this file is another file of this project where I will be able to generate infinite number of colors  

const letters = ["a", "b", "c", "d", "e", "f", 1,2,3,4,5,6,7,8,9,0
]

// we have to create the hex number with this information.

const color = document.querySelector('.color-1')
const button = document.getElementById('btn')

button.addEventListener("click", ()=>{
        let hex = '#';
        
        for(let i=0;i<6;i++){
            hex +=letters[getRandomNumber()];
        }
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
})

const getRandomNumber = ()=>{
let randomNumber = Math.floor(Math.random()* letters.length)
console.log(randomNumber);
return randomNumber;
}



