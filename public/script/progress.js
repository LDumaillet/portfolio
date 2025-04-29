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

window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = scrollPercent + "%";

  // Animation au scroll

  if (scrollPercent > 4) {
    about.style.opacity = 1;
    about.style.transform = "none";
  }

  if (scrollPercent > 16) {
    course.style.opacity = 1;
    course.style.transform = "none";
  }
  if (scrollPercent > 19) {
    firstItem.style.opacity = 1;
    firstItem.style.transform = "none";
  }

  if (scrollPercent > 22) {
    secondItem.style.opacity = 1;
    secondItem.style.transform = "none";
  }

  if (scrollPercent > 24) {
    thirdItem.style.opacity = 1;
    thirdItem.style.transform = "none";
  }

  if (scrollPercent > 28) {
    fourthItem.style.opacity = 1;
    fourthItem.style.transform = "none";
  }

  if (scrollPercent > 31) {
    fifthItem.style.opacity = 1;
    fifthItem.style.transform = "none";
  }

  if (scrollPercent > 34) {
    sixthItem.style.opacity = 1;
    sixthItem.style.transform = "none";
  }

  if (scrollPercent > 37) {
    seventhItem.style.opacity = 1;
    seventhItem.style.transform = "none";
  }

  if (scrollPercent > 40) {
    eighthItem.style.opacity = 1;
    eighthItem.style.transform = "none";
  }

  if (scrollPercent > 43) {
    portfolio.style.opacity = 1;
    portfolio.style.transform = "none";
  }

  if (scrollPercent > 46) {
    model.style.opacity = 1;
    model.style.transform = "none";

    gamingCampus.style.opacity = 1;
    gamingCampus.style.transform = "none";
  }

  if (scrollPercent > 54) {
    api.style.opacity = 1;
    api.style.transform = "none";

    arcadia.style.opacity = 1;
    arcadia.style.transform = "none";
  }

  if (scrollPercent > 62) {
    centerInteret.style.opacity = 1;
    centerInteret.style.transform = "none";
  }

  if (scrollPercent > 82) {
    contact.style.opacity = 1;
    contact.style.transform = "none";
  }

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
    const aboutScroll = scrollHeight * 0.18;
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
    const aboutScroll = scrollHeight * 0.7;
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
