"use strict";

class Store {
    #cif;
    #name;
    #address;
    #phone;
    #cords;
    constructor (cif, name, address, phone, cords){
        this.#cif = cif;
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#cords = cords;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }
}