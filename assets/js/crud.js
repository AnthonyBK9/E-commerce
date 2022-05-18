import {printProduct} from './ui.js';

const productURL = 'https://e-commerce-api-academlo.herokuapp.com/api/products';

function getProduct() {
    axios.get(productURL)
        .then(function (products) {
            // const product = products;
            console.log(products);
        })
        .catch((error) => {
            alert('Error al consultar API');
            console.log(error);
        })
}


function createProduct(){
    const product = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value
    };
    console.log(product);
    axios.post(productURL, product)
        .then(() => {
            alert('Se creó producto correctamente');
            // printProduct();
        })
        .catch()
}


export { getProduct, createProduct }