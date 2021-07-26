"use strict";

// 토글 관련
const toggleBtn = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");
const item = document.querySelector(".header__item");
const cursor = document.querySelector(".cursor");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menu.classList.toggle("active");
  }
});

addEventListener("load", (event) => {
  const cursorRect = cursor.getBoundingClientRect();
  const cursorHalfWidth = cursorRect.width / 2;
  const cursorHalfHeight = cursorRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    let X = event.clientX;
    let Y = event.clientY;
    cursor.style.transform = `translate(${X - cursorHalfWidth}px, ${
      Y - cursorHalfHeight
    }px)`;
  });
});

menu.addEventListener("mouseover", (event) => {
  cursor.classList.add("cursor--grow");
});

menu.addEventListener("mouseleave", (event) => {
  cursor.classList.remove("cursor--grow");
});

toggleBtn.addEventListener("mouseover", () => {
  cursor.classList.add("cursor--grow");
});

toggleBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor--grow");
});
