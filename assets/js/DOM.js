
let cartProducts = [];
let id;
let price;
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

function getId(idP){
    id = idP;
    return id;
}

function getPrice(priceP) {
    price = priceP;
    return price;
}

function getCartProduct(cart) {
    const getCart = {
        id: id,
        image: cart.querySelector('img').src,
        name: cart.querySelector('h5').textContent,
        price: price,
        amount: 1
    }    
    
    cartProducts.push(getCart);
    printCart(cartProducts);
    console.log(cartProducts);
}

export { toggleCart, addCart, getCartProduct, getId, getPrice};
