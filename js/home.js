// Menu toggle
const menu1 = document.querySelector(".list-menu1");
const box_menu = document.querySelector(".box-menu");
const menu2 = document.querySelector(".list-menu2");
menu1.addEventListener("click", function (event) {
  event.preventDefault();
  box_menu.classList.add("selecter");
});
menu2.addEventListener("click", function (event) {
  event.preventDefault();
  box_menu.classList.remove("selecter");
});

// Slide
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

// Scroll container
const scrollContainers = document.querySelectorAll(".scroll-container");

scrollContainers.forEach((container) => {
  const scrollContent = container.querySelector(".scroll-content");
  const items = container.querySelectorAll(".container-rog");
  const prevButton = container.querySelector(".control-sp1");
  const nextButton = container.querySelector(".control-sp2");
  let index = 0;
  let productsPerPage = getProductsPerPage();

  function getProductsPerPage() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1125) return 2;
    return 3;
  }

  function updateScroll() {
    const itemWidth = items[0].offsetWidth + 10; // Width + gap
    scrollContent.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  function updateButtons() {
    prevButton.disabled = index === 0;
    prevButton.style.opacity = index === 0 ? 0.5 : 1;
    nextButton.disabled = index >= items.length - productsPerPage;
    nextButton.style.opacity =
      index >= items.length - productsPerPage ? 0.5 : 1;
  }

  nextButton.addEventListener("click", () => {
    if (index < items.length - productsPerPage) {
      index++;
      updateScroll();
      updateButtons();
    }
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateScroll();
      updateButtons();
    }
  });

  window.addEventListener("resize", () => {
    const newProductsPerPage = getProductsPerPage();
    if (newProductsPerPage !== productsPerPage) {
      productsPerPage = newProductsPerPage;
      index = Math.min(index, items.length - productsPerPage);
      updateScroll();
      updateButtons();
    }
  });

  // Initial setup
  updateScroll();
  updateButtons();
});

// Navigation
const register_login = document.querySelector(".menu-bt3");
register_login.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/index.html";
});

const cart = document.querySelector(".menu-bt2");
cart.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/cart.html";
});

const home = document.querySelector(".menu-bt5");
home.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/home.html";
});

const profile = document.querySelector(".menu-bt1");
profile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/profile.html";
});

const rtx5090 = document.querySelector(".information-buy-1");
rtx5090.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5090.html";
});

const rtx5080 = document.querySelector(".information-buy-2");
rtx5080.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5080.html";
});

const rtx5090SL = document.querySelector(".information-rog-1");
rtx5090SL.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5090SL.html";
});

const rtx5090VG = document.querySelector(".information-rog-2");
rtx5090VG.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5090vanguard.html";
});

const rtx5080VG = document.querySelector(".information-rog-3");
rtx5080VG.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5080vanguard.html";
});

const rtx5070tiGTP = document.querySelector(".information-rog-4");
rtx5070tiGTP.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5070tiGTP.html";
});

const rtx5070GTP = document.querySelector(".information-rog-5");
rtx5070GTP.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5070GTP.html";
});

const rtx5090astral = document.querySelector(".information-rog-6");
rtx5090astral.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5090astral.html";
});

const rtx5080astral = document.querySelector(".information-rog-7");
rtx5080astral.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5080astral.html";
});

const rtx5070tirog = document.querySelector(".information-rog-8");
rtx5070tirog.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5070tirog.html";
});

const rtx5070rog = document.querySelector(".information-rog-9");
rtx5070rog.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/rtx5070rog.html";
});

const law1 = document.querySelector(".law-1");
law1.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/law1.html";
});

const law2 = document.querySelector(".law-2");
law2.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/html/law2.html";
});

const free = document.querySelector("#free");
const endown = document.querySelector(".endown");

function checkemailendown(input) {
  input.value = input.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.value.length === 0) {
    alert("Vui lòng nhập email!");
    return false;
  }
  if (!regexEmail.test(input.value)) {
    alert("Email không hợp lệ!");
    return false;
  }

  alert("Từ giờ các ưu đãi sẽ được gửi qua email của bạn!");
  return true;
}

endown.addEventListener("click", function (event) {
  event.preventDefault();
  checkemailendown(free);
});
