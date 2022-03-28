const hideMenuEL = document.querySelector(".ham");
const hamEl = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  hideMenuEL.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  hideMenuEL.classList.add("hidden");
  overlay.classList.add("hidden");
};

hamEl.addEventListener("click", () => {
  openModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !hideMenuEL.classList.contains("hidden")) {
    closeModal();
  }
});

overlay.addEventListener("click", closeModal);
