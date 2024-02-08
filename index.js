let btn = document.querySelector(".btn");
let box=document.querySelector(".container")
let text=document.querySelector("#onn")
console.log(text);

btn.addEventListener("click", () => {
   
    box.classList.toggle("radius");
     btn.textContent="Light"
    })

    text.addEventListener("click",()=>{
        box.classList.toggle("radius")
        text.textContent="kubik"
    })

