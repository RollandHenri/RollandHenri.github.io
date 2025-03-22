/*--- Variables skills ----*/
const skillsLeft = document.querySelector(".skillsLeft");
const skillsMid = document.querySelector(".skillsMid");
const skillsRight = document.querySelector(".skillsRight");

/*----- Variables Folio -----*/
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

/*-------- Variables Folio Description --------*/

const description = document.querySelectorAll(".effect");

/*--------- Variable Nav Mobile -----------*/

const openMenu = document.querySelector(".menuMobile");
const menu = document.querySelector(".nav");
const menuClose = document.querySelector(".closeMobile");
const link = document.querySelectorAll("nav a");
const menuMobile = document.querySelector(".menuMobile");
const checkMenuWhite = document.getElementById("checkbox");

console.log(checkMenuWhite);

/*---------- Captcha ------------*/

document.querySelector(".captcha").addEventListener("click", (e) => {
  answer();
});

function answer() {
  let firstNumber = Math.floor(Math.random() * 10);
  let secondNumber = Math.ceil(Math.random() * 10);
  let somme = firstNumber + secondNumber;
  console.log(somme);
  let response = prompt(`${firstNumber} + ${secondNumber}`);
  console.log(response);
  if (response == somme) {
    window.location.href = "mailto:rolland.h.dev@gmail.com";
    return;
  } else {
    alert("Ce n'est pas la bonne réponse");
    return;
  }
}

/*--------- EventListener Nav Mobile -----------*/

openMenu.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  openMenu.style.transform = "translateX(-150px)";
});

checkMenuWhite.addEventListener("change", () => {
  if (checkMenuWhite.checked) {
    menuMobile.innerHTML = `<img src='/assets/icon/menu-white.webp' alt="logo menu">`;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        menuMobile.innerHTML = `
      <img src='/assets/icon/menu.webp' alt="logo menu" />
      `;
      } else {
        menuMobile.innerHTML = `<img src='/assets/icon/menu-white.webp' alt="logo menu">`;
      }
    });
  } else {
    menuMobile.innerHTML = `<img src='/assets/icon/menu.webp' alt="logo menu">`;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        menuMobile.innerHTML = `
        <img src='/assets/icon/menu-white.webp' alt="logo menu">
        `;
      } else {
        menuMobile.innerHTML = `
        <img src='/assets/icon/menu.webp' alt="logo menu">
        `;
      }
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && checkMenuWhite != checkMenuWhite.checked) {
    menuMobile.innerHTML = `
    <img src='/assets/icon/menu-white.webp' alt="logo menu">
    `;
  } else {
    menuMobile.innerHTML = `
    <img src='/assets/icon/menu.webp' alt="logo menu">
    `;
  }
});

menuClose.addEventListener("click", () => {
  nav.style.transform = "translateX(-65vw)";
  openMenu.style.transform = "translateX(0)";
});

link.forEach((links) => {
  links.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 650px)").matches) {
      nav.style.transform = "translateX(-65vw)";
      openMenu.style.transform = "translateX(0)";
    }
  });
});

/*--------- Observer Skills -----------*/

//**** Observer Left */

const observeLeft = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.4s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeLeft.observe(skillsLeft);

//**** Observer Mid */

const observeMid = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.6s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
      if (window.matchMedia("(max-width: 450px)").matches) {
        entry.target.style.transitionDelay = "0s";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeMid.observe(skillsMid);

//**** Observer Right */

const observeRight = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.9s";
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
      if (window.matchMedia("(max-width: 800px)").matches) {
        entry.target.style.transitionDelay = "0s";
      }
    }
  },
  {
    threshold: 0.2,
  }
);

observeRight.observe(skillsRight);

/*---------- Observe Folio -----------*/

//**** Observe Card */

const observeCard = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.3s";
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      } else if (window.matchMedia("(max-width: 770px)").matches) {
        entry.target.transitionDelay = "0";
      }
    }
  },
  {
    threshold: 0.4,
  }
);

observeCard.observe(card1);
observeCard.observe(card2);
observeCard.observe(card3);

/*----- Observer Opacity ------*/

const opacity = new IntersectionObserver(
  (enter) => {
    for (const entry of enter) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = "0.4s";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.4,
  }
);

description.forEach((enter) => {
  opacity.observe(enter);
});

/*------ Scroll Logo ------*/

const scrollIcon = document.querySelector(".scrollIcon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollIcon.style.opacity = "0";
    scrollIcon.style.transition = "0.7s ease-in-out";
  } else {
    scrollIcon.style.opacity = "1";
    scrollIcon.style.transition = "0.7s ease-in-out";
  }
});
