document.addEventListener("DOMContentLoaded", function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var id = response._id;
            var name = response.name;
            var price = response.price;
            var description = response.description;
            var imageUrl = response.imageUrl;
            var varnish = response.varnish;
            const varnishes = response.varnish;
            console.table(varnishes);

            document.getElementsByTagName("h2")[0].innerHTML = "Orinoco - " + name;
            document.getElementsByClassName("card-title")[0].innerHTML = name;
            document.getElementsByClassName("card-text")[0].innerHTML = description;
            document.getElementsByClassName("price")[0].innerHTML = "Prix : <span class='text-danger font-weight-bold'>" +
                price /
                100 + " €</span>";
            document.getElementsByClassName("card-img-top")[0].src = imageUrl;
            document.getElementsByClassName("card-img-top")[0].alt = name;

            for (i = 0; i < varnish.length; i++) {
                var option = document.createElement("button");
                option.innerHTML = varnish[i];
                document.getElementsByClassName("dropdown-menu")[0].appendChild(option);
            }
            for (i = 0; i <= varnish.length; i++) {
                document.getElementsByTagName("button")[i].setAttribute("id", "option" + [i]);
                document.getElementsByTagName("button")[i].setAttribute("class", "dropdown-item");

                const optionContentText = document.getElementById("option" + [i]).textContent;
                console.log(optionContentText);

                document.getElementById("option" + [i]).addEventListener("click", function () {
                    localStorage.setItem("id", id);
                    localStorage.setItem("varnish2", optionContentText);
                    let choix = "Choix : " + localStorage.getItem("varnish2");
                    console.log(id);
                    console.log(choix);
                    var a = document.getElementById("cartPlus");
                    a.href = "./panier.html?id=" + id + ", varnish=" + varnish;
                });

            }
        }
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get("id");
    products.open("GET", "http://localhost:3000/api/furniture/" + id);
    products.send();

    console.log("par là : " + localStorage.getItem("varnish2"));
});