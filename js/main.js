import { products } from "./products.js";


// Select the products catalog

const catalog = document.querySelector('#catalog');


console.log(catalog, 'Test catalogo');


export function renderProducts(productsToRender) {
    catalog.innerHTML = ""; // svuotare il catalogo
    if (productsToRender.length === 0) {
        catalog.textContent = "Nessun prodotto trovato.";
        return;
    }

    productsToRender.forEach(function (product) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name; // descrizione del immagine
        const productName = document.createElement("h2");
        productName.textContent = product.name;
        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        const productPrice = document.createElement("p");
        productPrice.textContent = `€${product.price}`; // inserimento dinamico del prezzo
        productCard.appendChild(productImage); // inseriamo l immagine dentro il contenitore della card
        productCard.appendChild(productName); // inserimento nome prodotto
        productCard.appendChild(productDescription); // inserimento della descrizione
        productCard.appendChild(productPrice); // inserimento prezzo
        catalog.appendChild(productCard); //mostriamo il catalogo nella pagina

    })
}
renderProducts(products);




