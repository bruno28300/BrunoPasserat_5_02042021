// Get all products
function getProducts(url, callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            callback(data);
            console.log(data);
        }
    };
    request.open("GET", url);
    request.send();
}

getProducts("http://localhost:3000/api/furniture", function Products(arr) {
    arr.forEach(card => {
        cards(card);
    });
});

// Cards container
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

    // Card element
    const cardElement = document.createElement("div");
    const cardImg = creationCardImage(imageUrl, name);
    productsElement.appendChild(cardElement);
    cardElement.classList.add("card", "shadow");
    cardElement.appendChild(cardImg);

    // Card body
    const cardBodyElement = document.createElement("div");
    const cardTitleElement = document.createElement("h3");
    const cardTextElement = document.createElement("p");
    const priceElement = document.createElement("h4");
    const priceSpanElement = document.createElement("span");
    creationCardBody(cardBodyElement, cardTitleElement, cardTextElement, priceElement, priceSpanElement, cardElement, description, price)

    // Append elements in DOM
    const products = document.getElementById("products");
    products.appendChild(productsElement);

    // View product button
    const viewButtonElement = document.createElement("a");
    creationViewButton(viewButtonElement);
    cardBodyElement.appendChild(viewButtonElement);
}

// Creation card image
function creationCardImage(imageUrl, name) {
    const imgElement = document.createElement("img");
    imgElement.classList.add("card-img-top");
    imgElement.setAttribute("src", imageUrl);
    imgElement.setAttribute("alt", name);
    imgElement.setAttribute("loading", "lazy");
    return imgElement;
}

// Creation card body
function creationCardBody(cardBodyElement, cardTitleElement, cardTextElement, priceElement, priceSpanElement, cardElement, description, price) {
    cardBodyElement.classList.add("card-body");
    cardTitleElement.classList.add("card-title");
    cardTextElement.classList.add("card-text");
    priceElement.classList.add("text-center", "my-5");
    priceSpanElement.classList.add("text-danger", "font-weight-bold");
    cardTitleElement.innerHTML = name;
    cardTextElement.innerHTML = description;
    priceSpanElement.innerHTML = price / 100 + " €";
    cardElement.appendChild(cardBodyElement);
    cardBodyElement.appendChild(cardTitleElement);
    cardBodyElement.appendChild(cardTextElement);
    cardBodyElement.appendChild(priceElement);
    priceElement.appendChild(priceSpanElement);
}

// Creation view product button
function creationViewButton(viewButtonElement, _id) {
    viewButtonElement.classList.add("btn", "btn-success", "btn-lg", "view-product", "stretched-link", "d-block", "m-auto");
    viewButtonElement.setAttribute("href", "./produit.html?id=" + _id);
    viewButtonElement.innerHTML = "Voir le produit";
}