// script.js
function openModal(src) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function showGallery(galleryNumber) {
    document.getElementById("gallery1").style.display = galleryNumber === 1 ? "grid" : "none";
    document.getElementById("gallery2").style.display = galleryNumber === 2 ? "grid" : "none";
}
