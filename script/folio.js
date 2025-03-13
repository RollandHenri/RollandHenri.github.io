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
      <i class="fa-solid fa-xmark"></i>
  </div>

  <div class="logo"> </div>

  <ul>
    <li> <a href='/index.html'> Accueil </a> </li>
    <li> <a href='/index.html#skills'> Compétences </a> </li>
    <li> <a href="/index.html#folio"> Folio </a></li>
    <li> <a href="mailto:rolland.h.dev@gmail.com"> Contact </a></li>
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
console.log(menuClose);

openMenu.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  openMenu.style.transform = "translateX(-150px)";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    openMenu.style.color = "white ";
  } else {
    openMenu.style.color = "black";
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
