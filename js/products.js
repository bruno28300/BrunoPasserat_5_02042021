document.addEventListener('DOMContentLoaded', function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            /* Récupération des éléments de l'API */
            let response = JSON.parse(this.responseText);
            let i;
            for (i = 0; i < response.length; i++) {
                const {
                    _id,
                    name,
                    price,
                    description,
                    imageUrl
                } = response[i];

                /* Affichage des éléments des produits */
                document.getElementsByClassName("card-title")[i].innerHTML = name;
                document.getElementsByClassName("card-text")[i].innerHTML = description;
                document.getElementsByClassName("price")[i].innerHTML = "Prix : <span class='text-danger font-weight-bold'>" +
                    price / 100 + " €</span>";
                document.getElementsByClassName("card-img-top")[i].innerHTML = "<img src=" +
                    imageUrl + " alt=" + name + ">";
                document.getElementsByClassName("view-product")[i].href = "./produit.html?id=" + _id;
            }
        }
    };

    /* Connexion à l'API */
    products.open("GET", "http://localhost:3000/api/furniture");
    products.send();
});