import Notiflix from 'notiflix';
const formEl = document.querySelector('form');
const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const btnEl = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault()
  
  const step = inputStep.value
  const amount = inputAmount.value
  let delay = inputDelay.value

  
  
  for (let i = 0; i < amount; i += 1) {
    const currentDelay  =  delay + step * i
    const position = i + 1
    
    
    createPromise(position, currentDelay).then(({position, delay}) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
    
  }
 

  
}  

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
  setTimeout(() => {
    
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    
  });
}

