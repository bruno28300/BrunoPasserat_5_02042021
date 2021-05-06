// Get all products
function getProducts() {
    let request = new XMLHttpRequest();
    let url = "http://localhost:3000/api/furniture";

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let request = JSON.parse(this.responseText);
            Products(request);
        }
    };
    request.open("GET", url);
    request.send();
}

getProducts();

// Display products loop
function Products(arr) {
    for (let i = 0; i < arr.length; i++) {
        cards(arr[i]);
    }
}

// Creation cards container
const productsElement = document.createElement("div");
productsElement.classList.add("d-flex", "justify-content-around", "flex-wrap");

function cards(product) {
    const {
        _id,
        name,
        price,
        description,
        imageUrl
    } = product;

    // Creation card element
    const cardElement = document.createElement("div");
    productsElement.appendChild(cardElement);
    cardElement.classList.add("card", "shadow");

    // Creation card image
    const imgElement = document.createElement("img");
    cardElement.appendChild(imgElement);
    imgElement.classList.add("card-img-top");
    imgElement.setAttribute("src", imageUrl);
    imgElement.setAttribute("alt", name);
    imgElement.setAttribute("loading", "lazy");

    // Creation card body
    const cardBodyElement = document.createElement("div");
    const cardTitleElement = document.createElement("h3");
    const cardTextElement = document.createElement("p");
    const priceElement = document.createElement("h4");
    const priceSpanElement = document.createElement("span");
    cardBodyElement.classList.add("card-body");
    cardTitleElement.classList.add("card-title");
    cardTextElement.classList.add("card-text");
    priceElement.classList.add("text-center", "my-5");
    priceSpanElement.classList.add("text-danger", "font-weight-bold")

    // Creation view product button
    const viewButtonElement = document.createElement("a");
    viewButtonElement.classList.add("btn", "btn-success", "btn-lg", "view-product", "stretched-link", "d-block", "text-center");
    viewButtonElement.setAttribute("href", "./produit.html?id=" + _id);
    viewButtonElement.innerHTML = "Voir le produit";

    // Append elements in DOM
    const products = document.getElementById("products");
    products.appendChild(productsElement);
    cardElement.appendChild(cardBodyElement);
    cardBodyElement.appendChild(cardTitleElement);
    cardBodyElement.appendChild(cardTextElement);
    cardBodyElement.appendChild(priceElement);
    priceElement.appendChild(priceSpanElement);
    cardBodyElement.appendChild(viewButtonElement);

    // Creation of content
    cardTitleElement.innerHTML = name;
    cardTextElement.innerHTML = description;
    priceSpanElement.innerHTML = price / 100 + " €";
}