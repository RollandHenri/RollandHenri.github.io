const nav = document.querySelector("nav");
const footer = document.getElementById("footer");

/*------ Variable Carousel ------*/

/*--------- Variable Nav Mobile -----------*/

const openMenu = document.querySelector(".menuMobile");
const menu = document.querySelector(".nav");

const link = document.querySelectorAll("nav a");

/*------ Create HTML ------*/

nav.innerHTML = `
  <div class="closeMobile">
      <img src='/assets/icon/fermer.webp' alt="logo fermer">
  </div>

  <div class="logo"> </div>

  <ul>
    <li> <a href='/index.html'> Accueil </a> </li>
    <li> <a href='/index.html#skills'> Compétences </a> </li>
    <li> <a href="/index.html#folio"> Folio </a></li>
   <li class="captcha"> <span> Contact </span> </li>
   <div class="darkMode">
      <label class="switch" for="checkbox"> .
        <input type="checkbox" id="checkbox">
        <span class="slider round"></span>
      </label> 
    </div>
  </ul>
`;

footer.innerHTML = `
<div class='footerList'> 
  <ul>
    <li><h3>Réseaux</h3></li>
    <li><a class="folioLinkReseau" href='https://github.com/RollandHenri'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a class="folioLinkReseau" href='https://x.com/Rolland_Dev'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a class="folioLinkReseau" href='https://www.instagram.com/riton_dev/'><i class="fa-brands fa-instagram"> </i> Instagram</a> </li>
  </ul>
  <h3> Site créé From Scratch par Rolland-Dev / 2024 </h3>
  
</div>

`;

/*--------- EventListener Nav Mobile -----------*/

const menuClose = document.querySelector(".closeMobile");
const menuMobile = document.querySelector(".menuMobile");
console.log(menuMobile);

openMenu.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  openMenu.style.transform = "translateX(-150px)";
});

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

menuClose.addEventListener("click", () => {
  nav.style.transform = "translateX(-65vw)";
  openMenu.style.transform = "translateX(0)";
});

link.forEach((links) => {
  links.addEventListener("click", () => {
    nav.style.transform = "translateX(-65vw)";
    openMenu.style.transform = "translateX(0)";
  });
});

/*----------- Captcha ----------*/

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

/*------ EventListener Carousel ------*/

const btns = document.querySelectorAll(".btn");
const sildes = document.querySelectorAll(".slide");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...sildes].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...sildes].length - 1;
    if (newIndex >= [...sildes].length) newIndex = 0;
    sildes[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});

/*------ White Mode ------*/

const checked = document.querySelector('input[type="checkbox"]');
const folioBody = document.querySelector("body");
const folioBookBkgd = document.querySelector(".folioBook");
const folioBookTitle = document.querySelector("h2");
const folioBookPara = document.querySelectorAll(".folio1Desc p");
const folioFooterBkgd = document.getElementById("footer");
const folioFooterTitle = document.querySelector("#footer h3");
const folioFooterLink = document.querySelectorAll(".folioLinkReseau");

console.log(folioFooterLink);

checked.addEventListener("click", () => {
  if (checked.checked) {
    folioBody.style.background = "rgb(204, 204, 204)";
    folioBookBkgd.style.background =
      "linear-gradient(348deg, rgb(204, 204, 204) 50%, rgb(122, 42, 82) 70%, rgb(88, 0, 66) 80%)";
    folioBookTitle.classList.replace("folioBookTitle", "bookTitle");
    folioBookTitle.style.transition = "0.8s ease-in-out";
    for (i = 0; i < folioBookPara.length; i++) {
      folioBookPara[i].style.color = "black";
      folioBookPara[i].style.transition = "0.8s ease-in-out";
    }
    folioFooterBkgd.style.background =
      "linear-gradient(170deg, rgba(255, 255, 255, 0) 53%, rgb(87, 22, 55) 80%)";
    folioFooterTitle.style.color = "#5c1d3d";
    for (i = 0; i < folioFooterLink.length; i++) {
      folioFooterLink[i].style.color = "black";
      folioFooterLink[i].style.transition = "0.8s ease-in-out";
    }
  } else {
    folioBody.style.background = "black";
    folioBookBkgd.style.background =
      "linear-gradient(171deg,rgba(255, 255, 255, 1) 0%, rgba(87, 22, 55, 1) 37%, rgba(0, 0, 0, 1) 70%)";
    folioBookTitle.classList.replace("bookTitle", "folioBookTitle");
    folioBookTitle.style.transition = "0.8s ease-in-out";
    for (i = 0; i < folioBookPara.length; i++) {
      folioBookPara[i].style.color = "#d4b3a5";
      folioBookPara[i].style.transition = "0.8s ease-in-out";
    }
    folioFooterBkgd.style.background =
      "linear-gradient(357deg, rgba(255, 255, 255, 1) 0%, #571637 27%, rgba(0, 0, 0, 1) 75%)";
    folioFooterTitle.style.color = "#d4b3a5";
    for (i = 0; i < folioFooterLink.length; i++) {
      folioFooterLink[i].style.color = "white";
      folioFooterLink[i].style.transition = "0.8s ease-in-out";
    }
  }
});
