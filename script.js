let modal = document.querySelector(".modal");

let open = document.getElementById("openModal");
open.addEventListener("click", () => {
  modal.style.display = "flex";
});

function check() {
  modal.style.display = "none";
}
