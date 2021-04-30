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

// Display products

function Products(arr) {
    for (let i = 0; i < arr.length; i++) {
        essai(arr[i]);
    }
}

const productsElement = document.createElement("div");
productsElement.classList.add("d-flex", "justify-content-around", "flex-wrap");


function essai(product) {
    const {
        _id,
        name,
        price,
        description,
        imageUrl
    } = product;

    // Creation of elements
    const cardElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const cardBodyElement = document.createElement("div");
    const cardTitleElement = document.createElement("h3");
    const cardTextElement = document.createElement("p");
    const priceElement = document.createElement("p");
    const aElement = document.createElement("a");

    const products = document.getElementById("products");

    // Append elements in DOM
    products.appendChild(productsElement);
    productsElement.appendChild(cardElement);
    cardElement.appendChild(imgElement);
    console.log(cardElement);
    console.log(imgElement);
    cardElement.appendChild(cardBodyElement);
    cardBodyElement.appendChild(cardTitleElement);
    cardBodyElement.appendChild(cardTextElement);
    cardBodyElement.appendChild(priceElement);
    cardBodyElement.appendChild(aElement);

    // Add class properties
    cardElement.classList.add("card", "shadow");
    imgElement.classList.add("card-img-top");
    cardBodyElement.classList.add("card-body");
    cardTitleElement.classList.add("card-title");
    cardTextElement.classList.add("card-text");
    priceElement.classList.add("price");
    aElement.classList.add("btn", "btn-success", "btn-lg", "view-product", "stretched-link");

    // Add attribute properties
    imgElement.setAttribute("src", imageUrl);
    imgElement.setAttribute("alt", name);
    imgElement.setAttribute("loading", "lazy");
    aElement.setAttribute("href", "./produit.html?id=" + _id);

    // Creation of content
    cardTitleElement.innerHTML = name;
    cardTextElement.innerHTML = description;
    priceElement.innerHTML = "Prix : <span class='text-danger font-weight-bold'>" +
        price / 100 + " €</span>";
    aElement.innerHTML = "Voir le produit";
}