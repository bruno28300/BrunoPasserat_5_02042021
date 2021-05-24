// Get all products
function getProducts(url, callback) {
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

getProducts("http://localhost:3000/api/furniture", function Products(arr) {
    arr.forEach(card => {
        cards(card)
    });
});

// Cards container
const productsElement = document.createElement("div")
productsElement.classList.add("d-flex", "justify-content-around", "flex-wrap")

function cards(product) {
    const {
        name,
        price,
        description,
        imageUrl
    } = product

    // Card element
    const cardElement = document.createElement("div")
    const cardImg = creationCardImage(imageUrl, name)
    productsElement.appendChild(cardElement)
    cardElement.classList.add("card", "shadow")
    cardElement.appendChild(cardImg)

    // Card body
    const cardBodyElement = document.createElement("div")
    const cardTitleElement = document.createElement("h3")
    const cardTextElement = document.createElement("p")
    const priceElement = document.createElement("h4")
    const priceSpanElement = document.createElement("span")
    creationCardBody(cardBodyElement, cardTitleElement, cardTextElement, priceElement, priceSpanElement, cardElement, description, price)

    // Append products in DOM
    const products = document.getElementById("products")
    products.appendChild(productsElement)

    // View product button
    const viewButtonElement = document.createElement("a")
    creationViewButton(viewButtonElement)
    cardBodyElement.appendChild(viewButtonElement)
}