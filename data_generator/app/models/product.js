const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    nutrition: {
        calories: Number,
        protein: Number,
        carbohydrates: Number,
        fat: Number
    },
    barcode: String,
    status: String,
    weightGross: Number,
    weightNet: Number,
    manufacturerCountry: String,
    composition: String,
    expirationDate: Date,
    brand: String,
    manufacturer: String,
    photo: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
