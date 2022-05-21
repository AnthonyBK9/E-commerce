import { getProduct, createProduct, deleteProduct, editProduct, updateProduct } from "./crud.js";

import { getProduct, createProduct, deleteProduct, editProduct, updateProduct, getProductShop} from "./crud.js";


getProduct();

window.getProduct = getProduct;
window.getProductShop = getProductShop;
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
