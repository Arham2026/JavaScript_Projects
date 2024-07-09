const reviews = [
    {
        id:1,
        name:'suresh',
        job:'web Designer',
        img : "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        About : 'Hi I am suresh and My friend is Ramesh I am here to waste your time so if you are interested in wasting your time please continue reading'

    },

    {
        id:2,
        name:'Ramesh',
        job:'web Developer',
        img : "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        About : 'Hi I am Ramesh and My friend is suresh I am here to waste your time so if you are interested in wasting your time please continue reading'

    },

    {
        id: 3,
        name:'preethi',
        job:'web Developer',
        img : "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        About : 'Hi I am Ramesh and My friend is suresh I am here to waste your time so if you are interested in wasting your time please continue reading'

    },

]

// Getting the elements from the document

const author = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');
const profile = document.querySelector('#person-image');


const prevbutton = document.getElementById('prev-button');
const nxtbutton = document.getElementById('next-button');
const randombutton = document.getElementById('random-button');


let currentContent = 0;

// functionalities
window.addEventListener("DOMContentLoaded",()=>{
    showItem();
})

function showItem(){
    const item = reviews[currentContent];
    profile.src = item.img;
    info.textContent = item.About;
    job.textContent = item.job;
    author.textContent = item.name;
}

// Functionality for the next button.
nxtbutton.addEventListener("click",()=>{
    currentContent++;
    if(currentContent > reviews.length - 1){
        currentContent = 0;
    }
    showItem();
})

prevbutton.addEventListener("click",()=>{
    currentContent--;
    if(currentContent < 0){
        currentContent = reviews.length-1;
    }
    showItem();
})

// generating the random member out of the array
randombutton.addEventListener("click",()=>{
    const randomnumber = Math.floor(Math.random()*reviews.length)
    currentContent = randomnumber;
    showItem()
})
