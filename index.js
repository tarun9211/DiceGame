var randomNumber1 = Math.floor((Math.random()*10))%7;
if(randomNumber1 === 0){
    randomNumber1 = 1;
}
document.querySelectorAll("img")[0].setAttribute("src" , "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor((Math.random()*10))%7;
if(randomNumber2 === 0){
    randomNumber2 = 1;
}
document.querySelectorAll("img")[1].setAttribute("src" , "images/dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1Wins!!";
}
else{
    document.querySelector("h1").innerHTML = "Player2Wins!!";
}
