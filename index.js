let tavakkalSon=document.querySelector(".tavakkalSon")
let oylanganSon=document.querySelector(".oylanganSon")
let btn=document.querySelector(".btn")
// console.log(btn);



let randomNumber=Math.trunc(Math.random()*10)+1;
tavakkalSon.value=randomNumber


function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor());




btn.addEventListener("click",()=>{
    if(tavakkalSon.value==oylanganSon.value){
        document.body.style.background="#0E614C"
    }
})


