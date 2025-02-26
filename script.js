function openModal(src) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal").style.display = "flex";
    document.getElementById("back-button").style.display = "none"; // Ocultar el botón de volver
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("back-button").style.display = "block"; // Mostrar el botón de volver
}