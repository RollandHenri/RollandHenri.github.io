/*------ Variables ------*/

const nav = document.querySelector("nav");
const header = document.querySelector("header");
const aboutTitle = document.querySelector(".aboutTitle");
const aboutImg = document.querySelector(".aboutImg");

const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const textarea = document.querySelector("textarea");
const submit = document.querySelector('input[type="submit"]');
const result = document.querySelector(".result");
const popUp = document.querySelector(".popUp");
const mailAnswer = document.getElementById("mailAnswer");
const news = document.getElementById("mail");
const close = document.querySelector(".popUp > i");

let scrollDown = 0;

/*------ Create HTML ------*/

nav.innerHTML = `
  <div class="closeMobile">
      <i class="fa-solid fa-xmark"></i>
  </div>

  <div class="logo"> </div>

  <ul>
    <li> <a href='#'> Accueil </a> </li>
    <li> <a href='#skills'> Compétences </a> </li>
    <li> <a href="#folio"> Folio </a></li>
    <li> <a href="mailto:rolland.h.dev@gmail.com"> Contact </a></li>
  </ul>
`;

skills.innerHTML = `
<h2> Compétences </h2>
<div class='skillsContain'>
<div class="skillsLeft"> 
    <h3> Développement Front-End </h3>
        <div class="iconLeft"> 
        
        <div class='iconFlex'> 
           <i class="fa-brands fa-sass"></i>
            <p> SASS </p>
        </div>
        <div class='iconFlex'> 
            <i class="fa-brands fa-js"></i>
            <p> JavaScript </p>
        </div>
        <div class='iconFlex'>
            <i class="fa-brands fa-react"></i>
            <p> React.js </p>
        </div>
        </div> 
        <div class="skillsPara">
           <p>
              Je développe des site internet et des applications web.
              Je travail avec plusieurs Frameworks pour apporter des solutions particuliers à vos attentes.
          </p>
        </div>
</div> 

<div class="skillsMid">
      <h3> Développement Wordpress</h3>
        <div class="iconLeft"> 
          <div class='iconFlex'>
              <i class="fa-brands fa-wordpress"></i>
              <p> Wordpress</p>
          </div> 
        </div>
            <div class="skillsPara">
           <p>
              Je peux développer des sites internet sous Wordpress. 
              Je peux également modifier un site Wordpress existant et mettre en place des optimisations
          </p>
          </div>
        
</div>

<div class="skillsRight">
    <h3> Soft Skills </h3>
      <div class="iconRight"> 
       <div class='iconFlex'> 
         <i class="fa-brands fa-github"></i>
         <p> GitHub </p>
       </div>
    <div class='iconFlex'> 
        <i class="fa-brands fa-figma"></i>
        <p> Figma </p>
    </div>
     <div class='iconFlex'>
        <i class="fa-solid fa-mug-saucer"></i>
        <p> Café </p>
    </div>
    </div>
      <div class="skillsPara">
           <p>
              Je travail avec des outils pour retoucher et optimiser vos site (création de maquette, retouche de photos, ...)
          </p>
      </div>
  </div> 
</div> 
`;

folio.innerHTML = `
<div class='folioContain'> 
  <h2> Folio </h2>  
    <div class="folioList"> 
      <div class="listCardContainer">
        <div class="listCard card1"> </div>
         <div class='effect'> 
           <h3> Restaurant </h3>
           <p> Un site internet pour un restaurant. Site développé en HTML / SASS / JavaScript </p> 
           <p> Mise en place d'un calendrier de réservations</p>
           <p> Utilisation d'API pour géolocaliser le restaurant sur Google Map</p> 
           <p> Utilisation du JavaScript pour les animations</p>
          <a href='/pages/folio1.html'> <button> <span> En savoir plus </span> <i class="fa-solid fa-circle-chevron-right"></i> </button> </a> 
         </div>
       </div>

<div class="listCardContainer">
    <div class='effect second'>
      <h3> La Montagne </h3>
        <p> Un site développé uniquement en HTML et CSS (SASS) </p> 
        <p> Site vitrine avec des articles de Randonées</p>
        <p> Utilisation de SASS pour optimiser le CSS</p>
        <p> Utilisation de JavaScript pour les animations</p>
          <a href="/pages/folio2.html"><button> <span> En savoir plus </span><i class="fa-solid fa-circle-chevron-right"></i> </button> </a> 
      </div> 
  <div class="listCard card2"> </div>
</div>

<div class="listCardContainer">  
  <div class="listCard card3"> </div>
    <div class='effect'>
      <h3> Run </h3>
      <p> Un site développé en HTML / SASS / JavaScript </p> 
      <p> Site vitrine pour de la course à pieds </p>
      <p> Mise en place d'un formulaire de contact</p>
      <p> Utilisation de SASS pour optimiser le CSS</p>
      <a href="/pages/folio3.html"> <button> <span> En savoir plus </span> <i class="fa-solid fa-circle-chevron-right"></i></button> </a> 
      </div> 
    </div>
  </div>
</div>
`;

footer.innerHTML = `
<div class='footerList'> 
  <ul>
    <li><h3>Réseau</h3></li>
    <li><a href='github.com'> <i class="fa-brands fa-github"></i> GitHub </a></li>
    <li><a href='twiter.com'><i class="fa-brands fa-twitter"></i> Twitter </a> </li>
    <li><a href='instagram.comm'><i class="fa-brands fa-instagram"> </i> Instagram</a> </li>
  </ul>
  <h3> Site créé From Scratch par Rolland-Dev / 2024 </h3>
  
</div>

`;
