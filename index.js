var randomNumber1= Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2= Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2)+1;

var str1= "images/dice"+randomNumber1+".png";

document.querySelector(".img-1").setAttribute("src",str1);

var str2= "images/dice"+randomNumber2+".png";

document.querySelector(".img-2").setAttribute("src",str2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

