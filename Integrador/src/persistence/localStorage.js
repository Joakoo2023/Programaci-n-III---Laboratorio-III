// ===== LOCALSTORAGE =====
export const handleGetProductLocalStorage = () => {
    const product = JSON.parse(localStorage.getItem('products'));
    if (product){
        return product;
    } else {
        return [];
    }
};

// GUARDAR EN LOCALSTORAGE

//recibir el producto
export const setInLocalStorage = (productIn) => {
    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex((productsLocal) => productsLocal.id ==productIn.id);

    //verificar si el elemento existe
    if(existingIndex !== -1){

        // si existe debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    } else {

        //sino agregarse
        productsInLocal.push(productIn);
    }
    
    //setear el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal));
};