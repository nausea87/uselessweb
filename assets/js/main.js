const pressedButton =
document.getElementsByClassName("button-message")[0];
   pressedButton.addEventListener("click", () => {
      alert("Am I working?")
   });

const keyPress = () =>  {
    // alert("You pressed a key...cool yo");
    const audio = new Audio('/assets/carrey.mp3');
    audio.play();
  
  }


let button = document.getElementById("clickme"),
count = 0;
  button.onclick = () => {
  count += 1;
  button.innerHTML = "Click me: " + count;

  if(count == 5) {
    const audio = new Audio('/assets/gunfire.mp3');
    audio.play();   
  }
  
  if(count == 10) {
    const audio = new Audio('/assets/woodenbat.mp3');
    audio.play();   
  }
  
  if(count == 15) {
    const audio = new Audio('/assets/woodplanks.mp3');
    audio.play();   
  }
  
  if(count == 15) {
    const audio = new Audio('/assets/paper.mp3');
    audio.play();   
  }

  if(count == 15) {
    const audio = new Audio('/assets/rattle.mp3');
    audio.play();   
  }

  if(count == 15) {
    const audio = new Audio('/assets/slapping.mp3');
    audio.play();   
  }

  if(count == 15) {
    const audio = new Audio('/assets/drill.mp3');
    audio.play();   
  }

  if(count == 15) {
    const audio = new Audio('/assets/buzz.mp3');
    audio.play();   
  }


};

changeBackground = () => {
    document.body.style.background = 
    "#3f3f3f"
};

// const mouseOver = document.getElementById("body");
// mouseOver.addEventListener("mouseover", mouseOverFunc);
// mouseOver.addEventListener("click", mouseClickFunc);
// mouseOver.addEventListener("mouseout", mouseOutOf);

// function mouseOverFunc() {
//   document.getElementById("demo").innerHTML += 
//   "01001101001011010010<br>";
// }
// function mouseClickFunc() {
//   document.getElementById("demo").innerHTML += 
//   "00100011100101101101<br>";
// }
// function mouseOutOf() {
//   document.getElementById("demo").innerHTML += 
//   "10100110010100100011<br>";
// }

// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }

//FAVICON ERROR?
// function gun() {
//     const audio = new Audio('/assets/gunfire.mp3');
//     audio.play();    
//   }
// function bat() {
//     const audio = new Audio('/assets/woodenbat.mp3');
//     audio.play();
//   }
// function planks() {
//     const audio = new Audio('/assets/woodplanks.mp3');
//     audio.play();
//   }

  