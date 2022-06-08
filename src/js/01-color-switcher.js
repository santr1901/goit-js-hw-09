const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let startId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const start = () => {
  startId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
      startBtn.disabled = true;
      console.log(getRandomHexColor())
  }, 1000);
    
};

const stop = () => {
    clearInterval(startId);
    startBtn.disabled = false;
    console.log("Stop")
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop)