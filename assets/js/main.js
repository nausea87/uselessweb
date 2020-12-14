//Click stuff for BG-change.
const pressedButton =
document.getElementsByClassName("bg-change")[0];
   pressedButton.addEventListener("click", () => {
      document.body.style.background = 
    "#3f3f3f";
   });

//Hover stuff
  const bigImg = (x) => {
    x.style.height = "300px";
    x.style.width = "300px";
  }
  const normalImg = (x) => {
    x.style.height = "150px";
    x.style.width = "150px";
  };

//Array stuff
const soundArray = [
  '/assets/sounds/carrey.mp3',
  '/assets/sounds/shl.mp3',
  '/assets/sounds/ahole.mp3',
  '/assets/sounds/laugh.mp3',
  '/assets/sounds/balls.mp3',
  '/assets/sounds/loser.mp3',
]

//More clickety click stuff
document.querySelector('img').addEventListener("click",
() => {
  let audio = new Audio(soundArray[Math.floor(Math.random() * soundArray.length)]);
  audio.volume = 0.2;
  audio.play();
})

//Key press stufff
const annoyance = () =>  {
  const audio = new Audio('/assets/sounds/carrey.mp3');
  audio.volume = 0.8;
  audio.play();
  }

 //Counter stuff with sounds 
let button = document.getElementById("counter"),
count = 0;
  button.onclick = () => {
  count += 1;
  button.innerHTML = "Click me: " + count;

  if(count == 10) {
    const audio = new Audio('/assets/sounds/laugh.mp3');
    audio.play();   
  }
  if(count == 30) {
    const audio = new Audio('/assets/sounds/ahole.mp3');
    audio.play();   
  }
  if(count == 50) {
    const audio = new Audio('/assets/sounds/shl.mp3');
    audio.play();   
  }
  if(count == 70) {
    const audio = new Audio('/assets/sounds/loser.mp3');
    audio.play();   
  }
  if(count == 90) {
    const audio = new Audio('/assets/sounds/balls.mp3');
    audio.play();   
  }
 }

const ladyCurry = () => {
    location.href = 
    "https://www.youtube.com/watch?v=x-KDhYjgMlY&ab_channel=Nippe";
}



// Hall of Shame stuff?

// function test() {
//   document.getElementById("video").innerHTML = "<div id='player'></div>";
//   const tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/iframe_api";
//   const firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//       height: '195',
//       width: '100%',
//       videoId: 'x-KDhYjgMlY',
//       events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//       }
//   });
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//      done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }


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

  