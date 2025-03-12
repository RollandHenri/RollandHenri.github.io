const nav = document.querySelector("nav");
const footer = document.getElementById("footer");

/*------ Variable Carousel ------*/

const btns = document.querySelectorAll(".btn");
const sildes = document.querySelectorAll(".slide");

console.log(sildes);

/*------ Create HTML ------*/

nav.innerHTML = `
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
    <li><h3>Réseau</h3></li>
    <li><a href='github.com'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a href='twiter.com'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a href='instagram.comm'><i class="fa-brands fa-instagram"> </i> Instag</a> </li>
  </ul>
  <h3> Site créé From Scratch par Rolland-Dev / 2024 </h3>
  
</div>

`;

/*------ EventListener Carousel ------*/

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
