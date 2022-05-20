
let cartProducts = [];

function toggleCart() {
    const cart = document.getElementById('hidden');
    const fixedCart = document.getElementById('hidden');
    cart.classList.toggle('hidden');
    fixedCart.classList.toggle('fixedCart');
}
function addCart(product) {
    console.log(object.assign(product));
}
function getCartProduct() {
    
}
export { toggleCart, addCart, getCartProduct};