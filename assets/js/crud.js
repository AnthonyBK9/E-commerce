import { printProduct } from './ui.js';

const url = 'https://e-commerce-api-academlo.herokuapp.com/api/products'
let editingID = null;

function resetForm() {
    document.getElementById('form').reset();
}

function getProduct() {
    axios.get(url)
    .then((p) => {
        const products = p.data;
        console.log(products)
        printProduct(products);
    })
    .catch((err) => {
        console.log('No se logró conectar la API');
    })

}

function createProduct() {
    const product = {
        name: document.getElementById('product').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image').value,
    }
    axios.post(url, product)
    .then((response) => {
        alert('Se creó correctamente');
        getProduct();
        resetForm();
    })
    .catch(function (error) {
        alert('No se pudo crear la tarea');
        console.log(error);
    })
}

function deleteProduct(id){
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    axios.delete(`${url}/${id}`)
    .then( () => {
        alert('El producto se eliminó correctamente');
        getProduct();
    })
    .catch((error) => {
        alert('No se pudo eliminar el producto pague por el >=|');
    })
}

function editProduct(id) {
    axios.get(`${url}/${id}`)
        .then((response) => {
            editingID = id;
            const product = response.data
            console.log(product);
            document.getElementById('edit-product').value = product.name;
            document.getElementById('edit-price').value = product.price;
            document.getElementById('edit-image').value = product.image;
        })
        .catch((error) => {
            console.log('No se pudo editar el producto')
        })
}


export { getProduct, createProduct, deleteProduct, editProduct }


