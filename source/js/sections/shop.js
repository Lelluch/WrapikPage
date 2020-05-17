export function shop() {
  const buttons = document.querySelectorAll(".shopSection-blocks-block-btn");
  const list_basic = document.querySelectorAll(
    ".infoSection-blocks > .sections-list > .sections-list-item > .sections-list-item-text"
  );
  buttons[0].addEventListener("click", basic);
  buttons[1].addEventListener("click", plus);
  buttons[2].addEventListener("click", premium);

  function basic(e) {
    e.preventDefault();
    this.innerHTML = "checked";
    this.style.backgroundColor = "#6fb048";
    for (let i = 0; i < list_basic.length / 3; i++) {
      list_basic[i].style.color = "#6fb048";
    }
    this.removeEventListener("click", basic);
    this.addEventListener("click", resetBasic);
  }
  function plus(e) {
    e.preventDefault();
    this.innerHTML = "checked";
    this.style.backgroundColor = "#6fb048";
    for (let i = 0; i < (list_basic.length * 2) / 3; i++) {
      list_basic[i].style.color = "#6fb048";
    }
    this.removeEventListener("click", plus);
    this.addEventListener("click", resetPlus);
  }
  function premium(e) {
    e.preventDefault();
    this.innerHTML = "checked";
    this.style.backgroundColor = "#6fb048";
    for (let i = 0; i < list_basic.length; i++) {
      list_basic[i].style.color = "#6fb048";
    }
    this.removeEventListener("click", premium);
    this.addEventListener("click", resetPremium);
  }
  function resetBasic(e) {
    e.preventDefault();
    this.innerHTML = "select plan";
    this.style.backgroundColor = "#83a7a5";
    for (let i = 0; i < list_basic.length / 3; i++) {
      list_basic[i].style.color = "#83a7a5";
    }
    this.removeEventListener("click", resetBasic);
    this.addEventListener("click", basic);
  }
  function resetPlus(e) {
    e.preventDefault();
    this.innerHTML = "select plan";
    this.style.backgroundColor = "#83a7a5";
    for (let i = 0; i < (list_basic.length * 2) / 3; i++) {
      list_basic[i].style.color = "#83a7a5";
    }
    this.removeEventListener("click", resetPlus);
    this.addEventListener("click", basic);
  }
  function resetPremium(e) {
    e.preventDefault();
    this.innerHTML = "select plan";
    this.style.backgroundColor = "#83a7a5";
    for (let i = 0; i < list_basic.length; i++) {
      list_basic[i].style.color = "#83a7a5";
    }
    this.removeEventListener("click", resetPremium);
    buttons[0].addEventListener("click", basic);
    buttons[1].addEventListener("click", plus);
    buttons[2].addEventListener("click", premium);
  }
}