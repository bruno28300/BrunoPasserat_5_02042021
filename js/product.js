document.addEventListener("DOMContentLoaded", function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            /* Récupération des éléments de l'API */
            let response = JSON.parse(this.responseText);
            const {
                _id,
                name,
                price,
                description,
                imageUrl,
                varnish
            } = response;
            const varnishSelection = document.getElementById('varnishSelection');

            /* Affichage des éléments du produit */
            document.getElementsByTagName("h2")[0].innerHTML = "Orinoco - " + name;
            document.getElementsByClassName("card-title")[0].innerHTML = name;
            document.getElementsByClassName("card-text")[0].innerHTML = description;
            document.getElementsByClassName("price")[0].innerHTML = "Prix : <span class='text-danger font-weight-bold'>" +
                price /
                100 + " €</span>";
            document.getElementsByClassName("card-img-top")[0].src = imageUrl;
            document.getElementsByClassName("card-img-top")[0].alt = name;

            /* Choix du vernis */
            let i = 1;
            varnish.forEach(function (item) {
                let option = document.createElement("option");
                varnishSelection.appendChild(option);
                option.innerHTML = item;
                option.value = "varnish" + i;
                i++;
            });

            // Quand un vernis est sélectionné 
            varnishSelection.addEventListener('change', function () {
                let x = document.getElementById("cartPlus");
                let y = varnishSelection.value
                console.log(y);
                /* Sauvegarde dans localStorage */
                localStorage.setItem("id", _id);
                localStorage.setItem("varnishOption", y);
                x.addEventListener("click", function () {
                    alert("Votre produit a bien été rajouté au panier");
                    x.href = "./panier.html?id=" + _id + "&varnishOption=" + y;
                })
            })
        }
    };

    /* Connexion à l'API */
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get("id");
    products.open("GET", "http://localhost:3000/api/furniture/" + id);
    products.send();

});