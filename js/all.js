const light_dark = document.querySelector(".light-dark");
const cog = document.querySelector(".menu-bt6");
menu1.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  box_menu.classList.add("selecter");
  light_dark.classList.remove("ld");
});
menu2.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  light_dark.classList.remove("ld");
  box_menu.classList.remove("selecter");
});
cog.addEventListener("click", function event() {
  event.preventDefault;
  console.log("click");
  light_dark.classList.toggle("ld");
});

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const body = document.querySelector("body");

light.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  light.classList.remove("light1");
  dark.classList.remove("dark1");
  body.classList.remove("body-dark");
});

dark.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  light.classList.add("light1");
  dark.classList.add("dark1");
  body.classList.add("body-dark");
});

const order = document.querySelector(".menu-bt7");
order.addEventListener("click", function event() {
  event.preventDefault();
  window.location.href = "/html/orders.html";
});
