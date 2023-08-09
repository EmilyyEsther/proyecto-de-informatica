// JavaScript code for handling the shopping cart

let products = [];
let total = 0;

function add(product, price) {
    products.push(product);
    total += price;
    document.getElementById("pagar").innerHTML = "Pagar (" + total + "$)";
}

function emily() {
    window.alert(products.join(", ") + "\nTotal: " + total + "$");
}
