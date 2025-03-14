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
   <li class="captcha"> <a> Contact </a> </li>
  </ul>
`;

footer.innerHTML = `
<div class='footerList'> 
  <ul>
    <li><h3>Réseaux</h3></li>
    <li><a href='https://github.com/RollandHenri'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a href='https://x.com/Rolland_Dev'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a href='https://www.instagram.com/riton_dev/'><i class="fa-brands fa-instagram"> </i> Instagram</a> </li>
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
