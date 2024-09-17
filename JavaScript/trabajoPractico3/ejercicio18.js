// Referencias a los elementos del DOM
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const savedEmailParagraph = document.getElementById('saved-email');
const deleteButton = document.getElementById('delete-btn');

// Función para mostrar el correo guardado
function displaySavedEmail() {
    const savedEmail = localStorage.getItem('email');
    
    if (savedEmail) {
        savedEmailParagraph.textContent = `Correo guardado: ${savedEmail}`;
        deleteButton.style.display = 'inline-block';  // Mostrar el botón de eliminar
    } else {
        savedEmailParagraph.textContent = '';  // Si no hay correo guardado, limpiar
        deleteButton.style.display = 'none';  // Ocultar el botón de eliminar
    }
}

// Evento para guardar el correo cuando se envía el formulario
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Evitar el comportamiento predeterminado del formulario
    const email = emailInput.value;

    localStorage.setItem('email', email);  // Guardar el correo en localStorage
    displaySavedEmail();  // Actualizar la visualización
    emailInput.value = '';  // Limpiar el campo de entrada
});

// Evento para eliminar el correo guardado
deleteButton.addEventListener('click', () => {
    localStorage.removeItem('email');  // Eliminar el correo de localStorage
    displaySavedEmail();  // Actualizar la visualización
});

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', displaySavedEmail);
