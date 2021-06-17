var tafelgetal;
var max;
var teller = 1;
var button;

window.onload=function(){
button = document.getElementById('submit');
    button.onclick=function berekenTafel(){
        document.getElementById('output').innerHTML = '';
                    tafelgetal = document.getElementById('tafelgetal').value;
                    max = document.getElementById('max').value;
                    teller = 1;
                    while(teller <= max){
                        document.getElementById('output').innerHTML += teller + '*' + tafelgetal + '=' + teller*tafelgetal + '<br>';
                        teller++;
                    }
    }
    
}