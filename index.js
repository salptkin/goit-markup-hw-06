const hamburgerButton = document.getElementById("hamburger");
const isOpen = document.getElementById("is-open");
const closeButton = document.getElementById("menu-button");
const orderServices = document.getElementById("order-services-button");
const modalButton = document.getElementById("modal-button");
const modal = document.getElementById("modal");

hamburgerButton.addEventListener("click", function () {
  isOpen.classList.add("is-open-menu");
  
});

closeButton.addEventListener("click", function () {
  isOpen.classList.remove("is-open-menu");
  
});

orderServices.addEventListener("click", function (){
  modal.classList.add("is-open-modal");
});
modalButton.addEventListener("click", function (){
  modal.classList.remove("is-open-modal");
});


