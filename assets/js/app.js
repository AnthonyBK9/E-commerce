
import { getProduct, createProduct, deleteProduct, editProduct, updateProduct, getProductShop } from "./crud.js";
import { toggleCart } from "./DOM.js"

getProduct();
getProductShop();

window.getProduct = getProduct;
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.toggleCart = toggleCart;

