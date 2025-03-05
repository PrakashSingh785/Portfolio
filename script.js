let btn = document.querySelector(".ham");
let nav = document.querySelector(".nav");
let btn2 = document.querySelector(".close-list");
let links = document.querySelectorAll("#link");

btn.addEventListener("click", () => {
  nav.style.display = "flex";

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      nav.style.display = "none";
    });
  }
});

btn2.addEventListener("click", () => {
  nav.style.display = "none";
});