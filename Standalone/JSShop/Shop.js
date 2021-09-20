"use strict";

//Creación del prototipo tienda (Alberga las funciones principales de cada tienda).
Shop.prototype = {
    //Se define el constructor.
    constructor: Shop,

    //Método stock para agregar un producto o reabastecerlo.
    stock: function (productName, productQuantity) {
        productName = productName.toLowerCase();

        //Si el producto existe, solo agregarle la cantidad expresada, retorna verdadero.
        if(this.products.hasOwnProperty(productName)){
            this.products[productName].quantity += productQuantity;
            return true;
        }

        //Si hay suficientes puestos disponibles, agregar el producto expresado con su respectiva cantidad, retorna verdadero.
        if(Object.keys(testShop.products).length < this.shopStalls){
            this.products[productName] = {
                quantity: productQuantity
            }
            return true;
        }else{
            //Mensaje a mostrar si no hay puestos disponibles, retorna falso.
            console.log("Los puestos están llenos.");
            return false;
        }
    },

    //Método comprar para reducir la cantidad de un producto.
    buy: function (productName, productQuantity) {
        this.products[productName].quantity -= productQuantity;
        if(this.products[productName].quantity > 0){
            return true;
        }else{
            return false;
        }
    },

    //Método para borrar un producto.
    remove: function (productName){
        delete this.products[productName];
        console.log("Producto borrado."+this.products[productName]);
        return true;
    }
}

//Definición del constructor Shop con sus llaves respectivas.
function Shop(shopName,shopStalls) {
    this.shopName = shopName;
    this.shopStalls = shopStalls,
    this.products = {}
}

//Se crea una tienda de prueba utilizando el constructor, la cual hereda todas las
// llaves definidas en el constructor y los métodos del prototipo.
let testShop = new Shop("Tienda de prueba", 10);

//------------//
//Métodos HTML//
//------------//


//Método a ejecutar cuando se presiona el botón de añadir producto a la tienda.
function addProduct(newProductName, newProductQuantity){
    //Si se presiona el botón sin llenar los campos, mostrar el mensaje "vacío"
    if((newProductName == "")||(newProductQuantity == "")){
        console.log("vacío");
        return;
    }

    //Conversión de datos para evitar errores.
    newProductName = newProductName.toString();
    newProductName = newProductName.toLowerCase();
    newProductQuantity = parseInt(newProductQuantity);

    //Ejecuta el método stock de la tienda y se evalúa.
    if (testShop.stock(newProductName, newProductQuantity)){

        //Evalúa si ya existe un elemento HTML perteneciente al producto.
        if(document.getElementById("product_"+newProductName) != null){
            let regex = /[0-9]+/g;
            let htmlProduct = document.getElementById("product_"+newProductName+"_quantity");

            //Si existe, actualiza la cantidad mostrada en la página HTML mediante una expresión regular.
            htmlProduct.innerHTML = htmlProduct.innerHTML.replace(regex, testShop.products[newProductName].quantity);
        }else{
            let htmlProductContainer = document.createElement("div");
            let htmlProductParagraph = document.createElement("p");
            let htmlProductQuantity = document.createElement("span");
            let htmlProductBuyForm = document.createElement("form");
            let htmlProductBuyFormButton = document.createElement("button");
            let htmlProductBuyFormInput = document.createElement("input");

            //Si no existe, se crean los elementos respectivos para luego ser añadidos a la página.
            htmlProductContainer.id = "product_container_"+newProductName;
            htmlProductContainer.className = "product_container";

            htmlProductParagraph.id = "product_"+newProductName;
            htmlProductParagraph.innerHTML = "Producto: "+newProductName+", ";

            htmlProductQuantity.id = "product_"+newProductName+"_quantity";
            htmlProductQuantity.innerHTML = "Cantidad: "+testShop.products[newProductName].quantity;

            htmlProductBuyForm.id = "buy_product_"+newProductName;

            htmlProductBuyFormButton.id = "buy_product_"+newProductName+"_button";
            htmlProductBuyFormButton.type = "button";
            htmlProductBuyFormButton.innerHTML = "Comprar";

            htmlProductBuyFormInput.id = "buy_product_"+newProductName+"_quantity";
            htmlProductBuyFormInput.name = "buy_product_"+newProductName;
            htmlProductBuyFormInput.type = "number";
            htmlProductBuyFormInput.placeholder = "Cantidad a comprar";

            document.getElementById("available_product_list").appendChild(htmlProductContainer);
            document.getElementById("product_container_"+newProductName).appendChild(htmlProductParagraph);
            document.getElementById("product_"+newProductName).appendChild(htmlProductQuantity);
            document.getElementById("product_container_"+newProductName).appendChild(htmlProductBuyForm);
            document.getElementById("buy_product_"+newProductName).appendChild(htmlProductBuyFormButton);
            document.getElementById("buy_product_"+newProductName).appendChild(htmlProductBuyFormInput);

            //Se acopla el método "comprar" a los botones creados para cada producto.
            document.getElementById("buy_product_"+newProductName+"_button").addEventListener("click", function buyProductListener(){
                buyProduct(document.getElementById('buy_product_'+newProductName+'_quantity').value, newProductName);
            });
        }
    }
}

//Método a ejecutar cuando se presiona el botón comprar.
function buyProduct(buyQuantity, product){
    let regex = /[0-9]+/g;
    let htmlProduct = document.getElementById("product_"+product+"_quantity");

    //El método buy del objeto testShop retorna verdadero si siguen habiendo productos, y falso si ya no quedan productos.
    if (testShop.buy(product, buyQuantity)){
        htmlProduct.innerHTML = htmlProduct.innerHTML.replace(regex, testShop.products[product].quantity);
    }else{
        htmlProduct.innerHTML = htmlProduct.innerHTML.replace(regex, testShop.products[product].quantity);
        //Al no haber productos, se ejecuta el método remove del objeto testShop, y se borra el elemento HTML perteneciente al producto.
        testShop.remove(product);
        document.getElementById("product_container_"+product).remove();
    }
}