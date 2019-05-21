//jshint esversion:6

const Product = require("../models/product");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {
    useNewUrlParser: true
});

var products = [
    new Product({
        imagePath: "https://i.imgur.com/NuNskvi.png.jpg",
        title: "Blood Cursed Knight",
        description: "Creature - Vampire Knight",
        price: 10
    }),
    new Product({
        imagePath: "https://i.imgur.com/lsaBqGa.jpg",
        title: "Cadaverous Knight",
        description: "Creature - Zombie Knight",
        price: 12
    }),
    new Product({
        imagePath: "https://i.imgur.com/uTQYH1W.png",
        title: "Balan, Wandering Knight",
        description: "Legendary Creature - Cat Knight",
        price: 22
    }),
    new Product({
        imagePath: "https://i.imgur.com/hPy5TGo.png",
        title: "Azorious Knight-Arbiter",
        description: "Creature - Human Knight",
        price: 8
    }),
    new Product({
        imagePath: "https://i.imgur.com/dpUQZpL.jpg",
        title: "Capashen Knight",
        description: "Creature - Human Knight",
        price: 6
    }),
    new Product({
        imagePath: "https://i.imgur.com/tozS7pn.jpg",
        title: "Blood Knight",
        description: "Creature - Human Knight",
        price: 11
    }),
    new Product({
        imagePath: "https://i.imgur.com/34B8Pcy.png",
        title: "Attended Knight",
        description: "Creature - Human Knight",
        price: 9
    }),
    new Product({
        imagePath: "https://i.imgur.com/vhzxAhx.jpg",
        title: "Benalish Knight",
        description: "Creature - Human Knight",
        price: 15
    }),
    new Product({
        imagePath: "https://i.imgur.com/7doyYxA.jpg",
        title: "Black Knight",
        description: "Summon Knight",
        price: 14
    }),
    new Product({
        imagePath: "https://i.imgur.com/6XxRI4E.png",
        title: "Aryel, Knight of Windgrace",
        description: "Legendary Creature - Human Knight",
        price: 23
    }),
];


var done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            ExtensionScriptApis();
        }
    });
}

function exit() {
    mongoose.disconnect();
}