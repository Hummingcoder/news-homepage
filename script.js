const toggle_btn = document.querySelector(".toggle_btn");
const navbar = document.querySelector(".navbar");

toggle_btn.addEventListener("click", () => {
  toggle_btn.classList.toggle("show");
  if (toggle_btn.classList.contains("show")) {
    toggle_btn.querySelector("img").src = "assets/images/icon-menu-close.svg";
    navbar.classList.add("show");
  } else {
    toggle_btn.querySelector("img").src = "assets/images/icon-menu.svg";
    navbar.classList.remove("show");
  }
});
