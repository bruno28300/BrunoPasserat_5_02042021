// Creation card image
function creationCardImage(imageUrl, name) {
    const imgElement = document.createElement("img")
    imgElement.classList.add("card-img-top")
    imgElement.setAttribute("src", imageUrl)
    imgElement.setAttribute("alt", name)
    imgElement.setAttribute("loading", "lazy")
    return imgElement
}

// Creation card body
function creationCardBody(cardBodyElement, cardTitleElement, cardTextElement, priceElement, priceSpanElement, cardElement, description, price) {
    cardBodyElement.classList.add("card-body")
    cardTitleElement.classList.add("card-title")
    cardTextElement.classList.add("card-text")
    priceElement.classList.add("text-center", "my-5")
    priceSpanElement.classList.add("text-danger", "font-weight-bold")
    cardTitleElement.innerHTML = name
    cardTextElement.innerHTML = description
    priceSpanElement.innerHTML = price / 100 + " €"
    cardElement.appendChild(cardBodyElement)
    cardBodyElement.appendChild(cardTitleElement)
    cardBodyElement.appendChild(cardTextElement)
    cardBodyElement.appendChild(priceElement)
    priceElement.appendChild(priceSpanElement)
}

// Creation view product button
function creationViewButton(viewButtonElement, _id) {
    viewButtonElement.classList.add("btn", "btn-success", "btn-lg", "view-product", "stretched-link", "d-block", "m-auto")
    viewButtonElement.setAttribute("href", "./produit.html?id=" + _id)
    viewButtonElement.innerHTML = "Voir le produit"
}