//Click stuff
const pressedButton =
document.getElementsByClassName("button-message")[0];
   pressedButton.addEventListener("click", () => {
      alert("Am I working?")
   });

//Hover stuff
  const bigImg = (x) => {
    x.style.height = "300px";
    x.style.width = "300px";
  }
  
  const normalImg = (x) => {
    x.style.height = "150px";
    x.style.width = "150px";
  }

//Array stuff
const soundArray = [
  '/assets/sounds/carrey.mp3',
  '/assets/sounds/shl.mp3',
  '/assets/sounds/ahole.mp3',
  '/assets/sounds/laugh.mp3',
  '/assets/sounds/balls.mp3',
  '/assets/sounds/loser.mp3',
];

//More clickety click stuff
document.querySelector('body').addEventListener("click",
() => {
  let audio = new Audio(soundArray[Math.floor(Math.random() * soundArray.length)]);
  audio.volume = 0.2;
  audio.play();
})

//Key press stufff
const annoyance = () =>  {
  const audio = new Audio('/assets/sounds/carrey.mp3');
  audio.volume = 0.4;
  audio.play();
  };

 //Counter stuff with sounds 
let button = document.getElementById("counter"),
count = 0;
  button.onclick = () => {
  count += 1;
  button.innerHTML = "Click me: " + count;

  if(count == 5) {
    const audio = new Audio('/assets/sounds/laugh.mp3');
    audio.play();   
  }
  if(count == 10) {
    const audio = new Audio('/assets/sounds/ahole.mp3');
    audio.play();   
  }
  if(count == 15) {
    const audio = new Audio('/assets/sounds/shl.mp3');
    audio.play();   
  }
  if(count == 20) {
    const audio = new Audio('/assets/sounds/loser.mp3');
    audio.play();   
  }
  if(count == 25) {
    const audio = new Audio('/assets/sounds/balls.mp3');
    audio.play();   
  }
 
};

const ladyCurry = () => {
    // document.body.style.background = 
    // "#3f3f3f"

    location.href = 
    "https://www.youtube.com/watch?v=x-KDhYjgMlY&ab_channel=Nippe";
};




// Hall of Shame stuff?


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

  