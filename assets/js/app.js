
import { getProduct, createProduct, deleteProduct, editProduct, updateProduct, getProductShop} from "./crud.js";
import { toggleCart, addCart, getCartProduct, getId, getPrice} from "./DOM.js"
import { printCart } from "./ui.js"

getProduct();
getProductShop();

window.getProduct = getProduct;
window.getProductShop = getProductShop;
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;
window.toggleCart = toggleCart;
window.addCart = addCart;
window.printCart = printCart;
window.getId = getId;
window.getPrice = getPrice;

