const button = document.querySelector("button");
const nav = document.querySelector("nav");

button.addEventListener("click", function (e) {
  const buttonId = e.target.id;
  if (buttonId === "hamburger") {
    nav.classList.toggle("active");
  }
});
