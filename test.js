"use strict";

(function () {
    let cat = new Category("Pantalones", "Pantalones cortos");
    let pro = new Product ("111", "Nike", "Shorts", 10, 0.21, "image");
    let pro1 = new Product ("222", "Adidas", "Shorts", 10, 0.21, "image");
    let c = new Cords("32333", "3344440");
    let sto = new Store("111-111-111", "Zara", "C/Ciudad Real 4", "926555333", c);
    let sh1 = StoreHouse.getInstance("sh1", pro, cat, sto, 5);

    console.log("Añadiendo categoria 1: ", sh1.addCategory(cat));
    console.log(sh1.category);
    console.log("Añaadiendo producto 1: ", sh1.addProduct(pro, cat));
    console.log("Borrando el producto 1: ", sh1.removeProduct(pro));
    console.log("Añadiendo producto en la tienda 1: ", sh1.addProductInShop(pro, sto, 3));
    console.log("Añadiendo una cantidad: ", sh1.addQuantityProductInShop(pro, sto, 5));
    console.log("Añadiendo tienda: ", sh1.addShop(sto));
    console.log("Borrando la tienda : ", sh1.removeShop(sto));
    console.log("GetShopProduct", sh1.getShopProducts(sto, pro));
})();