// Impact Section Counter Animation
const ValueDisplays = document.querySelectorAll(".num");
const element = document.querySelector('.stat-section');

const startCounters = () => {
  ValueDisplays.forEach((ValueDisplay) => {
    const updateCount = () => {
      const StartValue = parseInt(ValueDisplay.textContent);
      const EndValue = parseInt(ValueDisplay.getAttribute("data-val"));
      const duration = Math.ceil(EndValue * 0.00125);
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

function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();
  
  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      console.log('In the viewport! :)');
      return true;
  } else {
      console.log('Not in the viewport. :(');
      return false;
  }
}

window.addEventListener('scroll', function (event) {
  if (isInViewport(element)) {
    startCounters();
  }
}, false);

// document.addEventListener('DOMContentLoaded', function() {
//   const articleContainers = document.querySelectorAll('.program-content');

//   articleContainers.forEach(function(container) {
//       container.addEventListener('mouseover', function() {
//           const preContent = this.querySelector('.pre-content');
//           preContent.style.transform = 'scale(1.2)';
//       });

//       container.addEventListener('mouseout', function() {
//         const preContent = this.querySelector('.pre-content');
//         preContent.style.transform = 'scale(1)';
//     });

//       container.addEventListener('mouseover', function() {
//           const postContent = this.querySelector('.post-content');
//           postContent.style.transform = 'scale(0.85)';
//       });
//   });
// });


// On the first scroll in this window, call the function to start the counters
// window.addEventListener('scroll', startCounters, {
//   once: true
// });

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
// window.addEventListener('scroll', startCounters, {
//   once: true
// });