const linkIndex = document.getElementById("link-index");
const about = document.getElementById("about");
const linkAbout = document.getElementById("link-about");
const course = document.getElementById("course");
const linkCourse = document.getElementById("link-course");
const firstItem = document.getElementById("first-item");
const secondItem = document.getElementById("second-item");
const thirdItem = document.getElementById("third-item");
const fourthItem = document.getElementById("fourth-item");
const fifthItem = document.getElementById("fifth-item");
const sixthItem = document.getElementById("sixth-item");
const seventhItem = document.getElementById("seventh-item");
const eighthItem = document.getElementById("eighth-item");
const portfolio = document.getElementById("portfolio");
const linkPortfolio = document.getElementById("link-portfolio");
const model = document.querySelector(".model");
const gamingCampus = document.querySelector(".gaming-campus");
const api = document.querySelector(".api");
const arcadia = document.querySelector(".arcadia");
const centerInteret = document.getElementById("center-of-interet");
const linkInteret = document.getElementById("link-interet");
const contact = document.getElementById("contact");
const linkContact = document.getElementById("link-contact");

const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

// Déplacement au clique

linkIndex.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

linkAbout.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0.1;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

linkCourse.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0.24;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

linkPortfolio.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0.5;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

linkInteret.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0.74;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

linkContact.addEventListener("click", () => {
  const aboutScroll = scrollHeight * 0.9;
  window.scrollTo({
    top: aboutScroll,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = scrollPercent + "%";
  }

  // Hover sur la barre de navigation

  if (scrollPercent >= 0 && scrollPercent < 7) {
    linkIndex.classList.add("active");
  } else {
    linkIndex.classList.remove("active");
  }

  if (scrollPercent > 7 && scrollPercent < 19) {
    linkAbout.classList.add("active");
  } else {
    linkAbout.classList.remove("active");
  }

  if (scrollPercent > 19 && scrollPercent < 45) {
    linkCourse.classList.add("active");
  } else {
    linkCourse.classList.remove("active");
  }

  if (scrollPercent > 45 && scrollPercent < 67) {
    linkPortfolio.classList.add("active");
  } else {
    linkPortfolio.classList.remove("active");
  }

  if (scrollPercent > 67 && scrollPercent < 86) {
    linkInteret.classList.add("active");
  } else {
    linkInteret.classList.remove("active");
  }

  if (scrollPercent > 86 && scrollPercent < 97) {
    linkContact.classList.add("active");
  } else {
    linkContact.classList.remove("active");
  }
});

// Apparition au scroll

window.addEventListener("scroll", () => {
  const revealsLeft = document.querySelectorAll(".reveal-left");
  const revealsRight = document.querySelectorAll(".reveal-right");

  revealsLeft.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.7) {
      el.classList.add("visible");
    }
  });

  revealsRight.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.7) {
      el.classList.add("visible");
    }
  });
});
