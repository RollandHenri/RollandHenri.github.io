/**** Variables NavBar *****/

const navbar = document.querySelector(".navbar");
const navAbout = document.querySelector(".navAbout");
const navSkill = document.querySelector(".navSkill");
const navService = document.querySelector(".navService");

/**** Variable Scorll Anim  ****/

/**** NavBar Height Anim ****/

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "80px";
  }
});

/**** NavBar Scroll Color Section */

window.addEventListener("scroll", () => {
  let scrollratio = (window.scrollY + innerHeight) / document.body.offsetHeight;

  if (scrollratio < 0.5) {
    navAbout.style.color = "black";
    navAbout.style.textShadow = "none";
  }
  if (scrollratio > 0.5) {
    navAbout.style.textShadow = "1px 5px 5px white";
    navAbout.style.color = "rgb(48, 48, 88)";
  }
  if (scrollratio > 0.87) {
    navAbout.style.textShadow = "none";
    navAbout.style.color = "black";
    navSkill.style.textShadow = "1px 5px 5px white";
    navSkill.style.color = "rgb(48, 48, 88)";
  }
  if (scrollratio < 0.87) {
    navSkill.style.textShadow = "none";
    navSkill.style.color = "black";
  }
  if (scrollratio > 1.35) {
    navService.style.textShadow = "1px 5px 5px white";
    navService.style.color = "rgb(48, 48, 88)";
    navSkill.style.textShadow = "none";
    navSkill.style.color = "black";
  }
  if (scrollratio < 1.35) {
    navService.style.textShadow = "none";
    navService.style.color = "black";
  }
  {
  }

  console.log(scrollratio);
});
