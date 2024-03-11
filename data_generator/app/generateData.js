const { faker } = require('@faker-js/faker/locale/ru');
const Product = require('./models/product');

function generateProductData(count) {
    let products = [];
    for (let i = 0; i < count; i++) {
        let product = {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            category: faker.commerce.department(),
            nutrition: {
                calories: faker.number.int({ min: 500, max: 1000 }),
                protein: faker.number.int({ min: 10, max: 50 }),
                carbohydrates: faker.number.int({ min: 10, max: 100 }),
                fat: faker.number.int({ min: 5, max: 30 })
            },
            barcode: faker.string.uuid(),
            status: faker.helpers.arrayElement(['In stock', 'Out of stock', 'Coming soon']),
            weightGross: faker.number.int({ min: 100, max: 5000 }),
            weightNet: faker.number.int({ min: 50, max: 3000 }),
            manufacturerCountry: faker.location.country(),
            composition: faker.lorem.sentence(),
            expirationDate: faker.date.future({ years: 2 }),
            brand: faker.company.name(),
            manufacturer: faker.company.name(),
            photo: faker.image.url(),
            // Другие случайные поля...
        };
        products.push(product);
    }
    return products;
}

async function insertGeneratedData(products) {
    try {
        await Product.insertMany(products);
        console.log(`${products.length} товаров успешно созданы и сохранены в базе данных.`);
    } catch (error) {
        console.error('Ошибка при сохранении товаров в базу данных:', error);
    }
}

module.exports = { generateProductData, insertGeneratedData };
