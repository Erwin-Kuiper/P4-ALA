var n1 = 0,  n2 = 1, next_num;  
var num;
var button;
var output;
var getal;
window.onload=function(){
    button = document.getElementById('submit');
    output = document.getElementById('output');
    var som = document.getElementById("somsoort");
    var somsoort = som.options[som.selectedIndex].value;
    button.onclick = function(){
        somsoort = som.options[som.selectedIndex].value;
        switch (somsoort) {
            case "Fibonacci":
                    num = document.getElementById('getal');
                    n1 = 0;
                    next_num = 0;
                    n2 = 1;
                    output.innerHTML = '';
                for ( var i = 1; i <= num.value; i++) {
                    output.innerHTML += (" <br> " +  n1); 
                    next_num = n1 + n2; 
    
                    n1 = n2;  
                    n2 = next_num;
                    }
            break;
    
            case "Priem":
                    getal = document.getElementById('getal').value;
                    output.innerHTML = "";
                
                for (var i = 2; i <= getal; i++) {
                    var flag = 0;
                
                    for (var j = 2; j < i; j++) {
                        if (i % j == 0) {
                            flag = 1;
                            break;
                        }
                    }
                
                
                    if (i > 1 && flag == 0) {
                        output.innerHTML += i + '<br>';
                    }
                }
            break;
        }
    }
    console.log(somsoort);
    // console.log(somsoort);
    
}
