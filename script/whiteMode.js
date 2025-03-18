/*--------- Variable de Style ----------*/

const checked = document.querySelector("input[type=checkbox]");
const linkWhite = document.querySelectorAll("nav a");
const captcha = document.querySelector("nav span");
const headerWhite = document.querySelector("header");
const titleHeader = document.querySelector(".headerHeroLeft ");
const titleHeaderdown = document.querySelector(" .down");
const logoGithub = document.querySelector(".logoLinkWhite");
const scrollIconWhite = document.querySelector(".scrollIcon");
const skillsWhite = document.getElementById("skills");

console.log();

checked.addEventListener("change", () => {
  if (checked.checked) {
    console.log("good");
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
  } else {
    console.log("pas good");
    for (let i = 0; i < linkWhite.length; i++) {
      linkWhite[i].style.color = "black";
      linkWhite[i].style.transition = "0.8s ease-in-out";
    }
    captcha.style.color = "black";
    captcha.style.transition = "0.8s ease-in-out";
    headerWhite.style.background =
      "linear-gradient(171deg, rgb(255, 255, 255) 0%, rgb(87, 22, 55) 37%, rgb(0, 0, 0) 70%)";
    headerWhite.style.transition = "0.5s ease-in-out";
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
  }
});
