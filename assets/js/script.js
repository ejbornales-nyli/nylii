// Impact Section Counter Animation
let ValueDisplays = document.querySelectorAll(".num");
let interval = -5000

ValueDisplays.forEach((ValueDisplay) => {
  let StartValue = 0;
  let EndValue = parseInt(ValueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / EndValue);
  let counter = setInterval(function(){
      StartValue += 1;
      ValueDisplay.textContent = StartValue;
      if(StartValue == EndValue){
        clearInterval(counter);
      }
  }, duration);
}); 