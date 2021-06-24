var n1 = 0,  n2 = 1, next_num;  
var num;
var button;
var output;

window.onload=function(){
    button = document.getElementById('submit');
    output = document.getElementById('output');
    var som = document.getElementById("somsoort");
    var somsoort = som.options[som.selectedIndex].value;
    switch (somsoort) {
        case "Fibonacci":
            button.onclick=function(){
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
            } 
        break;

        case "Priem":
            button.onclick=function test_prime(n)
            {
            
              if (n===1)
              {
                return false;
              }
              else if(n === 2)
              {
                return true;
              }else
              {
                for(var x = 2; x < n; x++)
                {
                  if(n % x === 0)
                  {
                    return false;
                  }
                }
                return true;  
              }
            }
            
            console.log(test_prime(66));
        break;
    }
}
