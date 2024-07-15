// getting the element through DOM

const button = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

button.addEventListener("click", ()=>{
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
        
    }
    
})




