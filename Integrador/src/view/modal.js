
import { productoActivo, setProductoActivo } from "../../main.js";
import { handleDeleteProduct } from "../services/products.js";



/*POPUP*/
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', () => {
    closeModal();
});

/* FUNCIONES ABRIR Y CERRAR MODAL */
export const openModal = () => {
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if(productoActivo){
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    };

    if(productoActivo){
        const nombre = document.getElementById('nombre') 
        const imagen = document.getElementById('img')
        const precio = document.getElementById('precio')
        const categories = document.getElementById('categoria');

        imagen.value = productoActivo.imagen; 
        categories.value = productoActivo.categories;
        precio.value = productoActivo.precio; 
        nombre.value = productoActivo.nombre; 
    };
};

export const closeModal = () => {
    const modal = document.getElementById('modalPopUP');
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

const resetModal = () => {
    const nombre = document.getElementById('nombre') 
    const imagen = document.getElementById('img')
    const precio = document.getElementById('precio')
    const categories = document.getElementById('categoria');

    nombre.value = "";
    imagen.value = "";
    precio.value = 0; 
    categories.value = "Seleccione una categoría";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', ()=>{
    handleButtonDelete();
});
const handleButtonDelete = () => {
    handleDeleteProduct(); 
}