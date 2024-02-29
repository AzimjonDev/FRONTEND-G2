let newGame = document.querySelector(".newGame");
let oylanganSon = document.querySelector(".oylanganSon");
let reset = document.querySelector(".reset");
let btnTekshirish = document.querySelector(".buttonBlack");
let hozirgiBall = document.querySelector(".ball");
let yuqoriBall = document.querySelector(".yuqoriBall");
let tahminQlish = document.querySelector(".taxminQilish");
let tahminSon = document.querySelector(".guess").value;
// console.log(tahminQlish);



const repeat=()=>{
  score--;
  hozirgiBall.textContent = score;

}
let rendomNumber = Math.trunc(Math.random() * 20) + 1;//20

let score = 20;
let highScore = 0;

console.log(rendomNumber);

btnTekshirish.addEventListener("click", () => {
  let tahminSon = Number(document.querySelector('.guess').value) ;
   if ( score>1) {
    if(!tahminSon){
      alert(" son kritilmadi")
    } else if(rendomNumber == tahminSon){
        if(score>highScore){
          highScore = score;
          yuqoriBall.textContent = score
        }
        document.body.style.backgroundColor = '#60b347';
        tahminQlish.textContent = "Taxmin son tog'ri";
        yuqoriBall.textContent = highScore;
        Number.textContent = rendomNumber;
        let tahminSon = document.querySelector(".guess").value=""
    }else if(tahminSon>20){
       alert("son 20 katta")
    }
   else if( tahminSon > rendomNumber){
    tahminQlish.textContent = "Taxmin qlingan soningiz katta";
    tahminSon.value = "";   
  repeat()
  }else if(tahminSon<rendomNumber){
    tahminQlish.textContent = "Taxmin qlingan soningiz kichkina"
    tahminSon= "";   
    repeat()
  }
  } else{
   score--;
  hozirgiBall.textContent = score;
  console.log('Bal tugadi');
  btnTekshirish.setAttribute('disabled', true);
  btnTekshirish.style.cursor = 'not-allowed';
  tahminQlish.textContent = '😒 Ball tugadi.';
  oylanganSon.textContent = rendomNumber;
  Number.value=""
  }
});

newGame.addEventListener("click",(e)=>{
   document.body.style.background="white";
   oylanganSon.textContent = "?"
   tahminQlish.textContent ="Taxmin qlish...";
   let tahminSon = document.querySelector(".guess").value;
   Number.textContent=rendomNumber
   yuqoriBall.textContent=score
   score=20
   hozirgiBall.textContent=score
   rendomNumber=Math.trunc(Math.random()*20)+1;
   console.log(rendomNumber);
   
  })


