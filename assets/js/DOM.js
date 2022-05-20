function toggleCart() {
    const cart = document.getElementById('hidden');
    const fixedCart = document.getElementById('hidden');
    cart.classList.toggle('hidden');
    fixedCart.classList.toggle('fixedCart');
}


export { toggleCart };