
let cartProducts = [];
let id = 1;
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
    id++;
    const getCart = {
        id: id,
        image: cart.querySelector('img').src,
        name: cart.querySelector('h5').textContent,
        price: cart.querySelector('p').textContent
    }    
    cartProducts.push(getCart);
    printCart(cartProducts);
    console.log(cartProducts);
}

export { toggleCart, addCart, getCartProduct};
