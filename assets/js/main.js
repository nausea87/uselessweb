//Mouseover stuff for BG-change. TODO: Change back änna.
const pressedButton =
document.getElementsByClassName("bg-change")[0];
   pressedButton.addEventListener("mouseover", () => {
      document.body.style.background = 
    "#3f3f3f";
   });

//Some more hover stuff
const bigImg = (x) => {
    x.style.height = "300px";
    x.style.width = "300px";
  };
  const normalImg = (x) => {
    x.style.height = "150px";
    x.style.width = "150px";
  };

//Array
const soundArray = [
  '/assets/sounds/carrey.mp3',
  '/assets/sounds/shl.mp3',
  '/assets/sounds/ahole.mp3',
  '/assets/sounds/laugh.mp3',
  '/assets/sounds/balls.mp3',
  '/assets/sounds/loser.mp3',
];

//Click
document.querySelector('img').addEventListener("click", () => {
  const audio = new Audio(soundArray[Math.floor(Math.random() * soundArray.length)]);
  audio.volume = 0.2;
  audio.play();
});

//Key press
const annoyance = document.getElementById('body');
annoyance.addEventListener('keypress', () =>  {
  const audio = new Audio('/assets/sounds/carrey.mp3');
  audio.volume = 1;
  audio.play();
});

 //Counter stuff with sounds
  let button = document.getElementById("counter"),
  count = 0;
  button.addEventListener("click", () => {
  count += 1;
  button.innerHTML = "Click me: " + count;

  if(count == 10) {
    const audio = new Audio('/assets/sounds/laugh.mp3');
    audio.volume = 0.5;
    audio.play();   
  };
  if(count == 30) {
    const audio = new Audio('/assets/sounds/ahole.mp3');
    audio.volume = 0.5;
    audio.play();   
  };
  if(count == 50) {
    const audio = new Audio('/assets/sounds/shl.mp3');
    audio.volume = 0.5;
    audio.play();   
  };
  if(count == 70) {
    const audio = new Audio('/assets/sounds/loser.mp3');
    audio.volume = 0.5;
    audio.play();   
  };
  if(count == 90) {
    const audio = new Audio('/assets/sounds/balls.mp3');
    audio.volume = 0.5;
    audio.play();   
  };
 });

 // Couldn't fix vid in HTML without the errors.
const ladyCurry = () => {
    location.href = 
    "https://www.youtube.com/watch?v=x-KDhYjgMlY&ab_channel=Nippe";
};