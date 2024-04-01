function init() {
  const buttons = document.querySelectorAll("button");
  const navUl = document.querySelector("nav ul");

  for (let button of buttons) {
    button.addEventListener("click", onClick());
  }

  function onClick(e) {
    const button = e.target.id;
    if (button === "hamburger") {
      console.log("hamburger working");
    }
  }
  console.log("init test");
}

init();
