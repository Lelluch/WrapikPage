export function navigation() {
  let navLinks = document.querySelectorAll(".nav-links");
  let footerLinks = document.querySelectorAll(".lastSection-mainLinks>.lastSection-list>.lastSection-list-item");
  let url = [
    "index.html",
    "aboutUs.html",
    "pricing.html",
    "contactUs.html",
    "pricing.html",
  ];
  // console.log(footerLinks);
  
  // console.log(navLinks);

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
}
