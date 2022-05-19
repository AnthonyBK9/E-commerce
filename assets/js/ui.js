function printProduct(product) {
    // Identificar el contenedor
    const container = document.getElementById('product-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < product.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="text-center">
                            <div class="img-container">
                                <img src="${product[i].image}" alt="${product[i].name}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${product[i].name}</h5>
                                <p class="card-text">$${product[i].price} US</p>
                                <div class="text-end">
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="editProduct(${product[i].id})">
                                        <i class="fa-solid fa-square-pen"></i>
                                    </button>
                                    <button class="btn btn-danger" onclick="deleteProduct(${product[i].id})">
                                        <i class="fa-solid fa-trash-can">
                                    </i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    // Imprimir el HTML
    container.innerHTML = html;
    }
}
export { printProduct };