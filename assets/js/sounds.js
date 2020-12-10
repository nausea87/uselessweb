

// "dead" : {
//     url : "sounds/dead.wav"
//   },
//   "ping" : {
//     url : "sounds/ping.mp3",
//     volume : .5
//   }


function gun() {
    const audio = new Audio('/assets/gunfire.mp3');
    audio.play();
  }

  function bat() {
    const audio = new Audio('/assets/woodenbat.mp3');
    audio.play();
  }

  function planks() {
    const audio = new Audio('/assets/woodplanks.mp3');
    audio.play();
  }