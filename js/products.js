// Get product
function getProduct(url, callback) {
    let request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            callback(data)
        }
    };

    request.open("GET", url)
    request.send()
}

getProduct("http://localhost:3000/api/furniture", function Products(arr) {
    arr.forEach(card => {
        cards(card)
    });
});

// Cards container
const productsElement = document.createElement("div")
productsElement.classList.add("d-flex", "justify-content-around", "flex-wrap")

function cards(product) {
    const {
        _id,
        name,
        price,
        description,
        imageUrl
    } = product

    createCardBody(name, description, price, imageUrl, _id)

    const products = document.getElementById("products")
    products.appendChild(productsElement)
}