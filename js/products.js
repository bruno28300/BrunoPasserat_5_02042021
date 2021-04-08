document.addEventListener('DOMContentLoaded', function () {
    var products = new XMLHttpRequest();
    products.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var i;
            for (i = 0; i < response.length; i++) {
                var id = response[i]._id;
                var name = response[i].name;
                var price = response[i].price;
                var description = response[i].description;
                var imageUrl = response[i].imageUrl;
                document.getElementsByClassName("card-title")[i].innerHTML = name;
                document.getElementsByClassName("card-text")[i].innerHTML = description;
                document.getElementsByClassName("price")[i].innerHTML = "Prix : <span class='text-danger font-weight-bold'>" +
                    price / 100 + " €</span>";
                document.getElementsByClassName("card-img-top")[i].innerHTML = "<img src=" +
                    imageUrl + " alt=" + name + ">";
                document.getElementsByClassName("view-product")[i].href = "./produit.html?id=" + id;
            }
        }
    };

    products.open("GET", "http://localhost:3000/api/furniture");
    products.send();
});