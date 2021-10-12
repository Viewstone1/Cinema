const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;

const menuBtn = document.querySelector(".header__m-menu");
const menu = document.querySelector(".header__nav_menu");

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});

menuBtn.addEventListener("click", () => {
  console.log("click");
  menu.classList.toggle("is-open");
});
