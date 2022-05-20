
let cartProducts = [];
let id = 0;
document.addEventListener('click', addCart);

function toggleCart() {
    const cart = document.getElementById('hidden');
    const fixedCart = document.getElementById('hidden');
    cart.classList.toggle('hidden');
    fixedCart.classList.toggle('fixedCart');
}
function addCart(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-card')){
        const cart = e.target.parentElement.parentElement;
        getCartProduct(cart);
    }
}

function getCartProduct(cart) {
    id += cartProducts.length;
    const getCart = {
        id: id,
        img: cart.querySelector('img').src,
        name: cart.querySelector('h5').textContent,
        precio: cart.querySelector('p').textContent
    }    
    cartProducts.push(getCart);
    // console.log(getCart);
    console.log(cartProducts);
}

export { toggleCart, addCart, getCartProduct};