// ===== STORE =====

import { setProductoActivo } from "../../main.js";
import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { openModal } from "./modal.js";


//Función que se encarga de traer los elementos y llamar al render
export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}

//Función que se encarga de filtrar y de renderizar la sección con todos sus respectivos elementos
export const handleRenderList = (productosIn) => {
    //filtrado de arrays por categoría
    const burguers = productosIn.filter((el) => el.categories == "Hamburguesas");
    const papas = productosIn.filter((el) => el.categories == "Papas");
    const gaseosas = productosIn.filter((el) => el.categories == "Gaseosas");
    //renderiza los elementos de la sección
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='containerTargetItem' id='product-${producto.categories}-${index}'>
                <div>
                <img src='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${producto.precio} </p>
                </div>
                </div>
                </div>`;
            });
            //retorna la sección con todos los elementos dentro
            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
            <h3>${title}</h3>
            </div>
            <div class='containerProductStore'>
            ${productosHTML.join("")}
            </div>
            </section>
            `;
        } else {
            return ""
        };
    };
    //renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burguers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;
    //Se añaden los eventos de manera dinámica
    const addEvents = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categories}-${index}`
            );
            productContainer.addEventListener('click', () => {
                setProductoActivo(element);
                openModal();
            });
        });
    };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};