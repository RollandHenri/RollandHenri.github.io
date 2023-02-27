/**** Variables NavBar *****/

const navbar = document.querySelector(".navbar");
const navAbout = document.querySelector(".navAbout");
const navSkill = document.querySelector(".navSkill");
const navService = document.querySelector(".navService");

/**** Variable Skills Bar Anim  ****/

const skillHtml = document.querySelector(".after-html");
const skillCss = document.querySelector(".after-css");
const skillSass = document.querySelector(".after-sass");
const skillJs = document.querySelector(".after-js");
const skillReact = document.querySelector(".after-react");
const skillCafe = document.querySelector(".after-cafe");

/**** NavBar Height Anim ****/

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.style.height = "40px";
    navbar.style.background = "grey";
    navbar.style.zIndex = 8;
  } else {
    navbar.style.height = "80px";
    navbar.style.background = "rgba(179, 179, 179, 0.74)";
  }
});

/**** NavBar Scroll Color Section */

window.addEventListener("scroll", () => {
  let scrollratio = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollratio < 0.75) {
    navAbout.style.color = "black";
    navAbout.style.textShadow = "none";
  }
  if (scrollratio > 0.75) {
    navAbout.style.textShadow = "1px 5px 5px white";
    navAbout.style.color = "rgb(48, 48, 88)";
  }
  if (scrollratio > 1.2) {
    navAbout.style.textShadow = "none";
    navAbout.style.color = "black";
    navSkill.style.textShadow = "1px 5px 5px white";
    navSkill.style.color = "rgb(48, 48, 88)";
  }
  if (scrollratio < 1.2) {
    navSkill.style.textShadow = "none";
    navSkill.style.color = "black";
  }
  if (scrollratio > 1.7) {
    navService.style.textShadow = "1px 5px 5px white";
    navService.style.color = "rgb(48, 48, 88)";
    navSkill.style.textShadow = "none";
    navSkill.style.color = "black";
  }
  if (scrollratio < 1.7) {
    navService.style.textShadow = "none";
    navService.style.color = "black";
  }
  {
  }

  console.log(scrollratio);
});

/**** Skills Bar Anim Scroll  ****/

window.addEventListener("scroll", () => {
  let scrollratiobar = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollratiobar > 1.01) {
    skillHtml.style.width = "85%";
  }
  if (scrollratiobar > 1.04) {
    skillCss.style.width = "80%";
  }
  if (scrollratiobar > 1.083) {
    skillSass.style.width = "70%";
  }
  if (scrollratiobar > 1.12) {
    skillJs.style.width = "60%";
  }
  if (scrollratiobar > 1.16) {
    skillReact.style.width = "30%";
  }
  if (scrollratiobar > 1.2) {
    skillCafe.style.width = "88%";
  }
});
