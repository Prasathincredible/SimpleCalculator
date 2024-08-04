function multiplication() {
   num1= document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   document.getElementById("add").innerHTML=num1 * num2;
}
function division(){
   num1= document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   document.getElementById("add").innerHTML=num1 / num2;
}
function addition(){
   num1= document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   let a=num1+num2;
   document.getElementById("add").innerHTML=a;
}
function subtraction(){
   num1= document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   document.getElementById("add").innerHTML=num1-num2;
}
function modulo(){
   num1= document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
   document.getElementById("add").innerHTML=num1%num2;
}
