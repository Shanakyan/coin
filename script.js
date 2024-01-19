
let coinImg = document.querySelector(".coinimg");
let coin = document.querySelector(".coin");
let counter = document.querySelector("#counter");
let counterEagle = document.querySelector("#counterEagle");
let counterTails = document.querySelector("#counterTails");
let gameCounter = 0;
let eagle = 0;
let tails  = 0;

let checkCoin = () =>{
    let randomCoin = Math.floor(Math.random()*2);
    ++gameCounter;
    counter.textContent = `${gameCounter}`;
    // coinImg.style.animation = "coinAnim";
    if(randomCoin==0 ){
        coinImg.src = './img/reshka.jpg';
        console.log(randomCoin);
        ++tails;
        counterTails.textContent = `${tails}`;
    }
    else
    {
      coinImg.src = './img/ariol.png' ; 
      console.log(randomCoin);
      ++eagle;
      counterEagle.textContent = `${eagle}`;
    }

}
coinImg.addEventListener("mouseover",checkCoin);

