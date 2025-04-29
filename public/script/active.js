const ul = document.querySelector("ul");
const menuBurger = document.getElementById("menu-burger");

function toggleActived(select, affected) {
  select.addEventListener("click", () => {
    affected.classList.toggle("active");
  });
}

toggleActived(menuBurger, ul);
