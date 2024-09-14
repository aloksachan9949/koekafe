let element = document.getElementById("breads");
let closeElement1 = document.getElementById("closedialog1");
let element2 = document.getElementById("cheeses");
let closeElement2 = document.getElementById("closedialog2");

element.addEventListener("click", () => {
  let displayElement = document.getElementById("breadDisplay");
  //   displayElement.style.height = "unset";
  displayElement.classList.remove("hide");
  displayElement.classList.add("show");
  setTimeout(function () {
    displayElement.style.display = "flex";
  }, 500);
});

closeElement1.addEventListener("click", () => {
  let displayElement = document.getElementById("breadDisplay");
  displayElement.classList.remove("show");
  displayElement.classList.add("hide");

  setTimeout(function () {
    displayElement.style.display = "none";
  }, 700);
});

element2.addEventListener("click", () => {
  let displayElement = document.getElementById("cheeseDisplay");
  //   displayElement.style.height = "unset";
  displayElement.classList.remove("hide");
  displayElement.classList.add("show");
  setTimeout(function () {
    displayElement.style.display = "flex";
  }, 500);
});

closeElement2.addEventListener("click", () => {
  let displayElement = document.getElementById("cheeseDisplay");
  displayElement.classList.remove("show");
  displayElement.classList.add("hide");

  setTimeout(function () {
    displayElement.style.display = "none";
  }, 700);
});
