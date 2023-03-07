// Impact Section Counter Animation
const ValueDisplays = document.querySelectorAll(".num");

const startCounters = () => {
  ValueDisplays.forEach((ValueDisplay) => {
    const updateCount = () => {
      const StartValue = parseInt(ValueDisplay.textContent);
      const EndValue = parseInt(ValueDisplay.getAttribute("data-val"));
      const duration = Math.ceil(EndValue*0.008);
      if (StartValue < EndValue) {
        ValueDisplay.textContent = StartValue + duration;
        setTimeout(updateCount, 1);
      } else {
        ValueDisplay.textContent = EndValue;
      }
    };
    updateCount();
  });
}

// let ValueDisplays = document.querySelectorAll(".num");
// let interval = 0

// ValueDisplays.forEach((ValueDisplay) => {
//   let StartValue = 0;
//   let EndValue = parseInt(ValueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / EndValue);
//   let counter = setInterval(function(){
//       StartValue += 1;
//       ValueDisplay.textContent = StartValue;
//       if(StartValue == EndValue){
//         clearInterval(counter);
//       }
//   }, duration);
// });

// const counters = document.querySelectorAll(".count");
// const speed = 200;

// // The code to start the animation is now wrapped in a function
// const startCounters = () => {
//   counters.forEach((counter) => {
//     const updateCount = () => {
//       const target = parseInt(+counter.getAttribute("data-target"));
//       const count = parseInt(+counter.innerText);
//       const increment = Math.trunc(target / speed);
//       if (count < target) {
//         counter.innerText = count + increment;
//         setTimeout(updateCount, 1);
//       } else {
//         count.innerText = target;
//       }
//     };
//     updateCount();
//   });
// }

// On the first scroll in this window, call the function to start the counters
window.addEventListener('scroll', startCounters, {
  once: true
});