let VIDEO = null;
let CANVAS = null;
let CONTEXT = null;
let SCALER = 0.8;
let SIZE = { x: 0, y: 0, width: 0, height: 0 };
function main() {
  CANVAS = document.getElementById("myCanvas");
  CONTEXT = CANVAS.getContext("2d");
  CANVAS.width = window.innerWidth;
  CANVAS.height = window.innerHeight;

  let promise = navigator.mediaDevices.getUserMedia({ video: true });

  promise
    .then(function (signal) {
      VIDEO = document.createElement("video");
      VIDEO.srcObject = signal;
      VIDEO.play();

      VIDEO.onloadeddata = () => {
        let resizer =
          SCALER *
          Math.min(
            window.innerWidth / VIDEO.videoWidth,
            window.innerHeight / VIDEO.videoHeight
          );
        SIZE.width = resizer * VIDEO.videoWidth;
        SIZE.height = resizer * VIDEO.videoHidth;
        SIZE.x = window.innerWidth / 2 - SIZE.width / 2;
        SIZE.y = window.innerHeight / 2 - SIZE.height / 2;
        updateCanvas();
      };
    })
    .catch((err) => {
      alert("Camera errror: " + err);
    });
}
function updateCanvas() {
  CONTEXT.drawImage(VIDEO,0,0);
  window.requestAnimationFrame(updateCanvas);
}
