document.addEventListener('DOMContentLoaded', function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            /* Get product elements */
            let response = JSON.parse(this.responseText);
            const {
                name,
                price,
                varnish
            } = response;

            /* Get varnish choice */
            let varnishChoice = localStorage.varnishOption;
            console.log(localStorage.varnishOption);
            let choice = "";
            switch (varnishChoice) {
                case "varnish1":
                    choice = varnish[0];
                    break;
                case "varnish2":
                    choice = varnish[1];
                    break;
                case "varnish3":
                    choice = varnish[2];
                    break;
            }


            function addArticle() {

                // create a table row
                let tr = document.createElement("tr");

                // Create <td> elements with class names 
                let tdArticle = document.createElement("td");
                let tdVernis = document.createElement("td");
                let tdQuantite = document.createElement("td");
                let tdPrix = document.createElement("td");

                tr.appendChild(tdArticle);
                tr.appendChild(tdVernis);
                tr.appendChild(tdQuantite);
                tr.appendChild(tdPrix);
                tdArticle.classList.add("article");
                tdVernis.classList.add("varnish");
                tdQuantite.classList.add("qte");
                tdPrix.classList.add("price");

                // Add row to table body
                document.getElementsByTagName("tbody")[0].appendChild(tr);
                let qte = 1;
                tdArticle.innerHTML = name;
                tdVernis.innerHTML = choice;
                tdQuantite.innerHTML = qte;
                tdPrix.innerHTML = (price * qte) / 100 + " ???";
                document.getElementById("totalCart").innerHTML = (price * qte) / 100 + " ???";

            }

            addArticle();
        }
    };

    /* Get product by id + varnish option */
    function getProductAddedToCart() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        id = urlParams.get("id");
        varnish = urlParams.get("option");
        products.open("GET", "http://localhost:3000/api/furniture/" + id);
        products.send();
    }

    getProductAddedToCart();
});