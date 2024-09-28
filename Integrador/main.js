
import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { openModal } from "./src/view/modal.js";
import { handleGetProductsToStore } from "./src/view/store.js";


/* ===APLICACION=== */
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};
export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

/* HEADER */
const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', () => {
    openModal();
});

//buttonSearch

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});