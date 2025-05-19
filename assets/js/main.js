console.log("Mi Blog Vibrante - JavaScript cargado");

// Ejemplo de funcionalidad futura: agregar clase para animaciones al cargar
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.add("animate__animated", "animate__fadeIn");
    });
});
