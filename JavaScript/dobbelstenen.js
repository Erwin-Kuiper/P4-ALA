var dice;
var nummers;
var rollDice;

var randNummer;

var arrayDice = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg']

var arrayNummers = [];

var diceInterval;
var intervalAmound = 10;
var count = 0;

window.onload = function(){
    dice = document.getElementById("dice");
    nummers = document.getElementById("nummers");
    rollDice = document.getElementById("rollDice");
    dice.style.backgroundImage = "url(images/six.jpg)";
    
    rollDice.onclick = function(){
        diceInterval = setInterval(showDice, 50);
        
    }
}

function showDice(){
    randNummer = Math.floor(Math.random()*6);
    dice.style.backgroundImage = "url(images/" + arrayDice[randNummer] + ")";
    count++;
    if(count == intervalAmound){
        count = 0;
        clearInterval(diceInterval);
        setNummers();
        showNummers();
    }
}

function setNummers(){
    arrayNummers[4] = arrayNummers[3];
    arrayNummers[3] = arrayNummers[2];
    arrayNummers[2] = arrayNummers[1];
    arrayNummers[1] = arrayNummers[0];
    arrayNummers[0] = randNummer + 1;
}

function showNummers(){
    nummers.innerHTML = "";
    for(var index = 0; index < 5; index ++){
        
        nummers.innerHTML += "<br>" + arrayNummers[index]
    }
}

