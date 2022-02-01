"use strict";

class Product {
    #serialNumber;
    #name;
    #description;
    #price;
    #tax;
    #images;
    constructor (serialNumber, name, description, price, tax, images){
        this.#serialNumber = serialNumber;
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#tax = tax;
        this.#images = [images];
    }

    get serialNumber(){
        return this.#name;
    }

    set serialNumber(value){
        this.#name = value;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }

    get description(){
        return this.#description;
    }

    set description(value){
        this.#description = value;
    }

    get price(){
        return this.#price;
    }

    set price(value){
        this.#price = value;
    }

    get tax(){
        return this.#tax;
    }

    set tax(value){
        this.#tax = value;
    }

    get images(){
        return this.#images;
    }

    set images(value){
        this.#images = value;
    }
}

class Clothes extends Product {
    #mark;
    #size;
    constructor(serialNumber, name, description, price, tax, images, mark, size){
        super (serialNumber, name, description, price, tax, images);

        this.#mark = mark;
        this.#size = size;
    }
}

class Music extends Product {
    #artist;
    #disk;
    #nameSong;
    constructor(serialNumber, name, description, price, tax, images, artist, disk, nameSong){
        super (serialNumber, name, description, price, tax, images);

        this.#artist = artist;
        this.#disk = disk;
        this.#nameSong = nameSong;
    }
}

class Meal extends Product {
    #mark;
    #type;
    #vegetarian;
    constructor(serialNumber, name, description, price, tax, images, mark, type, vegetarian){
        super (serialNumber, name, description, price, tax, images);

        this.#mark = mark;
        this.#type = type;
        this.#vegetarian = vegetarian;
    }
}