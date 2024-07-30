console.log("Hello World!");

/**
 * 1- Modali açıcak olan butonu seç
 * 2- Modalı seç
 * 3- Modalı kapatıcak olan butonu seç
 *
 * 4- MOdalı açıcak olan butonun modalı açmasını sağla
 * 5- Modalı kapatıcak olan butonun modalı kapatmasını sağla
 */

/* 1- Modali açıcak olan butonu seç */
const modalOpenButton = document.getElementById("modal-open-button");

/* 2- Modalı seç */
const modal = document.getElementById("modal");

/* 3- Modalı kapatıcak olan butonu seç */
const modalCloseButton = document.getElementById("modal-close-button");

/* 4- Modali açıcak olan butonun modalı açmasını için */
modalOpenButton.addEventListener("click", function () {
    modal.classList.remove("modal-close");
});

/* 5- Modalı kapatıcak olan butonun modalı kapatmasını için */
modalCloseButton.addEventListener("click", function () {
    modal.classList.add("modal-close");
});
