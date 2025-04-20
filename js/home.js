const menu1 = document.querySelector(".list-menu1");
const box_menu = document.querySelector(".box-menu");
const menu2 = document.querySelector(".list-menu2");
menu1.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  box_menu.classList.add("selecter");
});
menu2.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  box_menu.classList.remove("selecter");
});

let list = document.querySelector(".slide-contaier");
let item = document.querySelectorAll(".slide-contaier .item");
let dot = document.querySelectorAll(".dot li");
let next = document.querySelector(".next");
let back = document.querySelector(".back");

let active = 0;
let lengthitem = item.length;
let refresh = setInterval(autoSlide, 4000);

function autoSlide() {
  active = (active + 1) % lengthitem;
  reloadSlide();
}

next.onclick = function () {
  active = (active + 1) % lengthitem;
  reloadSlide();
  resetInterval();
};

back.onclick = function () {
  active = (active - 1 + lengthitem) % lengthitem;
  reloadSlide();
  resetInterval();
};

function reloadSlide() {
  let moveX = -active * item[0].offsetWidth;
  list.style.transform = `translateX(${moveX}px)`;

  document.querySelector(".dot li.active").classList.remove("active");
  dot[active].classList.add("active");
}

function resetInterval() {
  clearInterval(refresh);
  refresh = setInterval(autoSlide, 4000);
}

dot.forEach((li, index) => {
  li.addEventListener("click", function () {
    active = index;
    reloadSlide();
    resetInterval();
  });
});

let scrollContainers = document.querySelectorAll(".scroll-container");
let productsPerPage = 3;

scrollContainers.forEach((container) => {
  let scrollContent = container.querySelector(".scroll-content");
  let items = container.querySelectorAll(".container-rog");
  let prevButton = container.querySelector(".control-sp1");
  let nextButton = container.querySelector(".control-sp2");
  let index = 0;

  function updateVisibility() {
    items.forEach((item, i) => {
      if (i >= index && i < index + productsPerPage) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  }

  nextButton.addEventListener("click", () => {
    if (index + productsPerPage < items.length) {
      index++;
      updateVisibility();
    }
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateVisibility();
    }
  });

  updateVisibility();
});

const register_login = document.querySelector(".menu-bt3");
register_login.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/index.html";
});

const cart = document.querySelector(".menu-bt2");
cart.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/cart.html";
});

const home = document.querySelector(".menu-bt5");
home.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/home.html";
});

const profile = document.querySelector(".menu-bt1");
profile.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/profile.html";
});

const rtx5090 = document.querySelector(".information-buy-1");
rtx5090.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/rtx5090.html";
});
const rtx5080 = document.querySelector(".information-buy-2");
rtx5080.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/rtx5080.html";
});
const rtx5090SL = document.querySelector(".information-rog-1");
rtx5090SL.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/rtx5090SL.html";
});
const rtx5090VG = document.querySelector(".information-rog-2");
rtx5090VG.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/rtx5090vanguard.html";
});
const rtx5080VG = document.querySelector(".information-rog-3");
rtx5080VG.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  window.location.href = "/html/rtx5080vanguard.html";
});
