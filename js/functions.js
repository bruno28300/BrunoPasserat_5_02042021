// Create card image
function createCardImage(name, imageUrl) {
    const imgElement = document.createElement("img")
    imgElement.classList.add("card-img-top")
    imgElement.setAttribute("alt", name)
    imgElement.setAttribute("src", imageUrl)
    imgElement.setAttribute("loading", "lazy")
    return imgElement
}

// Create card body
function createCardBody(name, description, price, imageUrl, _id) {
    const cardElement = document.createElement("div")
    const cardBodyElement = document.createElement("div")
    const cardTitleElement = document.createElement("h3")
    const cardTextElement = document.createElement("p")
    const cardPriceElement = document.createElement("h4")
    const cardImg = createCardImage(name, imageUrl)

    cardElement.classList.add("card", "shadow")
    cardBodyElement.classList.add("card-body")
    cardTitleElement.classList.add("card-title")
    cardTextElement.classList.add("card-text")
    cardPriceElement.classList.add("text-center", "my-5", "text-danger", "font-weight-bold")

    cardElement.appendChild(cardImg)
    cardTitleElement.innerHTML = name
    cardTextElement.innerHTML = description
    cardPriceElement.innerHTML = price / 100 + " €"
    productsElement.appendChild(cardElement)
    cardElement.appendChild(cardBodyElement)
    cardBodyElement.appendChild(cardTitleElement)
    cardBodyElement.appendChild(cardTextElement)
    cardBodyElement.appendChild(cardPriceElement)

    createCardButton(_id, cardBodyElement)

    return cardElement
}

// Create card button
function createCardButton(_id, cardBodyElement) {
    const viewButtonElement = document.createElement("a")
    viewButtonElement.classList.add("btn", "btn-success", "btn-lg", "view-product", "stretched-link", "d-block", "m-auto")
    viewButtonElement.setAttribute("href", "./produit.html?id=" + _id)
    viewButtonElement.innerHTML = "Voir le produit"
    cardBodyElement.appendChild(viewButtonElement)
    return viewButtonElement
}