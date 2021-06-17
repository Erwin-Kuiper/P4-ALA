var inputgetal;
var max;
var teller = 1;
var button;

window.onload=function(){
button = document.getElementById('submit');



    button.onclick=function bereken(){
        var som = document.getElementById("soort_som");
        var somsoort = som.options[som.selectedIndex].value;
        document.getElementById('output').innerHTML = '';
        switch (somsoort){
                case "tafels":
            
                        inputgetal = document.getElementById('inputgetal').value;
                        max = document.getElementById('max').value;
                        teller = 1;
                        while(teller <= max){
                            document.getElementById('output').innerHTML +=  teller + '*' + inputgetal + '=' + teller*inputgetal + '<br>';
                            teller++;
                        }
                    break;

                case "machten":

                        inputgetal = document.getElementById('inputgetal').value;
                        teller = 1;
                        while(teller <= 15){
                            document.getElementById('output').innerHTML += '<p>' + inputgetal + '<sup>' + teller + '</sup> =' + Math.pow(inputgetal, teller); + '</p><br>';
                            teller++;
                        }
                    break;


                }
    }
    
}