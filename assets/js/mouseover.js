const mouseOver = document.getElementById("body");
mouseOver.addEventListener("mouseover", mouseOverFunc);
mouseOver.addEventListener("click", mouseClickFunc);
mouseOver.addEventListener("mouseout", mouseOutOf);

function mouseOverFunc() {
  document.getElementById("demo").innerHTML += "01001101001011010010<br>";
}

function mouseClickFunc() {
  document.getElementById("demo").innerHTML += "00100011100101101101<br>";
}

function mouseOutOf() {
  document.getElementById("demo").innerHTML += "10100110010100100011<br>";
}