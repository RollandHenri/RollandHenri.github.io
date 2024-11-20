/**** Variables *****/
const title = document.querySelector("h1");
const titleTxt = "Amandine HENRY";
const navbar = document.querySelector("nav");
const titleCarousel = document.querySelectorAll(".title_carousel");
const nbSlide = titleCarousel.length;
let count = 0;
// console.log(nbSlide);

/**** Variables Querry ****/

const navButton = document.querySelector(".nav_button");

/**** Animation H1 ****/

function titleWriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${word[index]}</span>`;
      titleWriter(titleTxt, index + 1);
    }, 100);
  }
}

/***** Animation Title *****/
setInterval(() => {
  titleCarousel[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  titleCarousel[count].classList.add("active");
}, 4000);

/***** Event Scroll *****/

let lastScroll = 0;
window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (document.body.clientWidth >= 721) {
    console.log("coucou");
    if (window.scrollY < lastScroll) {
      navbar.style.transform = "translateY(0px)";
    }
    if (window.scrollY > 150 && window.scrollY < lastScroll) {
      navbar.style.background = "grey";
    } else if (window.scrollY < 300) {
      navbar.style.transform = "translateY(0px)";
      navbar.style.background = "transparent";
    } else {
      navbar.style.transform = "translateY(-100px)";
    }
  }
  lastScroll = window.scrollY;
});

/**** Devise Querry ****/

navButton.addEventListener("click", () => {
  navbar.classList.toggle("nav_active");
});

/**** Run Function ****/

setTimeout(() => {
  titleWriter(titleTxt, 0);
}, 1000);
