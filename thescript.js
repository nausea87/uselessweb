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

