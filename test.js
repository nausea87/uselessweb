try {
    Object.defineProperty(screen, "availTop", { value: 0 });
  } catch (e) {}
  try {
    Object.defineProperty(screen, "availLeft", { value: 0 });
  } catch (e) {}
  try {
    Object.defineProperty(screen, "availWidth", { value: 971 });
  } catch (e) {}
  try {
    Object.defineProperty(screen, "availHeight", { value: 819 });
  } catch (e) {}
  try {
    Object.defineProperty(screen, "colorDepth", { value: 24 });
  } catch (e) {}
  try {
    Object.defineProperty(screen, "pixelDepth", { value: 24 });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "keyboard", { value: undefined });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "hardwareConcurrency", { value: 8 });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "deviceMemory", { value: 8 });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "webkitTemporaryStorage", {
      value: undefined,
    });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "webkitPersistentStorage", {
      value: undefined,
    });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "appVersion", {
      value:
        "5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
    });
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "doNotTrack", { value: null });
  } catch (e) {}

  navigator.getBattery = function getBattery() {
    let battery = {
      charging: true,
      chargingTime: 0,
      dischargingTime: null,
      level: 1,
    };

    try {
      Object.defineProperty(battery, "onchargingchange", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: undefined,
      });
    } catch (e) {}

    try {
      Object.defineProperty(battery, "onchargingtimechange", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: undefined,
      });
    } catch (e) {}

    try {
      Object.defineProperty(battery, "ondischargingtimechange", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: undefined,
      });
    } catch (e) {}

    try {
      Object.defineProperty(battery, "onlevelchange", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: undefined,
      });
    } catch (e) {}

    battery.addEventListener = function addEventListener() {
      return;
    };

    return Promise.resolve(battery);
  };

  try {
    window.screenY = 0;
  } catch (e) {}

  try {
    window.screenTop = 0;
  } catch (e) {}

  try {
    window.top.window.outerHeight = window.screen.height;
  } catch (e) {}

  try {
    window.screenX = 0;
  } catch (e) {}

  try {
    window.screenLeft = 0;
  } catch (e) {}

  try {
    window.top.window.outerWidth = window.screen.width;
  } catch (e) {}


  !(function () {
    let e = !1;
    function n() {
      if (!e) {
        const n = document.createElement("meta");
        (n.name = "dapp-detected"), document.head.appendChild(n), (e = !0);
      }
    }
    if (window.hasOwnProperty("ethereum")) {
      if (
        ((window.__disableDappDetectionInsertion = !0),
        void 0 === window.ethereum)
      )
        return;
      n();
    } else {
      var t = window.ethereum;
      Object.defineProperty(window, "ethereum", {
        configurable: !0,
        enumerable: !1,
        set: function (e) {
          window.__disableDappDetectionInsertion || n(), (t = e);
        },
        get: function () {
          if (!window.__disableDappDetectionInsertion) {
            const e = arguments.callee;
            (e &&
              e.caller &&
              e.caller.toString &&
              -1 !== e.caller.toString().indexOf("getOwnPropertyNames")) ||
              n();
          }
          return t;
        },
      });
    }
  })();


const videos = document.querySelectorAll("video");
      const playButton = document.querySelector(".play");
      const pauseButton = document.querySelector(".pause");

      playButton.addEventListener("click", (event) => {
        const delay = parseInt(document.querySelector("input").value);
        playButton.style.display = "none";
        setTimeout(() => {
          pauseButton.style.display = "inline";
        }, delay * videos.length);
        let delayerInMilliseconds = 0;
        videos.forEach((video) => {
          video.style.display = "block";
          setTimeout(() => video.play(), delayerInMilliseconds);
          delayerInMilliseconds += delay;
        });
      });

      document.querySelector(".pause").addEventListener("click", () => {
        playButton.style.display = "inline";
        pauseButton.style.display = "none";
        videos.forEach((video) => video.pause());
      });