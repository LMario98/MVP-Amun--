console.log(products.length);
// Select the products catalog

const catalog = document.querySelector('#catalog');
console.log(catalog, 'Test catalogo');

// forEach 



// Render each product dynamically
products.forEach(function (product) {

    // Create the product card
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Create the product image
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    // Create the product title
    const productName = document.createElement("h2");
    productName.textContent = product.name;

    // Create the product description
    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    // Create the product price
    const productPrice = document.createElement("p");
    productPrice.textContent = `€${product.price}`;
    // Add elements to the product card
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);

    // Add the product card to the catalog
    catalog.appendChild(productCard);
});

