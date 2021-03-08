const toggle = document.getElementById("m-nav-toggle");
const nav = document.getElementById("m-nav");
nav.style.display = "none";
toggle.style.bottom = "30px";

toggle.addEventListener("click", () => {
  console.log("hi");
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    toggle.style.bottom = "55vw";
  } else {
    nav.style.display = "none";
    toggle.style.bottom = "30px";
  }
});
