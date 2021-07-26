"use strict";

// 토글 관련
const toggleBtn = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");
const item = document.querySelector(".header__item");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menu.classList.toggle("active");
  }
});
