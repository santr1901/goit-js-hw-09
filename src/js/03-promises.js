import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const inputDelay = document.querySelector("input[name=delay]");
const inputStep = document.querySelector("input[name=step]");
const inputAmount = document.querySelector("input[name=amount]");

form.addEventListener("submit", submit);


function submit(event) {
  event.preventDefault();
  setTimeout(() => {
    for (let i = 1; i <= inputAmount.value; i++) {
      const position = i;
      let step = Number(inputDelay.value) + Number(inputStep.value) * position;
      createPromise(position, step)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }

  }, inputDelay.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    
  });
  return promise;
}