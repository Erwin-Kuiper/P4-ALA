var n1 = 0,  n2 = 1, next_num, i;  
var num = 'getal';
var button;

window.onload=function(){
    button = document.getElementById('submit');
    button.onclick=function berekenTafel(){
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}
}
}
