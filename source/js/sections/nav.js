export function navigation() {
  let navLinks = document.querySelectorAll(".nav-links");
  let homeLink = document.querySelector(".header-home-link");
  let footerLinks = document.querySelectorAll(
    ".lastSection-mainLinks>.lastSection-list>.lastSection-list-item"
  );
  let hiddenMenuLinks = document.querySelectorAll(".menu-block-list-item-link");
  let menuBtn = document.querySelector(".header-hidden-block-menu");
  let menuBlock = document.querySelector(".header-hidden-block");
  let hiddenMenuBtn = document.querySelector(".hidden-block-btn");
  let hiddenBlock = document.querySelector(".bg-menu");
  let learnMoreBtn =document.getElementById("learnMore");
  let url = [
    "index.html",
    "aboutUs.html",
    "pricing.html",
    "contactUs.html",
    "pricing.html",
  ];
  // console.log(homeLink);
  // console.log(hiddenMenuLinks);

  // console.log(hiddenMenuBtn);

  // console.log(navLinks);
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html";
  });
  if(learnMoreBtn){
    learnMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "aboutUs.html";
    });
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = url[i];
    });
  }
  for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = url[i];
    });
  }

  for (let i = 0; i < hiddenMenuLinks.length; i++) {
    hiddenMenuLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = url[i];
    });
  }

  menuBtn.addEventListener("click", visible);

  function visible(e) {
    e.preventDefault();
    menuBlock.classList.add("hidden");
    console.log(menuBlock.classList);
    hiddenBlock.style.visibility = "visible";
    menuBtn.removeEventListener("click", visible);
    hiddenMenuBtn.addEventListener("click", hidden);
  }

  function hidden(e) {
    e.preventDefault();
    hiddenBlock.style.visibility = "hidden";
    menuBlock.classList.remove("hidden");
    hiddenMenuBtn.removeEventListener("click", hidden);
    menuBtn.addEventListener("click", visible);
  }
}
