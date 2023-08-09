const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle");

let navVisible = false;

toggle.addEventListener("click", () => {
  if (navVisible && screen.width <= 1200) {
    nav.style.visibility = "hidden";
  } else {
    nav.style.visibility = "visible";
  }

  if (screen.width > 1200) {
    navVisible = true;
  } else {
    navVisible = !navVisible;
  }
});
