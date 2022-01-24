//Hamburger Menu

const menu = document.querySelector(".hamburger-menu");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  const closeIcon = document.querySelector(".close-icon");
  const menuIcon = document.querySelector(".menu-icon");
  const body = document.querySelector("body");

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    body.classList.remove("hideOverflow");
    closeIcon.classList.add("displayNone");
    menuIcon.classList.remove("displayNone");
  } else {
    menu.classList.add("showMenu");
    body.classList.add("hideOverflow");
    closeIcon.classList.remove("displayNone");
    menuIcon.classList.add("displayNone");
  }
}

hamburger.addEventListener("click", toggleMenu);

//

// Back To Top Button

const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

//Display Button on Scroll
function scrollFunction() {
  if (window.pageYOffset > 100) {
    backToTopBtn.style.animation = "fadeIn 1s";
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", backToTop);

//Move Page Back to Top
function backToTop() {
  window.scrollTo(0, 0);
}

//

//Page Fade In

window.addEventListener('load', pageFadeIn);

function pageFadeIn() {
  document.querySelector("body").style.animation = "fadeIn 1s";
}

//

//Shopping Cart Counter

const cartButton = document.querySelector(".cart-button");
let cartCounter = document.querySelector("#counter-circle");
let clicks = 0;

function addCount() {
  clicks++;
  alert("Item added to cart.");
  cartCounter.style.backgroundColor = "red";
  cartCounter.innerHTML = (clicks);
}