const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("modal-overlay");

openBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
})

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "scroll"
})