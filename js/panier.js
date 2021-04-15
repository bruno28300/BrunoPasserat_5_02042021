document.addEventListener('DOMContentLoaded', function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            /* Récupération des éléments de l'API */
            let response = JSON.parse(this.responseText);
            const {
                name,
                price,
                varnish
            } = response;

            /* Récupération Choix de vernis */
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

                // creating all cells
                for (let i = 0; i < 5; i++) {

                    // creates a table row
                    let tr = document.createElement("tr");
                    console.log(tr);
                    for (let j = 0; j < 4; j++) {
                        // Create <td> elements with class names 
                        let td = document.createElement("td");
                        tr.appendChild(td);
                        let qte = 1;
                        document.getElementsByClassName("article")[0].innerHTML = name;
                        document.getElementsByClassName("varnish")[0].innerHTML = choice;
                        document.getElementsByClassName("qte")[0].innerHTML = qte;
                        document.getElementsByClassName("price")[0].innerHTML = (price * qte) / 100 + " €";
                        document.getElementById("totalCart").innerHTML = (price * qte) / 100 + " €";
                    }

                    // Add row to table body
                    document.getElementsByTagName("tbody")[0].appendChild(tr);
                }
            }

            addArticle();

            function addArticle2() {

                    // creating a new tr 
                    var tr = document.createElement("tr");
            
                    // adding the created elements to a object with a class name
                    document.getElementsByTagName("tbody")[0].appendChild(tr);
                    tr.appendChild(document.createElement("td")).classList.add("col-md-4");
                    tr.appendChild(document.createElement("td")).classList.add("col-md-4");
                    tr.appendChild(document.createElement("td")).classList.add("col-md-2");
                    tr.appendChild(document.createElement("td")).classList.add("col-md-2");
            }
            
            addArticle2()
        }
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get("id");
    varnish = urlParams.get("option");
    products.open("GET", "http://localhost:3000/api/furniture/" + id);
    products.send();
});