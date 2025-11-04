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
  library: [
    "./pictures/library/summary.webp",
    "./pictures/library/detail_book.webp",
    "./pictures/library/library.webp",
  ],
};

// Ouvrir le carrousel
previews.forEach((preview) => {
  preview.addEventListener("click", (e) => {
    if (preview.dataset.gallery === "stream_team") return;
    currentGallery = e.target.dataset.gallery;
    currentIndex = parseInt(e.target.dataset.index);
    modal.style.display = "flex";
    modal.style.zIndex = "10000";
    document.body.classList.add("no-scroll");
    showImage(currentIndex);
  });
});

// Fermer le carrousel
const closeModal = () => {
  modal.style.display = "none";
  modal.style.zIndex = "";
  document.body.classList.remove("no-scroll");
};
document.querySelector(".close").onclick = closeModal;

// Navigation
document.querySelector(".prev").onclick = () => showImage(currentIndex - 1);
document.querySelector(".next").onclick = () => showImage(currentIndex + 1);

// Navigation clavier
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "Escape") closeModal(); // ✅ Utilise la fonction
  }
});

// Fonction affichage
function showImage(index) {
  const images = galleries[currentGallery];
  if (!images || images.length === 0) return; // évite les erreurs

  currentIndex = (index + images.length) % images.length;
  modalImg.src = images[currentIndex];
}

// Accepte la redirection
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("redirectModal");
  const modalMessage = document.getElementById("modalMessage");
  const cancelBtn = document.getElementById("cancelBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const externalLinks = document.querySelectorAll(".external-link");

  let pendingUrl = null;

  externalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const siteName = this.dataset.siteName || "ce site";
      pendingUrl = this.href;

      // Affiche la modale
      modalMessage.textContent = `Vous allez être redirigé vers ${siteName}. Souhaitez-vous continuer ?`;
      modal.classList.add("active");
    });
  });

  // Bouton Annuler
  cancelBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    pendingUrl = null;
  });

  // Bouton Confirmer
  confirmBtn.addEventListener("click", function () {
    if (pendingUrl) {
      window.location.href = pendingUrl;
    }
  });

  // Fermer en cliquant sur l'overlay
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      pendingUrl = null;
    }
  });
});
