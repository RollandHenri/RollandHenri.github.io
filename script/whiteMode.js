/*--------- Variable de Style ----------*/

const checked = document.querySelector("input[type=checkbox]");
const body = document.querySelector("body");
const linkWhite = document.querySelectorAll("nav a");
const captcha = document.querySelector("nav span");
const headerWhite = document.querySelector("header");
const titleHeader = document.querySelector(".headerHeroLeft ");
const titleHeaderdown = document.querySelector(" .down");
const logoGithub = document.querySelector(".logoLinkWhite");
const scrollIconWhite = document.querySelector(".scrollIcon");
const skillsWhite = document.getElementById("skills");
const titleSkills = document.querySelector("#skills h2");
const skillsCard = document.querySelectorAll(".skills");
const folioContainer = document.getElementById("folio");
const titleFolio = document.querySelector(".folioContain h2");
const footerBkgd = document.getElementById("footer");
const footerContain = document.querySelectorAll(".footerLink");
const footerContainTitle = document.querySelectorAll(".footerWhite");

console.log();

checked.addEventListener("change", () => {
  if (checked.checked) {
    console.log("good");
    body.style.background = "rgb(204, 204, 204)";
    body.style.transition = "0.8s ease-in-out";
    if (window.matchMedia("(min-width: 650px").matches) {
      for (let i = 0; i < linkWhite.length; i++) {
        linkWhite[i].style.color = "#d4b3a5";
        linkWhite[i].style.transition = "0.8s ease-in-out";
      }
      captcha.style.color = "#d4b3a5";
      captcha.style.transition = "0.8s ease-in-out";
    }
    headerWhite.style.background =
      "linear-gradient(348deg, rgb(204, 204, 204) 50%, rgb(122, 42, 82) 70%, rgb(88, 0, 66) 80%)";
    headerWhite.style.transition = "0.8s ease-in-out";
    titleHeader.style.color = "black";
    titleHeader.style.transition = "0.8s ease-in-out";
    titleHeaderdown.style.color = "black";
    titleHeaderdown.style.transition = "0.8s ease-in-out";
    skillsWhite.style.background = "rgb(204, 204, 204)";
    skillsWhite.style.transition = "0.8s ease-in-out";
    logoGithub.innerHTML = `
    <img src="/assets/icon/github_black.webp"  alt="Logo Github" height="50px"  width="50px" /> 
    `;
    scrollIconWhite.innerHTML = `
    <img class="scrollIconBlack" src="/assets/icon/chevron-bas-black.webp" alt="scroll down" />
    `;
    titleSkills.classList.replace("titleSkills", "titleSkillsWhite");
    titleSkills.style.transition = "0.8s ease-in-out";
    for (let i = 0; i < skillsCard.length; i++) {
      skillsCard[i].style.background = "rgba(87,22,55,1)";
      skillsCard[i].style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0.6)";
      skillsCard[i].style.transition = "0.8s ease-in-out";
    }
    folioContainer.style.background = "rgb(204, 204, 204)";
    folioContainer.style.transition = "0.8s ease-in-out";
    titleFolio.classList.replace("titleFolio", "titleFolioWhite");
    titleFolio.style.transition = "0.8s ease-in-out";
    footerBkgd.style.background =
      "linear-gradient(170deg, rgba(255,255,255,0) 53%, rgba(87,22,55,1) 80%)";
    footerBkgd.style.transition = "0.8s ease-in-out";
    for (i = 0; i < footerContain.length; i++) {
      footerContain[i].style.color = "black";
      footerContain[i].style.transition = "0.8s ease-in-out";
    }
    for (i = 0; i < footerContainTitle.length; i++) {
      footerContainTitle[i].style.color = "black";
      footerContainTitle[i].style.transition = "0.8s ease-in-out";
    }

    /* ---- */
    /* ---- */
  } else {
    console.log("pas good");
    body.style.background = "black";
    for (let i = 0; i < linkWhite.length; i++) {
      linkWhite[i].style.color = "black";
      linkWhite[i].style.transition = "0.8s ease-in-out";
    }
    captcha.style.color = "black";
    captcha.style.transition = "0.8s ease-in-out";
    headerWhite.style.background =
      "linear-gradient(171deg, rgb(255, 255, 255) 0%, rgb(87, 22, 55) 37%, rgb(0, 0, 0) 70%)";
    headerWhite.style.transition = "0.8s ease-in-out";
    titleHeader.style.color = "#d4b3a5";
    titleHeader.style.transition = "0.8s ease-in-out";
    titleHeaderdown.style.color = "#d4b3a5";
    titleHeaderdown.style.transition = "0.8s ease-in-out";
    skillsWhite.style.background = "black";
    skillsWhite.style.transition = "0.8s ease-in-out";
    logoGithub.innerHTML = `
    <img src="/assets/icon/github.webp"  alt="Logo Github" height="50px"  width="50px" /> 
    `;
    scrollIconWhite.innerHTML = `
    <img class="scrollIconBlack" src="/assets/icon/chevron-bas-white.webp" alt="scroll down" />
    `;
    titleSkills.classList.replace("titleSkillsWhite", "titleSkills");
    for (let i = 0; i < skillsCard.length; i++) {
      skillsCard[i].style.background =
        "radial-gradient(circle, rgba(89, 22, 56, 0) 55%, rgba(89, 22, 56, 1) 91%)";
      skillsCard[i].style.boxShadow = "rgba(255, 255, 255, 0.24)";
    }
    folioContainer.style.background = "black";
    titleFolio.classList.replace("titleFolioWhite", "titleFolio");
    for (i = 0; i < footerContain.length; i++) {
      footerContain[i].style.color = "white";
    }
    for (i = 0; i < footerContainTitle.length; i++) {
      footerContainTitle[i].style.color = "#d4b3a5";
    }
  }
});
