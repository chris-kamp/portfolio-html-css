const toggle = document.getElementById("m-nav-toggle");
const nav = document.getElementById("m-nav");

// ensure styles are set to initial values on page load
nav.style.display = "none";
nav.style.bottom = "-60vw";
nav.style.transform = "scale(0.1)";
toggle.style.bottom = "5vh";

toggle.addEventListener("click", () => {
  if (nav.style.display === "none") {
    nav.style.display = "flex";

    // forces re-draw to allow opacity transition (otherwise prevented by display: none)
    const height = nav.offsetHeight;
    nav.style.bottom = "5vw";
    nav.style.transform = "scale(1)";
    toggle.style.bottom = "58vw";
    toggle.style.right = "5vw";
  } else {
    nav.style.bottom = "-60vw";
    nav.style.transform = "scale(0.1)";
    toggle.style.bottom = "5vh";
    toggle.style.right = "10vw";

    // allow time for transitions to complete
    setTimeout(() => {
      nav.style.display = "none";
    }, 300);
  }
});
