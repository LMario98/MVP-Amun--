import { products } from "./products.js";
import { renderProducts } from "./main.js";
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const filterProducts = products.filter(function (product) {
        return product.name.toLocaleLowerCase().includes(searchValue)
    })
    renderProducts(filterProducts)
});
