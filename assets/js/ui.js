function printProduct(products) {
    const container = document.getElementById('card-container');
    let html ='';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="col-md-4">
                    <div class="card">
                        <img src="${products[i].image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${products[i].name}</h5>
                            <p class="card-text">${products[i].price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
    }
    container.innerHTML = html;
}
export { printProduct };