export function navigation() {
  let links = document.querySelectorAll(".nav-links");
  let url = [
    "index.html",
    "aboutUs.html",
    "pricing.html",
    "contactUs.html",
    "getStarted.html",
  ];
  console.log(links);

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = url[i];
    });
  }
}
