export function foto() {
  //   variables
  const foto = document.querySelector(".thirdSection-rightSide-foto");
  const fotoBlock = document.querySelector(".thirdSection-rightSide");
  const blockOne = document.querySelector(".thirdSection-rightSide-leftArrow");
  const blockTwo = document.querySelector(".thirdSection-rightSide-rightArrow");
  let arrowImage = ["images/girl.png", "images/cat.jpg"];
  let counter = 0;
  let timer;
  
  // events
  fotoBlock.addEventListener("mouseover",visible);
  fotoBlock.addEventListener("mouseout",hidden);
  blockOne.addEventListener("click", left);
  blockTwo.addEventListener("click", right);

  // functions
  timer=setInterval(right,5000);

  function visible() {
    clearInterval(timer);
    if (window.matchMedia("(max-width: 810px)").matches) {
      foto.style.transform = "scale(1.1)";
    } else {
      foto.style.transform = "scale(1.2)";
    }  
    blockOne.style.visibility = "visible";
    blockTwo.style.visibility = "visible";
  }
  function hidden() {
    timer=setInterval(right,5000);
    foto.style.transform = "scale(1)";
    blockOne.style.visibility = "hidden";
    blockTwo.style.visibility = "hidden";
  }
  function left() {
    counter--;
    if (counter < 0) {
      counter = arrowImage.length;
      foto.src = arrowImage[counter % arrowImage.length];
    }
    foto.src = arrowImage[counter % arrowImage.length];
  }
  function right() {
    counter++;
    foto.src = arrowImage[counter % arrowImage.length];
  }
}
