export function foto() {
  //   variables
  const foto = document.querySelector(".thirdSection-rightSide-foto");
  const blockOne = document.querySelector(".thirdSection-rightSide-leftArrow");
  const blockTwo = document.querySelector(".thirdSection-rightSide-rightArrow");
  let arrowImage = ["images/girl.png", "images/cat.jpg"];
  let counter = 0;
  // events
  foto.addEventListener("mouseover", arrow);
  foto.addEventListener("mouseout", hidden);
  blockOne.addEventListener("mouseover", arrow);
  blockOne.addEventListener("mouseout", hidden);
  blockTwo.addEventListener("mouseover", arrow);
  blockTwo.addEventListener("mouseout", hidden);
  blockOne.addEventListener("click", left);
  blockTwo.addEventListener("click", right);
  // functions
  function arrow() {
    foto.style.transform = "scale(120%)";
    blockOne.style.visibility = "visible";
    blockTwo.style.visibility = "visible";
  }
  function hidden() {
    foto.style.transform = "scale(100%)";
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
