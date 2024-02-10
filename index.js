let modal = document.querySelector(".modal");
let input = document.querySelector("#input");
const btn = document.querySelector(".btn");
let text = document.querySelector(".text");
const on = document.querySelector("#on");

const inp=document.querySelector("#inp")




btn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
});

on.addEventListener("click",()=>{
    text.textContent= input.value
    input.value=""
    modal.classList.toggle("hidden");
    
})



      




























// btn.addEventListener("click", () => {
   
//     })

//     text.addEventListener("click",()=>{
//         box.classList.toggle("radius")
//         text.textContent="kubik"
//     })

