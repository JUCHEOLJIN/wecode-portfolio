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

// 커서 관련

addEventListener("load", (event) => {
  const cursorRect = cursor.getBoundingClientRect();
  const cursorHalfWidth = cursorRect.width / 2 + 12;
  const cursorHalfHeight = cursorRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    let X = event.clientX;
    let Y = event.clientY;
    cursor.style.transform = `translate(${X - cursorHalfWidth}px, ${
      Y - cursorHalfHeight
    }px)`;
  });

  document.addEventListener("mouseleave", (event) => {
    cursor.style.visibility = "hidden";
  });

  document.addEventListener("mouseover", (event) => {
    cursor.style.visibility = "visible";
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

// 스크롤 관련

const introName = document.querySelector(".introduction__name");
const introPosition = document.querySelector(".introduction__position");

document.addEventListener("scroll", () => {
  let moveLeft = -scrollY;
  let moveRight = scrollY;
  introName.style.transform = `translate(${moveLeft}px, -50%)`;
  introPosition.style.transform = `translateX(${moveRight}px)`;
});
