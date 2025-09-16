const modal = document.getElementById("carouselModal");
const modalImg = document.getElementById("carouselImage");
const previews = document.querySelectorAll(".preview");

let currentIndex = 0;
let currentGallery = "";

// Listes d’images par projet
const galleries = {
  figma: [
    "./pictures/maquette/mockups-desktop.webp",
    "./pictures/maquette/mockups-tablette.webp",
    "./pictures/maquette/mockups-smartphone.webp",
    "./pictures/maquette/mockups-smartphone-unfold.webp",
  ],
  campus: [
    "./pictures/gaming_campus/campus_desktop.webp",
    "./pictures/gaming_campus/campus_smartphone.webp",
  ],
  api: ["./pictures/api_pays/home.webp", "./pictures/api_pays/search.webp"],
  arcadia: [
    "./pictures/zoo_arcadia/home.webp",
    "./pictures/zoo_arcadia/habitat.webp",
    "./pictures/zoo_arcadia/animal.webp",
    "./pictures/zoo_arcadia/services.webp",
    "./pictures/zoo_arcadia/admin.webp",
    "./pictures/zoo_arcadia/refused.webp",
  ],
  todo: ["./pictures/todo/home.webp"],
  crypto: ["./pictures/crypto/home.webp", "./pictures/crypto/bitcoin.webp"],
};

// Ouvrir le carrousel
previews.forEach((preview) => {
  preview.addEventListener("click", (e) => {
    currentGallery = e.target.dataset.gallery;
    currentIndex = parseInt(e.target.dataset.index);
    modal.style.display = "flex";
    document.body.classList.add("no-scroll");
    showImage(currentIndex);
  });
});

// Fermer le carrousel
document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
};

// Navigation
document.querySelector(".prev").onclick = () => showImage(currentIndex - 1);
document.querySelector(".next").onclick = () => showImage(currentIndex + 1);

// Navigation clavier
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "Escape") modal.style.display = "none";
  }
});

// Fonction affichage
function showImage(index) {
  const images = galleries[currentGallery];
  if (!images || images.length === 0) return; // évite les erreurs

  currentIndex = (index + images.length) % images.length;
  modalImg.src = images[currentIndex];
}
