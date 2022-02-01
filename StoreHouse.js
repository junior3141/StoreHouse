"use strict";

let StoreHouse = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
	let instantiated; //Objeto con la instancia única ShoppingCart

	function init(name, product, category, shop, stock) { //Inicialización del Singleton

        class StoreHouse {
            #name;
            #product;
            #category;
            #shop;
            #stock;
            #defaultCategory;
            #defaultShop;
        
            _categories = [];
            _products = [];
            _stores = [];
        
            constructor (name, product, category, shop, stock){
                //La función se invoca con el operador new
                if (!new.target) throw new InvalidAccessConstructorException();
        
                this.#name = name;
                this.#product = product;
                this.#category = category;
                this.#shop = shop;
                this.#stock = stock;
                this.#defaultCategory = "Default Category";
                this.#defaultShop = "Default Shop";
            }
        
            get name(){
                return this.#name;
            }
        
            set name(value){
                if (value = "") throw new EmptyValueException("value");
                this.#name = value;
            }
        
            get category(){
                // referencia para habilitar el closure en el objeto
                let array = this._categories;
                return {
                    * [Symbol.iterator](){
                        for (let categories of array){
                            yield categories;
                        }
                    }
                }
            }
        
            get shop(){
                // referencia para habilitar el closure en el objeto
                let array = this._stores;
                return {
                    * [Symbol.iterator](){
                        for (let shop of array){
                            yield shop;
                        }
                    }
                } 
            }
        
            addCategory(category){
                if (category == null) throw new NullValueException("Category");
                if (this._categories.includes(category)) throw new InListException("Category");
        
                this._categories.push(category);
        
                return this._categories.length;
            }
        
            removeCategory(category){
                if (!this._categories.includes(category)) throw new NotInListException("Category");
        
                this._categories.splice(category, 1);
                return this._categories.length;
            }
        
            addProduct(product, category){
                if (!product == null) throw new NullValueException("Product");
        
                let obj = {
                    product: product,
                    category: category
                };
        
                this._products.push(obj);
        
                return this._products.length;
            }
        
            removeProduct(product){
                if (!this._products.includes(this._products.product)) throw new NotInListException("Product");
                
                let index = this._products.indexOf(product);
                this._products.splice(index,1);
        
                return this._products.length;
            }
        
            addProductInShop(product, shop, units){
                if (this._products.includes(product)) throw new NotInListException("Product");
                if (this._stores.includes(shop)) throw new NotInListException("Shop");
        
                let obj = {
                    product: product,
                    shop: shop,
                    units: units
                };
        
                this._stores.push(obj);
        
                return this._stores.length;
            }
        
            addQuantityProductInShop(product, shop, stock = 1){
                if (this._products.includes(product)) throw new NotInListException("Product");
                if (this._stores.includes(shop)) throw new NotInListException("Shop");
                if (stock < 0) throw new NegativeStockException();
        
                let obj = {
                    product: product,
                    shop: shop,
                    units: this._stores.units + stock
                };
        
                this._stores.push(obj);
        
                return this._stores.length;
            }
        
            getCategoryProduct(category, typeProduct){
                if (category == null) throw new NullValueException("Category");
        
                let a = [];
        
                for (let i=0; i<this._categories.length; i++){
                    if (this._categories.category === category && this._categories.product === typeProduct){
                        a.push(this._categories(i));
                    }
                }
        
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = a;
                return {
                    * [Symbol.iterator](){
                        for (let categories of array){
                            yield categories;
                        }
                    }
                } 
            }
        
            addShop(shop){
                if (shop == null) throw new NullValueException("Shop");
                if (this._stores.includes(shop)) throw new InListException("Shop");
        
                this._stores.push(shop);
        
                return this._stores.length;
            }
        
            removeShop(shop){
                if (!this._stores.includes(shop)) throw new NotInListException("Shop");
        
                let index = this._stores.indexOf(product);
                this._stores.splice(index,1);
        
                return this._stores.length;
            }
        
            getShopProducts(shop, typeProduct){
                if (shop == null) throw new NullValueException("Shop");
        
                let a = [];
        
                for (let i=0; i<this._stores.length; i++){
                    if (this._stores.shop === shop && this._stores.product === typeProduct){
                        a.push(this._stores(i));
                    }
                }
        
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = a;
                return {
                    * [Symbol.iterator](){
                        for (let shop of array){
                            yield shop;
                        }
                    }
                } 
            }
        
        }

		let sh = new StoreHouse(name, product, category, shop, stock);//Devolvemos el objeto ShoppingCart para que sea una instancia única.
		Object.freeze(sh);
		return sh;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function (name, product, category, shop, stock) {
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(name, product, category, shop, stock); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
})();
   