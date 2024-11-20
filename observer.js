/**** Observer Cotainer ****/

const aboutContainer = document.querySelector(".bkgd_blur");
const picProfile = document.querySelector(".about_pic");
const book1 = document.querySelector(".book_2");
const book2 = document.querySelector(".book_1");
const book3 = document.querySelector(".book_3");

const actuLeft = document.querySelector(".actu_container_left");
const actuRight = document.querySelector(".actu_container_right");

/**** Observer translateY ****/

const translateYObserver = new IntersectionObserver(
  (container) => {
    for (const entry of container) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.3,
  }
);

const translateYNegObserver = new IntersectionObserver(
  (container) => {
    for (const entry of container) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.9,
  }
);

/**** Observer translateX ****/

const translateXObserver = new IntersectionObserver(
  (container) => {
    for (const entry of container) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0px)";
        entry.target.style.opacity = "1";
      }
    }
  },
  {
    threshold: 0.5,
  }
);

/**** Observer translateY****/

translateYObserver.observe(book1);
translateYNegObserver.observe(book2);
translateYObserver.observe(book3);

/**** Observer translateX ****/

translateXObserver.observe(aboutContainer);
translateXObserver.observe(picProfile);
translateXObserver.observe(actuLeft);
translateXObserver.observe(actuRight);
