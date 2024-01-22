let menuIcon = document.querySelector("#menuIcon");
let nav = document.querySelector("#nav");
let toggleMenu = document.querySelector("#toggleMenuBtn");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

toggleMenu.addEventListener("click", () => {
  let subMenu = document.querySelector(".subMenu");
  if (document.documentElement.clientWidth > 768) return;
  subMenu.classList.toggle("active");
  if (subMenu.classList.contains("active")) {
    subMenu.style.height = `${subMenu.scrollHeight + 10}px`;
  } else {
    subMenu.style.height = `0`;
  }
});
