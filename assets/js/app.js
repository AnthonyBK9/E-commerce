
import { getProduct, createProduct, deleteProduct, editProduct } from "./crud.js";


getProduct();

window.getProduct = getProduct;
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;

