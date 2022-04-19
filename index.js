let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cart.classList.remove("active");
};

let cart = document.querySelector(".cart-container");
let cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
  cart.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
};
