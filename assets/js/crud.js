// import { printProduct } from './printProduct';

const url = 'https://e-commerce-api-academlo.herokuapp.com/api/products'

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
        name: 'Playera Academlo',
        price: 34,
        image: 'https://www.academlo.com/img/home/estudiando-programacion-min.png'
    }
    axios.post(url, product)
    .then((response) => {
        alert('Se creó correctamente');
    })
    .catch(function (error) {
        alert('No se pudo crear la tarea');
        console.log(error);
    })
}

function printProduct(product) {
    // Identificar el contenedor
    const container = document.getElementById('product-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < product.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card">
                            <img src="${product[i].image}"></img> class="card-img-top" alt="${product[i].name}">
                            <div class="card-body">
                                <h5 class="card-title">${product[i].name}</h5>
                                <p class="card-text">${product[i].price}</p>
                                <button class="btn btn-primary">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>`
    // Imprimir el HTML
    container.innerHTML = html;
    }
}
export { getProduct, createProduct, printProduct }