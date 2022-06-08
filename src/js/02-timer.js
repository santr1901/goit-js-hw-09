
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTime = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('button[data-start]');

const date = {
    days: document.querySelector(".value[data-days]"),
    hours: document.querySelector(".value[data-hours]"),
    minutes: document.querySelector(".value[data-minutes]"),
    seconds: document.querySelector(".value[data-seconds]"),
};

let curentDate = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            window.alert("Please choose a date in the future")
            return;
        }
        startBtn.disabled = false;
        console.log(selectedDates[0]);
        curentDate = selectedDates[0];
        
  },
};
        


flatpickr(dateTime, options)
startBtn.addEventListener("click", startTimer)

function startTimer()  {
    const intervalID = setInterval(() => {   
        const timeDefference = convertMs(curentDate - new Date());
        if (timeDefference.seconds <= -1) {
            clearInterval(intervalID);
            return;
        }
        date.days.textContent = timeDefference.days;
        date.hours.textContent = addLeadingZero(timeDefference.hours);
        date.minutes.textContent = addLeadingZero(timeDefference.minutes);
        date.seconds.textContent = addLeadingZero(timeDefference.seconds);
        
    }, 1000);
    
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
    
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




