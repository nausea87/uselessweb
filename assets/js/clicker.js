const pressedButton =
document.getElementsByClassName("button-message")[0];
   pressedButton.addEventListener("click", function () {
      alert("Am I working?")
   }); //Getting a message on click (WORKING!)



// const getTroll =
// document.getElementsByClassName("button-troll")[0];
// getTroll.addEventListener("click", function() {
//    onclick('./images/greece.jpg');
// });

//----------COUNTER WORKING-------------------
let button = document.getElementById("clickme"),
  count = 0;
  
button.onclick = function() {
  
  count += 1;
  button.innerHTML = "Click me: " + count;
};






//-------CHANGE BACKGROUND--------------
function changeBackground() {
  document.body.style.background = 
  "#3f3f3f";
  
  
}

var x = document.getElementById("clickme");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}