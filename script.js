window.addEventListener("load", function(){

alpha.onmouseover = myFunction3;
function myFunction3() {
var x = document.getElementsByClassName("close");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "100";
} 
  }

alpha.onmouseleave = myFunction4;
function myFunction4() {
var x = document.getElementsByClassName("close");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
} 
  }



button.onmousedown = myFunction;
function myFunction() {
var x = document.getElementsByClassName("error");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
} 
  }

button.onmouseup = myFunction2;
function myFunction2() {
var x = document.getElementsByClassName("error");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "100";
} 
  }
  
});