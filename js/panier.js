document.addEventListener('DOMContentLoaded', function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);

            var name = response.name;
            var price = response.price;
            var description = response.description;
            var varnish = response.varnish;
            console.log(varnish);

            document.getElementById("article").innerHTML = name;
            document.getElementById("varnish").innerHTML = varnish;
            document.getElementById("qte").innerHTML = +1;
            document.getElementById("price").innerHTML = price / 100 + " €";
            
            for (i = 0; i < varnish.length; i++) {
                var option = document.createElement("P");
                option.innerHTML = '<a href="#">' + varnish[i] + '</a>';
                document.getElementsByClassName("dropdown-menu")[0].appendChild(option);

                console.log(varnish[i]);
            }

        }
    };

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    id = urlParams.get("id");
    varnish = urlParams.get("option");
    products.open("GET", "http://localhost:3000/api/furniture/" + id);
    products.send();
    var a = document.getElementById("cartPlus");
    a.href = "./panier.html?id=" + id;
});