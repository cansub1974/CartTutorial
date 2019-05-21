//jshint esversion:6

const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const schema = new Schema({
// imagePath: {
//     type: String,
//     require: true
// },
// title: {
//     type: String,
//     require: true
// },
// description: {
//     type: String,
//     require: true
// },
// price: {
//     type: Number,
//     require: true
// }
// });

// model.exports = mongoose.model("Product", schema);

const productSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }

});

const Product = mongoose.model('Product', productSchema);
//model.exports = Product;