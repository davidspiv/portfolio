const button = document.querySelector("button");
const nav = document.querySelector("nav");

const logo = document.querySelector("#logo");
const logoLayer1 = document.querySelectorAll(".logo-layer-1");
const logoLayer2 = document.querySelectorAll(".logo-layer-2");
const logoLayer3 = document.querySelectorAll(".logo-layer-3");
const logoLayer4 = document.querySelectorAll(".logo-layer-4");

const debounceLeading = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};

button.addEventListener("click", function (e) {
  const buttonId = e.target.id;
  if (buttonId === "hamburger") {
    nav.classList.toggle("active");
  }
});

logo.addEventListener(
  "mouseover",
  debounceLeading(function () {
    for (let logoEl of logoLayer1) {
      logoEl.classList.toggle("right");
    }
    for (let logoEl of logoLayer2) {
      logoEl.classList.toggle("left");
    }
    for (let logoEl of logoLayer3) {
      logoEl.classList.toggle("right");
    }
    for (let logoEl of logoLayer4) {
      logoEl.classList.toggle("left");
    }
  })
);
